<template>
    <section id="projects" class="section-padding">
        <div class="container mx-auto px-4">
            <scroll-reveal>
                <div class="mb-16 text-center">
                    <span class="bg-gray-100 font-medium inline-block mb-4 px-3 py-1 rounded-full text-gray-800 text-sm">
                        Portfolio
                    </span>
                    <h2 class="font-bold mb-4 md:text-4xl text-3xl tracking-tight">
                        Featured Projects
                    </h2>
                    <p class="max-w-2xl mx-auto text-gray-700">
                        A selection of projects that showcase my expertise in frontend development,
                        user experience, and technical problem-solving.
                    </p>
                </div>
            </scroll-reveal>

            <!-- Filter tabs -->
            <scroll-reveal :delay="100">
                <div class="flex flex-wrap gap-2 justify-center mb-12">
                    <button
                        :class="buttonClass('all')"
                        @click="filter = 'all'"
                    >
                        All
                    </button>
                    <button
                        v-for="(tag, index) in uniqueTags"
                        :key="index"
                        :class="buttonClass(tag)"
                        @click="filter = tag"
                    >
                        {{ tag }}
                    </button>
                </div>
            </scroll-reveal>

            <!-- Featured projects -->
            <div class="gap-8 grid grid-cols-1 lg:grid-cols-3 mb-12 md:grid-cols-2">
                <scroll-reveal
                    v-for="(project, index) in featuredProjects"
                    :key="project.id"
                    :delay="150 + index * 75"
                >
                    <div class="flex flex-col glass-card group h-full overflow-hidden rounded-xl">
                        <!-- Image placeholder -->
                        <div class="aspect-video bg-gray-200 overflow-hidden relative">
                            <div class="flex h-full items-center justify-center text-gray-400 w-full">
                                <img
                                    v-if="project.image"
                                    alt="Project image"
                                    class="h-full object-cover w-full"
                                    :src="project.image"
                                >
                            </div>

                            <!-- Hover overlay -->
                            <div class="absolute bg-black/60 duration-300 flex gap-4 group-hover:opacity-100 inset-0 items-center justify-center opacity-0 transition-opacity">
                                <a
                                    v-if="project.liveUrl"
                                    aria-label="View live site"
                                    class="backdrop-blur-sm bg-white/20 flex h-10 hover:scale-110 items-center justify-center rounded-full text-white transition-transform w-10"
                                    :href="project.liveUrl"
                                    rel="noopener noreferrer"
                                    target="_blank"
                                >
                                    <external-link :size="18" />
                                </a>
                                <a
                                    v-if="project.githubUrl"
                                    aria-label="View source code"
                                    class="backdrop-blur-sm bg-white/20 flex h-10 hover:scale-110 items-center justify-center rounded-full text-white transition-transform w-10"
                                    :href="project.githubUrl"
                                    rel="noopener noreferrer"
                                    target="_blank"
                                >
                                    <github :size="18" />
                                </a>
                            </div>
                        </div>

                        <!-- Project info -->
                        <div class="flex flex-col flex-grow p-6">
                            <h3 class="font-semibold mb-2 text-lg">
                                {{ project.title }}
                            </h3>
                            <p class="flex-grow mb-4 text-gray-700">
                                {{ project.description }}
                            </p>

                            <div class="flex flex-wrap gap-2 mb-4">
                                <span
                                    v-for="(tag, tagIndex) in project.tags"
                                    :key="tagIndex"
                                    class="bg-gray-100 font-medium px-2 py-1 rounded-md text-gray-700 text-xs"
                                >
                                    {{ tag }}
                                </span>
                            </div>

                            <a
                                class="font-medium group-hover:underline hover:text-gray-900 inline-flex items-center text-gray-700 text-sm"
                                href="#"
                            >
                                View details
                                <right-arrow-icon class="group-hover:translate-x-1 ml-1 transition-transform" :size="16" />
                            </a>
                        </div>
                    </div>
                </scroll-reveal>
            </div>

            <!-- Other projects -->
            <div class="gap-6 grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2">
                <scroll-reveal
                    v-for="(project, index) in nonFeaturedProjects"
                    :key="project.id"
                    :delay="200 + index * 75"
                >
                    <div class="flex flex-col glass-card h-full p-6 rounded-xl">
                        <h3 class="font-semibold mb-2 text-lg">
                            {{ project.title }}
                        </h3>
                        <p class="flex-grow mb-4 text-gray-700">
                            {{ project.description }}
                        </p>

                        <div class="flex flex-wrap gap-2 mb-4">
                            <span
                                v-for="(tag, tagIndex) in project.tags"
                                :key="tagIndex"
                                class="bg-gray-100 font-medium px-2 py-1 rounded-md text-gray-700 text-xs"
                            >
                                {{ tag }}
                            </span>
                        </div>

                        <div class="flex gap-4 mt-2">
                            <a
                                v-if="project.liveUrl"
                                class="font-medium hover:text-gray-900 hover:underline inline-flex items-center text-gray-700 text-sm"
                                :href="project.liveUrl"
                                rel="noopener noreferrer"
                                target="_blank"
                            >
                                <external-link class="mr-1" :size="14" />
                                Live Demo
                            </a>
                            <a
                                v-if="project.githubUrl"
                                class="font-medium hover:text-gray-900 hover:underline inline-flex items-center text-gray-700 text-sm"
                                :href="project.githubUrl"
                                rel="noopener noreferrer"
                                target="_blank"
                            >
                                <github class="mr-1" :size="14" />
                                Source Code
                            </a>
                        </div>
                    </div>
                </scroll-reveal>
            </div>
        </div>
    </section>
