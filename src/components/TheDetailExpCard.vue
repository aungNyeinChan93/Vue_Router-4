<script setup>
const props = defineProps({
    experience: { type: Object }
})
</script>

<template>
    <section>
        <div class="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
            <div class="space-y-4 md:space-y-8">
                <div class="max-w-xl">
                    <h2 class="text-2xl font-semibold text-gray-900 sm:text-3xl">
                        {{ experience?.name }}
                    </h2>

                    <p class="mt-4 text-gray-700">
                        {{ experience?.description }}
                    </p>
                </div>

                <img :src="`/images/${experience?.image}`" class="rounded" alt="" />
            </div>
        </div>
    </section>
</template>