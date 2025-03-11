<script setup>
// import BaseRouteLink from '@/components/base/BaseRouteLink.vue';
</script>

<template>
    <section>
        <BaseRouteLink :to="{ name: 'home' }">Home</BaseRouteLink>
        <BaseRouteLink to="https://www.youtube.com/ ">YouTube</BaseRouteLink>
    </section>
</template>
