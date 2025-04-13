<template>
    <section id="skills" class="bg-gray-50/50 section-padding">
        <div class="container mx-auto px-4">
            <scroll-reveal>
                <div class="mb-16 text-center">
                    <span class="bg-gray-100 font-medium inline-block mb-4 px-3 py-1 rounded-full text-gray-800 text-sm">
                        Skills & Expertise
                    </span>
                    <h2 class="font-bold google-gradient-text md:text-4xl text-3xl tracking-tight">
                        Technical Capabilities
                    </h2>
                </div>
            </scroll-reveal>

            <!-- Top skills bars -->
            <scroll-reveal :delay="100">
                <div class="mb-16">
                    <h3 class="font-semibold mb-6 text-google-blue text-xl">
                        Core Competencies
                    </h3>
                    <div class="gap-x-12 gap-y-4 grid grid-cols-1 md:grid-cols-3">
                        <div
                            v-for="(skill, i) in expertSkills"
                            :key="i"
                            class="space-y-2"
                        >
                            <div class="flex items-center justify-between">
                                <span class="font-medium" :style="{ color: skill.color }">
                                    {{ skill.name }}
                                </span>
                                <span class="text-gray-500 text-sm">
                                    {{ skill.level }}%
                                </span>
                            </div>
                            <div class="bg-gray-100 h-2 overflow-hidden rounded-full w-full">
                                <div
                                    class="h-full rounded-full"
                                    :style="{
                                        width: skill.level + '%',
                                        transition: 'width 1s ease-out',
                                        animation: 'animate-slide-in-right 1s ease forwards',
                                        animationDelay: `${i * 0.1}s`,
                                        backgroundColor: skill.color
                                    }"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </scroll-reveal>

            <!-- Skill categories -->
            <div class="gap-6 grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2">
                <scroll-reveal
                    v-for="(category, i) in skillCategories"
                    :key="i"
                    :delay="100 + i * 50"
                    :direction="i % 2 === 0 ? 'up' : 'down'"
                >
                    <div
                        class="border-t-4 glass-card h-full p-6 rounded-xl"
                        :style="{ borderColor: category.borderColor }"
                    >
                        <div class="bg-gray-100 h-10 inline-flex items-center justify-center mb-4 rounded-lg w-10">
                            <component
                                :is="category.icon"
                                class="h-5 w-5"
                                :class="category.colorClass"
                            />
                        </div>
                        <h3 class="font-semibold mb-3 text-lg" :style="{ color: category.borderColor }">
                            {{ category.title }}
                        </h3>
                        <div class="flex flex-wrap gap-2">
                            <span
                                v-for="(skill, k) in category.skills"
                                :key="k"
                                class="skill-tag"
                                :style="{
                                    animationDelay: `${k * 0.05}s`,
                                    backgroundColor: `${category.borderColor}20`,
                                    color: category.borderColor,
                                    borderColor: `${category.borderColor}40`
                                }"
                            >
                                {{ skill }}
                            </span>
                        </div>
                    </div>
                </scroll-reveal>
            </div>

            <!-- Legend -->
            <scroll-reveal :delay="300">
                <div class="border border-google-blue/30 glass-card mt-12 p-6 rounded-xl">
                    <h3 class="font-semibold mb-4 text-google-blue text-lg">
                        Proficiency Levels
                    </h3>
                    <div class="flex flex-wrap gap-4">
                        <div
                            v-for="(level, i) in proficiencyLevels"
                            :key="i"
                            class="flex gap-2 items-center"
                        >
                            <div class="h-3 rounded-full w-3" :style="{ backgroundColor: level.color }" />
                            <span class="text-sm" :style="{ color: level.color }">
                                {{ level.name }} ({{ level.percentage }}%+)
                            </span>
                        </div>
                    </div>
                    <p class="mt-4 text-gray-500 text-sm">
                        I continuously update my skills to stay current with modern web development practices and emerging technologies.
                    </p>
                </div>
            </scroll-reveal>
        </div>
    </section>
</template>

