<template>
    <div class="min-h-screen relative">
        <!-- Custom cursor -->
        <div
            v-if="false"
            class="custom-cursor"
            :style="cursorStyle"
        />

        <!-- FIXME: Background gradient -->
        <div
            v-if="false"
            class="-z-10 bg-gradient-radial fixed from-blue-50 inset-0 opacity-70 to-white"
        />

        <!-- FIXME: Subtle floating circle elements for decoration -->
        <div
            v-if="false"
            class="animate-float circle-bg h-[600px] opacity-20 right-[-100px] top-[-100px] w-[600px]"
            :style="{animationDelay: '0s'}"
        />
        <div
            v-if="false"
            class="animate-float bottom-[20%] circle-bg h-[400px] left-[-100px] opacity-10 w-[400px]"
            :style="{animationDelay: '1s'}"
        />

        <!-- Navigation -->
        <navbar :scroll-y="scrollY" />

        <!-- Main content -->
        <main>
            <slot />
        </main>

        <!-- Footer -->
        <footer
            class="border-gray-100 border-t mt-16 py-6 text-center text-gray-500 text-sm"
        >
            <div class="container mx-auto">
                <p>© {{ new Date().getFullYear() }} Tommaso Gamberini. All rights reserved.</p>
            </div>
        </footer>
    </div>
</template>

<script setup lang="ts">
    import Navbar from '~/components/Navbar.vue';

    interface PositionType {
        x: number;
        y: number;
    }

    const cursorPosition = ref<PositionType>( {
              x: 0,
              y: 0,
          } )
          , isHovering = ref<boolean>( false )
          , scrollY = ref<number>( 0 )

          , cursorStyle = computed( () => ( {
              backgroundColor: isHovering.value ? 'rgba(255, 255, 255, 0.5)' : 'rgba(0, 0, 0, 0.5)',
              height: isHovering.value ? '48px' : '24px',
              left: `${ cursorPosition.value.x }px`,
              top: `${ cursorPosition.value.y }px`,
              transform: `translate(-50%, -50%) scale(${ isHovering.value ? 1.2 : 1 })`,
              width: isHovering.value ? '48px' : '24px',
          } ) );

    onMounted( () => {

        const handleMouseMove = ( event: MouseEvent ): void => {

                  cursorPosition.value = {
                      x: event.clientX,
                      y: event.clientY,
                  };

              }

              , handleScroll = (): void => {

                  scrollY.value = window.scrollY;

              }

              , handleMouseOver = ( event: MouseEvent ): void => {

                  const element = event.target as HTMLElement;

                  isHovering.value = !! ( element.tagName === 'A'
                      || element.tagName === 'BUTTON'
                      || element.classList.contains( 'interactive' ) );

              };

        globalThis.addEventListener( 'mousemove', handleMouseMove );
        window.addEventListener( 'scroll', handleScroll );
        document.addEventListener( 'mouseover', handleMouseOver );

        const sections = document.querySelectorAll( '.fade-in-section' )
              , observerOptions = {
                  root: null,
                  rootMargin: '0px',
                  threshold: 0.15,
              }

              // eslint-disable-next-line compat/compat
              , observer = new IntersectionObserver( entries => {

                  for( const entry of entries ) {

                      if( entry.isIntersecting )
                          entry.target.classList.add( 'is-visible' );

                  }

              }, observerOptions );

        for( const section of sections )

            observer.observe( section );

        onBeforeUnmount( () => {

            globalThis.removeEventListener( 'mousemove', handleMouseMove );
            window.removeEventListener( 'scroll', handleScroll );
            document.removeEventListener( 'mouseover', handleMouseOver );
            for( const section of sections )

                observer.unobserve( section );

        } );

    } );

</script>

<style scoped>

</style>
