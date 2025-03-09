<script setup>
import { destinations } from '@/data.json'
import { computed } from 'vue'
import TheDetailExpCard from '@/components/TheDetailExpCard.vue';

const props = defineProps({
    id: { type: Number },
    slug: { type: String }
})

const destination = computed(() => {
    return destinations.find(destination => destination.id === props.id)
});

const experience = computed(() => destination.value.experiences.find(exp => exp.slug == props.slug));


</script>

<template>
    <section>
        <TheDetailExpCard :experience="experience" />
    </section>
</template>