<script lang="ts" setup>
    // Custom components
    import ScrollReveal from '~/components/ScrollReveal.vue';

    // Icons
    import BugIcon from '~/components/icons/BugIcon.vue';
    import DatabaseIcon from '~/components/icons/DatabaseIcon.vue';
    import FastForwardIcon from '~/components/icons/FastForwardIcon.vue';
    import LayersIcon from '~/components/icons/LayersIcon.vue';
    import LayoutPanelIcon from '~/components/icons/LayoutPanelIcon.vue';
    import ZapIcon from '~/components/icons/ZapIcon.vue';

    interface SkillCategory {
        title: string;
        icon: unknown;
        skills: string[];
        borderColor: string;
        colorClass: string;
    }

    interface SkillLevel {
        name: string;
        percentage: number;
        color: string;
    }

    interface ExpertSkill {
        name: string;
        level: number;
        color: string;
    }

    const skillCategories: SkillCategory[] = [
              {
                  borderColor: '#4285F4',
                  colorClass: 'text-google-blue',
                  icon: LayoutPanelIcon,
                  skills: [
                      'Vue.js',
                      'React',
                      'Nuxt',
                      'Next.js',
                      'TypeScript',
                      'JavaScript',
                      'HTML',
                      'CSS/SCSS',
                  ],
                  title: 'Frontend',
              },
              {
                  borderColor: '#EA4335',
                  colorClass: 'text-google-red',
                  icon: LayersIcon,
                  skills: [
                      'Component Design',
                      'Design Systems',
                      'Pattern Libraries',
                      'UI/UX Principles',
                      'Accessibility',
                  ],
                  title: 'Architecture',
              },
              {
                  borderColor: '#FBBC05',
                  colorClass: 'text-google-yellow',
                  icon: ZapIcon,
                  skills: [
                      'Webpack',
                      'Vite',
                      'ESLint',
                      'Redux',
                      'Pinia',
                      'Jest',
                      'Vitest',
                      'Playwright',
                      'Cypress',
                      'Storybook',
                  ],
                  title: 'Tools & Libraries',
              },
              {
                  borderColor: '#34A853',
                  colorClass: 'text-google-green',
                  icon: DatabaseIcon,
                  skills: [
                      'PHP',
                      'Node.js',
                      'Express',
                      'Laravel',
                      'Symfony',
                      'REST',
                      'GraphQL',
                  ],
                  title: 'Backend Knowledge',
              },
              {
                  borderColor: '#4285F4',
                  colorClass: 'text-google-blue',
                  icon: BugIcon,
                  skills: [
                      'Unit Testing',
                      'Integration Testing',
                      'E2E Testing',
                      'TDD',
                      'Code Review',
                      'Technical Documentation',
                  ],
                  title: 'Testing & Quality',
              },
              {
                  borderColor: '#EA4335',
                  colorClass: 'text-google-red',
                  icon: FastForwardIcon,
                  skills: [
                      'Web Vitals',
                      'Lighthouse',
                      'Optimization',
                      'Monitoring',
                      'Error Detection',
                      'Performance Auditing',
                      'WebPageTest',
                  ],
                  title: 'Analytics & Performance',
              },
          ]

          , proficiencyLevels: SkillLevel[] = [
              {
                  color: '#4285F4',
                  name: 'Expert',
                  percentage: 95,
              },
              {
                  color: '#EA4335',
                  name: 'Advanced',
                  percentage: 85,
              },
              {
                  color: '#FBBC05',
                  name: 'Intermediate',
                  percentage: 70,
              },
              {
                  color: '#34A853',
                  name: 'Familiar',
                  percentage: 50,
              },
          ]

          , expertSkills: ExpertSkill[] = [
              {
                  color: '#4285F4',
                  level: 90,
                  name: 'React',
              },
              {
                  color: '#EA4335',
                  level: 95,
                  name: 'Vue',
              },
              {
                  color: '#FBBC05',
                  level: 95,
                  name: 'JavaScript',
              },
              {
                  color: '#34A853',
                  level: 90,
                  name: 'TypeScript',
              },
              {
                  color: '#4285F4',
                  level: 85,
                  name: 'CSS/SCSS',
              },
              {
                  color: '#EA4335',
                  level: 85,
                  name: 'Testing',
              },
          ];
</script>
