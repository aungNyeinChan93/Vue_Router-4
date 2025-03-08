<script setup>


const emit = defineEmits(['test:emit']);

</script>

<template>
    <section>
        <button @click="$emit('test:emit', 'default payload')">Click</button>
    </section>
</template>
