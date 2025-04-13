<template>
    <section id="about" class="section-padding">
        <div class="container mx-auto px-4">
            <scroll-reveal>
                <div class="mb-16 text-center">
                    <span class="bg-gray-100 font-medium inline-block mb-4 px-3 py-1 rounded-full text-gray-800 text-sm">
                        About Me
                    </span>
                    <h2 class="font-bold google-gradient-text md:text-4xl text-3xl tracking-tight">
                        The story so far
                    </h2>
                </div>
            </scroll-reveal>

            <div class="gap-12 grid grid-cols-1 items-center md:grid-cols-2">
                <!-- Lato sinistro: immagine e dettagli -->
                <div class="space-y-8">
                    <scroll-reveal :delay="100" direction="left">
                        <div class="relative">
                            <div class="aspect-square bg-gray-100 border-2 border-google-blue glass-card overflow-hidden rounded-2xl">
                                <div class="bg-gray-200 flex h-full items-center justify-center w-full">
                                    <span class="text-gray-500">
                                        Profile Photo
                                    </span>
                                </div>
                            </div>
                            <div class="-bottom-6 -right-6 absolute google-green-circle h-32 opacity-50 w-32" />
                        </div>
                    </scroll-reveal>

                    <scroll-reveal :delay="200" direction="left">
                        <div class="gap-4 grid grid-cols-2 mt-8">
                            <div class="border-google-blue border-l-4 glass-card p-4 rounded-xl">
                                <div class="flex gap-2 items-center mb-1">
                                    <calendar-clock-icon class="text-google-blue" size="16" />
                                    <span class="font-medium text-gray-500 text-xs">
                                        Experience
                                    </span>
                                </div>
                                <p class="font-semibold text-google-blue">
                                    8+ Years
                                </p>
                            </div>

                            <div class="border-google-red border-l-4 glass-card p-4 rounded-xl">
                                <div class="flex gap-2 items-center mb-1">
                                    <map-pin-house-icon class="text-google-red" size="16" />
                                    <span class="font-medium text-gray-500 text-xs">
                                        Location
                                    </span>
                                </div>
                                <p class="font-semibold text-google-red">
                                    Rimini, Italy
                                </p>
                            </div>

                            <div class="border-google-yellow border-l-4 glass-card p-4 rounded-xl">
                                <div class="flex gap-2 items-center mb-1">
                                    <briefcase-icon class="text-google-yellow" size="16" />
                                    <span class="font-medium text-gray-500 text-xs">
                                        Current
                                    </span>
                                </div>
                                <p class="font-semibold text-google-yellow">
                                    Senior Frontend Developer
                                </p>
                            </div>

                            <div class="border-google-green border-l-4 glass-card p-4 rounded-xl">
                                <div class="flex gap-2 items-center mb-1">
                                    <building-icon class="text-google-green" size="16" />
                                    <span class="font-medium text-gray-500 text-xs">
                                        Company
                                    </span>
                                </div>
                                <p class="font-semibold text-google-green">
                                    Abilio SpA (illimity bank)
                                </p>
                            </div>
                        </div>
                    </scroll-reveal>
                </div>

                <!-- Lato destro: Bio e info -->
                <div class="space-y-6">
                    <scroll-reveal :delay="200" direction="right">
                        <h3 class="font-bold mb-4 text-2xl text-google-blue">
                            Creating exceptional digital experiences
                        </h3>

                        <p class="mb-4 text-gray-700">
                            I'm a Senior Frontend Developer with 8+ years of experience crafting responsive,
                            performant, and beautiful web applications. My journey in web development began
                            with a curiosity about how things work on the web, which evolved into a passion
                            for creating polished user interfaces.
                        </p>

                        <p class="mb-6 text-gray-700">
                            I specialize in React, TypeScript, and modern frontend architecture. I'm deeply
                            committed to web performance, accessibility, and creating intuitive user experiences.
                            My approach combines technical expertise with an eye for design, ensuring that
                            the applications I build are not just functional, but delightful to use.
                        </p>
                    </scroll-reveal>

                    <scroll-reveal :delay="300" direction="right">
                        <div class="border-gray-100 border-t pt-6 space-y-4">
                            <h4 class="font-semibold text-google-red">
                                Career Highlights
                            </h4>

                            <ul class="space-y-3 text-gray-700">
                                <li class="flex gap-2 items-start">
                                    <span class="bg-google-blue h-1 inline-block mt-1 rounded-full w-1" />
                                    <span>Led frontend architecture for a SaaS platform serving 2M+ users</span>
                                </li>
                                <li class="flex gap-2 items-start">
                                    <span class="bg-google-red h-1 inline-block mt-1 rounded-full w-1" />
                                    <span>Reduced load times by 60% through optimization techniques</span>
                                </li>
                                <li class="flex gap-2 items-start">
                                    <span class="bg-google-yellow h-1 inline-block mt-1 rounded-full w-1" />
                                    <span>Implemented design systems that improved development velocity by 35%</span>
                                </li>
                                <li class="flex gap-2 items-start">
                                    <span class="bg-google-green h-1 inline-block mt-1 rounded-full w-1" />
                                    <span>Mentored junior developers, many of whom have advanced to senior roles</span>
                                </li>
                            </ul>
                        </div>
                    </scroll-reveal>

                    <scroll-reveal :delay="400" direction="right">
                        <div class="mt-8">
                            <a
                                class="border-b border-google-blue font-medium gap-2 hover:pb-1 hover:text-google-blue/80 inline-flex items-center pb-px text-google-blue text-sm transition-all"
                                href="#contact"
                            >
                                Let's work together
                                <right-arrow-icon />
                            </a>
                        </div>
                    </scroll-reveal>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
    // Icons
    import BriefcaseIcon from '~/components/icons/BriefcaseIcon.vue';
    import BuildingIcon from '~/components/icons/BuildingIcon.vue';
    import CalendarClockIcon from '~/components/icons/CalendarClockIcon.vue';
    import MapPinHouseIcon from '~/components/icons/MapPinHouseIcon.vue';
    import RightArrowIcon from '~/components/icons/RightArrowIcon.vue';

    // Import dinamico per ScrollReveal (se è un componente di animazione pesante)
    const ScrollReveal = defineAsyncComponent( () => import( '~/components/ScrollReveal.vue' ) );
</script>
