<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import { destinations } from '@/data.json'
import TheDestinationCard from '@/components/TheDestinationCard.vue';

// const route = useRoute();
// const route_id = computed(() => Number(route.params.id))

// can be accept the routeParams by props ! route.js -> props: true
const props = defineProps({
    id: { type: Number, required: true },
    name: { type: String, required: true }
})

const destination = computed(() => {
    return destinations.find((destination) => destination.id === (props.id));
})

</script>

<template>
    <!-- <pre>{{ typeof id }} || {{ name }}</pre> -->
    <section>
        <TheDestinationCard :destination="destination" />
    </section>
</template>
