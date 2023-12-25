<script setup lang="ts">
import { ref } from "vue";
import { useCustomFetch } from "../../composables/useCustomFetch";
const users = ref<IUser[]>([]);
const totalPage = ref<number>(0);
const pageSize = ref<number>(10);
const pageNumber = ref<number>(1);
const totalRow = ref<number>(0);
const rowMin = computed(() => { return (pageNumber.value - 1) * pageSize.value + 1; })
const rowMax = computed(() => { return Math.min((pageNumber.value) * pageSize.value, totalRow.value); })
const getUsers = async () => {
    const result = await useCustomFetch<IPagination<IUser>>(`/user?page_size=${pageSize.value}&page_number=${pageNumber.value}`, "GET");
    if (result && result.value) {
        users.value = result.value?.items;
        totalPage.value = result.value?.total_page;
        totalRow.value = result.value?.total_row;
    }
}
getUsers();

</script>

<template>
    <div class="cart">
        <h1 class="font-bold text-lg mb-4">Хэрэглэгчийн жагсаалт</h1>
        <table class="table-auto border-t-2 p-12 w-full mb-2">
            <thead class="mt-2">
                <tr>
                    <th>Регистерийн дугаар</th>
                    <th>Овог</th>
                    <th>Нэр</th>
                    <th>Төрсөн өдөр</th>
                    <th>Хүйс</th>
                </tr>
            </thead>
            <tbody class="border-b">
                <tr v-for="user in users" class="border-t">
                    <td class="uppercase"> {{ user.reg_no }}</td>
                    <td class="capitalize"> {{ user.last_name }}</td>
                    <td class="capitalize"> {{ user.first_name }}</td>
                    <td> {{ user.birth_date ? user.birth_date.substring(0, 10) : "" }}</td>
                    <td> {{ user.gender == 1 ? "Эрэгтэй" : "Эмэгтэй" }}</td>
                </tr>
            </tbody>
        </table>
        <div class="flex">
            <span class="text-sm ml-3"> Нийт {{ totalRow }} мөрөөс {{ rowMin }}-с {{ rowMax }} хүртэлх үр дүн. </span>
            
        </div>
    </div>
</template>

<style scoped>
td,
th {
    @apply text-left p-3
}
</style>