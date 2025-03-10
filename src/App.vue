<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <RouterView v-slot="{ Component }">
    <transition name="fade">
      <component :is="Component" />
    </transition>
  </RouterView>
</template>

<style lang="css">
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