</template>

  <script setup lang="ts">

    import ScrollReveal from '~/components/ScrollReveal.vue';

    // Icons
    import RightArrowIcon from '~/components/icons/RightArrowIcon.vue';
    // import { ChevronRight, ExternalLink, Github } from 'lucide-vue-next';
    // import { computed, ref } from 'vue';

    interface Project {
        id: number;
        title: string;
        description: string;
        tags: string[];
        image: string;
        liveUrl?: string;
        githubUrl?: string;
        featured: boolean;
    }

    const filter = ref<string>( 'all' )

          , projects: Project[] = [
              {
                  description: 'The website you are currently viewing...',
                  featured: true,
                  githubUrl: '#',
                  id: 1,
                  image: '/img/portfolio-tommasogamberini.png',
                  liveUrl: '#',
                  tags: [
                      'Vue.js',
                      'Nuxt',
                      'TypeScript',
                      'TailwindCSS',
                  ],
                  title: 'Personal Website',
              },
              {
                  description: 'Real-time dashboard for financial analytics...',
                  featured: true,
                  githubUrl: '#',
                  id: 2,
                  image: '',
                  liveUrl: '#',
                  tags: [
                      'Next.js',
                      'TypeScript',
                      'TailwindCSS',
                      'Chart.js',
                  ],
                  title: 'Financial Dashboard',
              },
              {
                  description: 'HIPAA-compliant patient management system...',
                  featured: true,
                  githubUrl: '#',
                  id: 3,
                  image: '',
                  liveUrl: '#',
                  tags: [
                      'React',
                      'GraphQL',
                      'AWS',
                      'Jest',
                  ],
                  title: 'Healthcare Patient Portal',
              },
              {
                  description: 'Cross-platform task management application...',
                  featured: false,
                  id: 4,
                  image: '',
                  liveUrl: '#',
                  tags: [
                      'Vue.js',
                      'Vuex',
                      'Firebase',
                      'PWA',
                  ],
                  title: 'Productivity App',
              },
              {
                  description: 'Property listing platform with advanced filtering...',
                  featured: false,
                  githubUrl: '#',
                  id: 5,
                  image: '',
                  tags: [
                      'React',
                      'Node.js',
                      'MongoDB',
                      'Google Maps API',
                  ],
                  title: 'Real Estate Platform',
              },
              {
                  description: 'Comprehensive component library and design system...',
                  featured: false,
                  githubUrl: '#',
                  id: 6,
                  image: '',
                  tags: [
                      'React',
                      'Storybook',
                      'Styled Components',
                      'Jest',
                  ],
                  title: 'Design System',
              },
          ]

          , filteredProjects = computed( () => {

              return filter.value === 'all'
                  ? projects
                  : projects.filter( project => project.tags.includes( filter.value ) );

          } )

          , featuredProjects = computed( () =>
              filteredProjects.value.filter( p => p.featured ) )

          , nonFeaturedProjects = computed( () =>
              filteredProjects.value.filter( p => ! p.featured ) )

          , uniqueTags = computed( () =>
              [ ... new Set( projects.flatMap( p => p.tags ) ) ] )

          , buttonClass = ( tag: string ) =>
              `px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  filter.value === tag
                      ? 'bg-gray-900 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`;
  </script>
