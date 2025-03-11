<script setup>
// import BaseRouteLink from '@/components/base/BaseRouteLink.vue';
import TheNavBar from '@/components/base/TheNavBar.vue';
</script>

<template>
    <section>
        <BaseRouteLink :to="{ name: 'home' }">Home</BaseRouteLink>
        <BaseRouteLink to="https://www.youtube.com/ ">YouTube</BaseRouteLink>

        <TheNavBar />
    </section>
</template>
