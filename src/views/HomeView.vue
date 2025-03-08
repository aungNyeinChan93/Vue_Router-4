<script setup>
import sourceData from '@/data.json'
import { RouterLink } from 'vue-router';
import { ref } from 'vue';

const destinations = ref(sourceData.destinations)

</script>

<template>
  <main>
    <h1 class="text-2xl text-center underline mb-5 font-bold">All Destinations</h1>
    <div class="grid grid-cols-4 gap-4 px-10">
      <RouterLink v-for="destination in destinations" :key="destination.id" :to="destination.slug">
        <p class=" font-mono text-red-400 text-center">{{ destination.name }}</p>
        <img :src="`/images/${destination.image}`" alt="des.img">
      </RouterLink>
    </div>
  </main>
</template>
