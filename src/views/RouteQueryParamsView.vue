<script setup>
import { computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const route = useRoute();
const router = useRouter();

const routeQuery = computed(() => route.query);

const setFilter = (filters) => {
    router.push({ query: { ...route.query, filterBy: filters } })
}

const setPage = (page) => {
    router.replace({ query: { ...route.query, pageNumber: Number(page) } })
}

</script>

<template>
    <section>
        <h4 class="text-2xl text-center text-red-500 p-3"> Query Params </h4>
        <p v-if="Object.keys(routeQuery).length" class="container-amber px-10 mx-10">
            Route query : {{ routeQuery }}
        </p>
        <button class="btn-blue mx-10" @click="setFilter('test')">SetFilter Query</button>
        <button class="btn-blue mx-10" @click="setPage(1)">setPage Query</button>
    </section>
</template>

<style scoped></style>