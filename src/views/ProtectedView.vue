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
        <p class="container-amber text-red-400">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit suscipit
            aliquid
            exercitationem?
        </p>

        <button class="btn-blue" @click="logout">Logout</button>

        <RouterLink :to="{ name: 'invoices' }" class="btn-blue inline-block mx-1">Invoices</RouterLink>
    </section>
</template>

<style scoped></style>