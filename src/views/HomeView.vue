<script setup>
import sourceData from '@/data.json'
import { ref } from 'vue';
import ThePlaceNavigation from '@/components/ThePlaceNavigation.vue';
const destinations = ref(sourceData.destinations)

</script>

<template>
  <main>
    <h1 class="text-2xl text-center underline mb-5 font-bold">All Destinations</h1>
    <div class="grid grid-cols-4 gap-4 px-10">
      <ThePlaceNavigation :destinations="destinations" />
    </div>
  </main>
</template>
