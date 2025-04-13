<template>
    <div>
        <hero-section />
        <about-section />
        <skills-section />
        <projects-section />
    </div>
</template>

<script setup lang="ts">
    import AboutSection from '~/components/Home/AboutSection.vue';
    import HeroSection from '~/components/Home/HeroSection.vue';
    import ProjectsSection from '~/components/Home/ProjectsSection.vue';
    import SkillsSection from '~/components/Home/SkillsSection.vue';
</script>
