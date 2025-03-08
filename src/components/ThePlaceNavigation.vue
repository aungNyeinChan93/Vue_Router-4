<script setup>
import { RouterLink } from 'vue-router';

const props = defineProps({
    destinations: Array
})

</script>

<template>
    <RouterLink v-for="destination in destinations" :key="destination.id" :to="destination.slug">
        <p class=" font-mono text-red-400 text-center mb-1 capitalize">{{ destination.name }}</p>
        <img :src="`/images/${destination.image}`" class=" object-contain rounded shadow w-full h-auto" alt="des.img">
    </RouterLink>
</template>