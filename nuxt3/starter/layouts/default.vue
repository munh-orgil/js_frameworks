<template>
    <div class="flex">
        <aside class="w-64 shadow-md bg-white py-4 h-screen">
            <NuxtLink to="/"><img src="assets\images\Gerege_Systems.png" alt="Gerege Systems" class="h-12 m-auto mb-4">
            </NuxtLink>
            <ul class="flex flex-col divide-y border-y" v-for="item in layoutItems">
                <li>
                    <NuxtLink class="flex items-center hover:bg-gray-200 px-3 py-2 w-full" :to="item.path">
                        {{ item.label }}
                    </NuxtLink>
                </li>
            </ul>
        </aside>
        <div class="w-screen p-4">
            <slot />
        </div>
    </div>
</template>

<script setup>
const layoutItems = [
    {
        path: "/users",
        label: "Хэрэглэгч",
    },
    {
        path: "/organizations",
        label: "Байгууллага",
    }
]
</script>

<style scoped>
.router-link-exact-active {
    @apply bg-gradient-to-r from-blue-700 to-blue-400 text-white;
}
</style>
