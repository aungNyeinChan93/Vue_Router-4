<script setup>
import router from '@/router';
import { ref } from 'vue';

const logout = () => {
    window.username = ''
    router.push({ name: 'login' })
    window.location.reload()
}


const username = ref(window.username)
</script>

<template>
    <section>
        Protected View ||{{ username }}

        <button @click="logout">Logout</button>
    </section>
</template>

<style scoped></style>