<script setup>

</script>

<template>
    <section class=" mx-10">
        <RouterView name="navbar" class="mb-4 mt-2" />
        <div class="flex w-full min-h-screen gap-7">
            <aside>
                <RouterView name="sidebar" />
            </aside>
            <main>
                <RouterView />
            </main>
        </div>
    </section>
</template>
