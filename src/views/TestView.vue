<script setup>
import TheTest from '@/components/TheTest.vue';
import TheTest2 from '@/components/TheTest2.vue';
import { ref } from 'vue';

const tests = ref([]);

const handleEmit = (value) => {
    alert(value);
}
const handleTest2Emit = (value) => {
    tests.value = value
}

</script>

<template>
    <section>
        <h2 class="text-3xl text-center">Test-1 Page</h2>
        <TheTest @test:emit="handleEmit" />

        <TheTest2 @test2:emit="handleTest2Emit" />
    </section>
</template>
