<script setup>
import TheTest from '@/components/TheTest.vue';
import TheTest2 from '@/components/TheTest2.vue';
import TheTest3 from '@/components/TheTest3.vue';
import { ref } from 'vue';
import { useRoute, RouterView } from 'vue-router';

const tests = ref([]);
const route = useRoute();

const props = defineProps({
    name: String,
    isActive: Boolean,
    query: String
})

const handleEmit = (value) => {
    alert(value);
}
const handleTest2Emit = (value) => {
    tests.value = value
}

</script>

<template>
    <section>
        {{ isActive }}
        <pre>{{ $route.query.q }} || {{ query }} || {{ route.query.q }} || {{ route.params }}</pre>
        <h2 class="text-3xl text-center">Test-1 Page</h2>
        <TheTest @test:emit="handleEmit" />

        <TheTest2 @test2:emit="handleTest2Emit" />

        <TheTest3 :name="name" />

        <section>
            <RouterView />
        </section>

    </section>
</template>
