<script setup>
import { ref } from 'vue'


const tests = ref([1, 2, 3, 4, 5])

const emit = defineEmits(['test2:emit'])

const initiateEmit = () => {
    emit('test2:emit', tests.value)
}
</script>

<template>
    <section>
        <button @click="initiateEmit">Emit</button>
    </section>
</template>
