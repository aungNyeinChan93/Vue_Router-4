<script setup>
const props = defineProps({
    name: String
})
</script>

<template>
    <section>
        {{ name }}
    </section>
</template>

<style scoped></style>