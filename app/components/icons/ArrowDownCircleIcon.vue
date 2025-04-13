
<template>
    <svg
        :height="props.size"
        viewBox="0 0 24 24"
        :width="props.size"
        xmlns="http://www.w3.org/2000/svg"
    >
        <!-- Icon from Lucide by Lucide Contributors - https://github.com/lucide-icons/lucide/blob/main/LICENSE --><g
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
        >
            <circle
                cx="12"
                cy="12"
                r="10"
            /><path d="M12 8v8m-4-4l4 4l4-4" /></g>
    </svg>
</template>

<script setup lang="ts">
// Types
    import { type IconPropertiesType } from '~/types/icon-types';

    const
        // Props
        props = withDefaults(
            defineProps<IconPropertiesType>(),
            {
                size: 24,
                strokeWidth: 2,
            }
        );

</script>
