<script setup>

const props = defineProps({
    experience: { type: Object }
})
</script>

<template>
    <section>
        <p class="text-md font-medium text-start text-gray-900">{{ experience.name }}</p>
        <img :src="`/images/${experience.image}`" :alt="experience.image" class="rounded my-4">
        <p class="text-sm text-gray-400">{{ experience.description.substring(0, 100) }}</p>
    </section>
</template>
