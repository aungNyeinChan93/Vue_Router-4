<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import { destinations } from '@/data.json'
import TheDestinationCard from '@/components/TheDestinationCard.vue';

const route = useRoute();
const route_id = computed(() => Number(route.params.id))

const destination = computed(() => {
    return destinations.find((destination) => destination.id === route_id.value);
})

</script>

<template>
    <section>
        <TheDestinationCard :destination="destination" />
    </section>
</template>
