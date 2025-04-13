<template>
    <section id="hero" class="flex items-center justify-center min-h-[92vh] px-4 py-20 relative">
        <div class="absolute inset-0 overflow-hidden">
            <div class="animate-float google-blue-circle h-[500px] opacity-50 right-[15%] top-[5%] w-[500px]" style="animation-delay: 0s" />
            <div class="animate-float bottom-[20%] google-red-circle h-[400px] left-[10%] opacity-40 w-[400px]" style="animation-delay: 1.5s" />
            <div class="animate-float google-yellow-circle h-[300px] left-[5%] opacity-30 top-[30%] w-[300px]" style="animation-delay: 1s" />
            <div class="animate-float bottom-[10%] google-green-circle h-[450px] opacity-40 right-[5%] w-[450px]" style="animation-delay: 0.5s" />
        </div>

        <div class="container duration-1000 ease-out-expo mx-auto transition-all" :class="isLoaded ? 'opacity-100' : 'opacity-0 translate-y-8'">
            <div class="max-w-4xl mx-auto text-center">
                <div class="animate-fade-in bg-google-blue font-medium inline-block mb-4 px-3 py-1 rounded-full shadow-lg text-sm text-white" style="animation-delay: 300ms; background-color: #4285F4">
                    Senior Frontend Developer
                </div>

                <h1 class="font-bold lg:text-7xl mb-6 md:text-6xl text-4xl tracking-tight">
                    <span class="block text-gray-800">
                        Hello, I'm
                    </span>
                    <span class="animate-pulse-slow font-display google-gradient-text">
                        Tommaso Gamberini
                    </span>
                </h1>

                <div class="h-16 mb-8">
                    <animated-text
                        class="md:text-2xl text-gray-700 text-xl"
                        :delay="1000"
                        :speed="60"
                        tag="h2"
                        :text="['I build exceptional web experiences.', 'I craft pixel-perfect interfaces.', 'I transform ideas into elegant code.']"
                    />
                </div>

                <div class="flex flex-col gap-4 items-center justify-center mt-8 sm:flex-row sm:mt-12">
                    <a
                        class="active:scale-95 animate-fade-in colorful-shadow duration-300 font-medium hover:shadow-google-blue/20 hover:shadow-lg px-6 py-3 rounded-md text-white transition-all"
                        href="#contact"
                        style="animation-delay: 600ms; background-color: #4285F4"
                    >
                        Get in touch
                    </a>
                    <a
                        class="active:scale-95 animate-fade-in bg-white border border-gray-200 duration-300 font-medium hover:bg-gray-50 hover:shadow-black/5 hover:shadow-lg px-6 py-3 rounded-md text-gray-800 transition-all"
                        href="#projects"
                        style="animation-delay: 700ms"
                    >
                        View my work
                    </a>
                </div>

                <div class="animate-fade-in flex gap-3 justify-center mt-10" style="animation-delay: 800ms">
                    <span class="block h-4 rounded-full w-4" style="background-color: #4285F4" />
                    <span class="block h-4 rounded-full w-4" style="background-color: #EA4335" />
                    <span class="block h-4 rounded-full w-4" style="background-color: #FBBC05" />
                    <span class="block h-4 rounded-full w-4" style="background-color: #34A853" />
                </div>
            </div>
        </div>

        <div class="absolute animate-bounce bottom-12 opacity-70">
            <a aria-label="Scroll down" href="#about">
                <arrow-down-circle-icon
                    class="hover:opacity-100 opacity-50 text-google-blue transition-opacity"
                    :size="36"
                    style="color: #4285F4"
                />
            </a>
        </div>
    </section>
</template>

<script setup lang="ts">
    // Components
    import AnimatedText from '~/components/AnimatedText.vue';

    // Icons
    import ArrowDownCircleIcon from '~/components/icons/ArrowDownCircleIcon.vue';

    // Setup
    const isLoaded = ref( false );

    onMounted( () => {

        setTimeout( () => {

            isLoaded.value = true;

        }, 100 );

    } );
</script>
