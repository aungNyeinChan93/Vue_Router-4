<script setup>
import sourceData from '@/data.json'
import { ref } from 'vue';
import ThePlaceNavigation from '@/components/ThePlaceNavigation.vue';
import { isNavigationFailure, NavigationFailureType } from 'vue-router';
import { useRouter } from 'vue-router';

const router = useRouter();
const destinations = ref(sourceData.destinations)

const navigationError = async () => {
  const failure = await router.push('/');
  if (isNavigationFailure(failure, NavigationFailureType.duplicated)) {
    console.log(failure.to);
    console.log(failure.from.fullPath);
  }
}
/* 
NavigationFailureType.aborted	Navigation was canceled before completing.
NavigationFailureType.duplicated	Tried navigating to the same route without changes.
NavigationFailureType.cancelled	A new navigation occurred before the previous one finished.
NavigationFailureType.redirected	Navigation was redirected to another route.
*/
</script>

<template>
  <main>
    <h1 class="text-2xl text-center underline mb-5 font-bold">All Destinations</h1>
    <button @click="navigationError">Navigation Duplicate</button>
    <div class="grid grid-cols-4 gap-4 px-10">
      <ThePlaceNavigation :destinations="destinations" />
    </div>
  </main>
</template>
