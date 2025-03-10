<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import { destinations } from '@/data.json'
import TheDestinationCard from '@/components/TheDestinationCard.vue';
import GoBack from '@/components/base/GoBack.vue';
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
    <section>
        <TheDestinationCard :destination="destination" />
        <GoBack class="my-4" />
    </section>
</template>
