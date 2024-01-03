<template>
    <div class="p-2">
        <div class="flex">
            <h1 class="font-bold text-lg mb-4 pl-2">{{ title }}</h1>
            <button v-if="onCreate" @click="" class="ml-auto mb-auto px-2 py-1 bg-blue-500 text-white font-bold rounded">
                Бүртгэх
            </button>
        </div>
        <div class="flex" v-if="(!items || !items.length)">
            <div class="m-auto">
                <svg class="mx-auto mb-2" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                    <g fill="currentColor">
                        <path
                            d="M3.375 3C2.339 3 1.5 3.84 1.5 4.875v.75c0 1.036.84 1.875 1.875 1.875h17.25c1.035 0 1.875-.84 1.875-1.875v-.75C22.5 3.839 21.66 3 20.625 3z" />
                        <path fill-rule="evenodd"
                            d="m3.087 9l.54 9.176A3 3 0 0 0 6.62 21h10.757a3 3 0 0 0 2.995-2.824L20.913 9zm6.133 2.845a.75.75 0 0 1 1.06 0l1.72 1.72l1.72-1.72a.75.75 0 1 1 1.06 1.06l-1.72 1.72l1.72 1.72a.75.75 0 1 1-1.06 1.06L12 15.685l-1.72 1.72a.75.75 0 1 1-1.06-1.06l1.72-1.72l-1.72-1.72a.75.75 0 0 1 0-1.06"
                            clip-rule="evenodd" />
                    </g>
                </svg>
                <p>
                    Мэдээлэл байхгүй байна
                </p>
            </div>
        </div>
        <table v-else class="table-auto border-t p-12 w-full mb-2">
            <thead class="mt-2 text-gray-600">
                <tr>
                    <th v-for="column in columns" class="text-left p-3">
                        <slot :name="`${column.name}-header`">
                            {{ column.name }}
                        </slot>
                    </th>
                </tr>
            </thead>
            <tbody class="border-b text-gray-700">
                <tr v-for="item in items" class="border-t">
                    <td v-for="col in columns" class="text-left p-3">
                        <slot :name="`${col.key}-data`" :row="item">
                            {{ item[col.key] }}
                        </slot>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script setup lang="ts">

const { title, columns, items } = defineProps({
    title: {
        type: String,
    },
    columns: {
        type: Array<IColumn>,
    },
    items: {
        type: Array<any>,
    },
    loading: {
        type: Boolean,
    },
    onCreate: {
        type: Function,
    }
});

</script>

<style scoped></style>