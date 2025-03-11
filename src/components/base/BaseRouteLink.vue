<script setup>
import { computed } from 'vue';

const props = defineProps({
    to: { required: true }
})
const isExternal = computed(() => {
    return typeof props.to == "string" && props.to.startsWith('http')
});
</script>

<template>
    <section>
        <a v-if="isExternal" :href="to" target="_blank">
            <slot />
        </a>
        <RouterLink v-else :to=to>
            <slot />
        </RouterLink>
    </section>
</template>
