<script setup>
import { useRoute } from 'vue-router';
import { destinations } from '@/data.json'
import { computed } from 'vue';
import TheExperiencesCard from '@/components/layouts/TheExperiencesCard.vue';
const route = useRoute();

const destination = computed(() => {
    return destinations.find(destination => destination.slug == route.name);
})
const experiences = computed(() => destination.value.experiences);

</script>

<template>
    <section>
        <div v-if="experiences">
            <h2 class=" capitalize text-2xl font-bold py-3 underline"> experiences of {{ $route.name }} </h2>
            <div class="grid grid-cols-4 gap-6">
                <template v-for="exp in experiences" :key="exp">
                    <RouterLink :to="{ name: 'experienceoShow', params: { id: destination.id, slug: exp.slug } }">
                        <TheExperiencesCard :experience="exp" />
                    </RouterLink>
                </template>
            </div>
        </div>
    </section>
</template>
