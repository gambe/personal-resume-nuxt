<template>
    <component :is="props.tag" :class="`inline-block ${props.className}`">
        {{ displayedText }}
        <span
            v-if="! isDone"
            class="align-middle animate-pulse-slow bg-current h-[1em] inline-block ml-[2px] w-[1px]"
        />
    </component>
</template>

<script setup lang="ts">
    // Component Types
    interface Properties {
        text: string[] | string;
        className?: string;
        once?: boolean;
        speed?: number;
        delay?: number;
        tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span';
    }

    const props = withDefaults(
              defineProps<Properties>(),
              {
                  className: '',
                  delay: 0,
                  once: false,
                  speed: 70,
                  tag: 'span',
              }
          )

          , displayedText = ref<string>( '' )
          , currentIndex = ref<number>( 0 )
          , currentTextIndex = ref<number>( 0 )
          , isDone = ref<boolean>( false )
          , timeoutReference = ref<number | null>( null )

          , textArray = computed<string[]>( () => ( Array.isArray( props.text ) ? props.text : [ props.text ] ) )

          // Funzione per ripristinare lo stato quando cambia il testo
          , resetState = (): void => {

              displayedText.value = '';
              currentIndex.value = 0;
              currentTextIndex.value = 0;
              isDone.value = false;

              if( timeoutReference.value )
                  clearTimeout( timeoutReference.value );

          }

          , animateText = (): void => {

              if( currentTextIndex.value >= textArray.value.length ) {

                  if( props.once ) {

                      isDone.value = true;
                      return;

                  }

                  resetState();
                  animateText(); // Riparte da zero

                  return;

              }

              const currentText: string = textArray.value[ currentTextIndex.value ] || '';

              if( currentIndex.value >= currentText.length ) {

                  timeoutReference.value = setTimeout(
                      () => {

                          currentTextIndex.value ++;
                          currentIndex.value = 0;
                          displayedText.value = '';
                          animateText();

                      },
                      1500
                  );

                  return;

              }

              timeoutReference.value = setTimeout( () => {

                  displayedText.value += currentText[ currentIndex.value ];
                  currentIndex.value ++;
                  animateText();

              }, props.speed );

          };

    watch(
        () => props.text,
        () => resetState(),
        { immediate: true }
    );

    // Avvia l'animazione dopo il delay iniziale
    watch(
        textArray,
        () => {

            timeoutReference.value = setTimeout( animateText, props.delay );

        },
        { immediate: true }
    );

    // Pulisce il timeout quando il componente viene smontato
    onUnmounted( () => {

        if( timeoutReference.value )
            clearTimeout( timeoutReference.value );

    } );

</script>
