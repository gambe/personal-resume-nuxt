<template>
    <div ref="elementRef" :class="className">
        <slot />
    </div>
</template>

<script setup lang="ts">

    interface ScrollRevealProperties {
        className?: string;
        direction?: 'down' | 'left' | 'right' | 'up';
        delay?: number;
        distance?: number;
        threshold?: number;
        once?: boolean;
    }

    const props = withDefaults( defineProps<ScrollRevealProperties>(), {
              className: '',
              delay: 0,
              direction: 'up',
              distance: 20,
              once: true,
              threshold: 0.1,
          } )

          , elementRef = ref<HTMLElement | null>( null )
          , isVisibleReference = ref( false );

    onMounted( () => {

        if( ! elementRef.value ) return;

        const element = elementRef.value;

        // Configura la trasformazione iniziale in base alla direzione
        let initialTransform = 'translateY(0)';

        switch( props.direction ) {
            case 'up': {

                initialTransform = `translateY(${ props.distance }px)`;
                break;

            }
            case 'down': {

                initialTransform = `translateY(-${ props.distance }px)`;
                break;

            }
            case 'left': {

                initialTransform = `translateX(${ props.distance }px)`;
                break;

            }
            case 'right': {

                initialTransform = `translateX(-${ props.distance }px)`;
                break;

            }

            // no default
        }

        // Imposta gli stili iniziali
        element.style.opacity = '0';
        element.style.transform = initialTransform;
        element.style.transition = `opacity 0.6s ease-out ${ props.delay }ms, transform 0.6s ease-out ${ props.delay }ms`;
        element.style.willChange = 'opacity, transform';

        // eslint-disable-next-line compat/compat
        const observer = new IntersectionObserver(
            ( [ entry ] ) => {

                if( props.once && isVisibleReference.value ) return;

                if( entry && entry.isIntersecting ) {

                    element.style.opacity = '1';
                    element.style.transform = 'translate(0)';
                    isVisibleReference.value = true;

                    if( props.once ) observer.unobserve( element );

                } else if( ! props.once ) {

                    element.style.opacity = '0';
                    element.style.transform = initialTransform;
                    isVisibleReference.value = false;

                }

            },
            { threshold: props.threshold }
        );

        observer.observe( element );

        onUnmounted( () => {

            observer.unobserve( element );

        } );

    } );
</script>
