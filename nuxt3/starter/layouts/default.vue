<template>
    <div class="flex">
        <aside class="w-64 shadow-md bg-white py-4 h-screen">
            <NuxtLink to="/"><img src="assets\images\Gerege_Systems.png" alt="Gerege Systems" class="h-12 m-auto mb-4">
            </NuxtLink>
            <ul class="flex flex-col divide-y-2">
                <li>
                    <NuxtLink class="flex items-center hover:bg-gray-200 px-3 py-2 w-full" to="/">Home
                    </NuxtLink>
                </li>
                <li>
                    <NuxtLink class="flex items-center hover:bg-gray-200 px-3 py-2 w-full" to="/users">
                        Хэрэглэгч
                    </NuxtLink>
                </li>
            </ul>
        </aside>
        <div class="w-screen p-4">
            <slot />
        </div>
    </div>
</template>

<style scoped>
.router-link-exact-active {
    @apply bg-gradient-to-r from-blue-700 to-blue-400;
    @apply text-white;
}
</style>
