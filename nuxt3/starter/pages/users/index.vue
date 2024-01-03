<script setup lang="ts">
import { useCustomFetch } from "../../composables/useCustomFetch";

const users = ref<IUser[]>([]);
const totalPage = ref<number>(0);
const pageSize = ref<number>(10);
const pageNumber = ref<number>(1);
const totalRow = ref<number>(0);
const loading = ref<boolean>(false);

const rowMin = computed(() => { return (pageNumber.value - 1) * pageSize.value + 1; })
const rowMax = computed(() => { return Math.min((pageNumber.value) * pageSize.value, totalRow.value); })

async function getUsers() {
    loading.value = true;
    const result = await useCustomFetch<IPagination<IUser>>(`/user?page_size=${pageSize.value}&page_number=${pageNumber.value}`, "GET");
    if (result?.value) {
        users.value = result.value?.items;
        totalPage.value = result.value?.total_page;
        totalRow.value = result.value?.total_row;
    }
    loading.value = false;
}
getUsers();
function refetch(newValue: number) {
    pageNumber.value = newValue;
    getUsers();
}

const TableColumns = [
    {
        name: 'Регистерийн дугаар',
        key: "reg_no",
    },
    {
        name: 'Овог',
        key: "last_name",
    },
    {
        name: 'Нэр',
        key: "first_name",
    },
    {
        name: 'Төрсөн өдөр',
        key: "birth_date",
    },
    {
        name: 'Хүйс',
        key: "gender",
    },
]

</script>

<template>
    <div class="cart" v-if="!loading">
        <CustomTable title="Хэрэглэгчийн жагсаалт" :columns="TableColumns" :items="users" :loading="loading">
            <template #gender-data="{ row }">
                <span>{{ row.gender == 1 ? "Эрэгтэй" : "Эмэгтэй" }}</span>
            </template>
            <template #birth_date-data="{ row }">
                <span>{{ row.birth_date ? row.birth_date.substring(0, 10) : "" }}</span>
            </template>
            <template #last_name-data="{ row }">
                <span class="capitalize">{{ row.last_name }}</span>
            </template>
            <template #first_name-data="{ row }">
                <span class="capitalize">{{ row.first_name }}</span>
            </template>
            <template #reg_no-data="{ row }">
                <span class="uppercase">{{ row.reg_no }}</span>
            </template>
        </CustomTable>
        <div class="flex">
            <span class="text-sm ml-3 mb-2"> Нийт {{ totalRow }} мөрийн {{ rowMin }}-с {{ rowMax }} хүртэлх үр дүн. </span>
            <div class="ml-auto pr-4">
                <Pagination :cur="pageNumber" :total="totalPage" @update="refetch" />
            </div>
        </div>
    </div>
</template>

<style scoped>
td,
th {
    @apply text-left p-3
}
</style>