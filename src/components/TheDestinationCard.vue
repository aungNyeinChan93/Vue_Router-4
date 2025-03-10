<script setup>

const props = defineProps({
    destination: Object
})

</script>

<template>
    <article class="flex bg-white transition hover:shadow-xl">
        <div class="hidden sm:block sm:basis-56">
            <img alt="" :src="`/images/${destination?.image}`" class="aspect-square h-full w-full object-cover" />
        </div>

        <div class="flex flex-1 flex-col justify-between">
            <div class="border-s border-gray-900/10 p-4 sm:border-l-transparent sm:p-6">
                <a href="#">
                    <h3 class="font-bold uppercase text-gray-900">
                        {{ destination?.name }}
                    </h3>
                </a>

                <p class="mt-2 line-clamp-3 text-sm/relaxed text-gray-700">
                    {{ destination?.description }}
                </p>
            </div>

            <div class="sm:flex sm:items-end sm:justify-end">
                <RouterLink :to="{ name: `${destination?.slug}` }"
                    class="block bg-yellow-300 px-5 py-3 text-center text-xs font-bold uppercase text-gray-900 transition hover:bg-yellow-400">
                    Read Blog
                </RouterLink>
            </div>
        </div>
    </article>
</template>