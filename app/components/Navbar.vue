<template>
    <header
        :class="['sticky-header', isScrolled ? 'bg-white/80 dark:bg-gray-900/80 shadow-sm' : 'bg-transparent']"
    >
        <div class="container md:px-6 mx-auto px-4">
            <div class="flex h-16 items-center justify-between">
                <a class="font-display font-semibold md:text-xl relative text-lg tracking-tight" href="#hero">
                    <span class="animate-rainbow google-gradient-text">
                        Tommaso Gamberini
                    </span>
                    <div
                        v-if="false"
                        class="-bottom-1 absolute bg-google-gradient duration-300 group-hover:w-full h-px left-0 transition-all w-0"
                    />
                </a>

                <nav class="hidden md:flex space-x-8">
                    <a
                        v-for="(item, index) in navItems"
                        :key="index"
                        class="font-medium group hover:text-black relative text-gray-700 text-sm transition-colors"
                        :href="item.href"
                        :style="{ '--hover-color': item.color }"
                    >
                        {{ item.label }}
                        <span
                            class="absolute bottom-0 duration-300 ease-out-expo group-hover:w-full h-0.5 left-0 transition-all w-0"
                            :style="{ backgroundColor: item.color }"
                        />
                    </a>
                </nav>

                <button
                    aria-label="Toggle menu"
                    class="focus:outline-none hover:text-black md:hidden p-2 rounded-md text-gray-800"
                    @click="isOpen = ! isOpen"
                >
                    <close-icon
                        v-if="isOpen"
                        class="animate-fade-in"
                        size="24"
                        style="color: '#EA4335'"
                    />
                    <menu-icon
                        v-else
                        class="animate-fade-in"
                        size="24"
                        style="color: '#4285F4'"
                    />
                </button>
            </div>
        </div>

        <div v-if="isOpen" class="absolute animate-slide-in-right backdrop-blur-md bg-white/90 border-b border-gray-100 dark:bg-gray-900/90 inset-x-0 md:hidden shadow-lg top-16 z-50">
            <div class="px-4 py-6 space-y-4">
                <a
                    v-for="(item, index) in navItems"
                    :key="index"
                    class="block font-medium hover:bg-gray-50 px-4 py-3 rounded-md text-base transition-all"
                    :href="item.href"
                    :style="{ color: item.color, animationDelay: `${index * 0.05}s` }"
                    @click="isOpen = false"
                >
                    {{ item.label }}
                </a>
            </div>
        </div>
    </header>
</template>

<script setup lang="ts">
    import CloseIcon from '~/components/icons/CloseIcon.vue';
    import MenuIcon from '~/components/icons/MenuIcon.vue';

    defineProps( { scrollY: Number } );

    const isOpen = ref<boolean>( false )
          , isScrolled = ref<boolean>( false )

          , navItems = [
              {
                  color: '#4285F4',
                  href: '#hero',
                  label: 'Home',
              },
              {
                  color: '#EA4335',
                  href: '#about',
                  label: 'About',
              },
              {
                  color: '#FBBC05',
                  href: '#skills',
                  label: 'Skills',
              },
              {
                  color: '#34A853',
                  href: '#projects',
                  label: 'Projects',
              },
              {
                  color: '#4285F4',
                  href: '#contact',
                  label: 'Contact',
              },
          ];

    watch( () => scrollY, newScrollY => {

        isScrolled.value = newScrollY > 20;

    } );
</script>

<style scoped>

</style>
