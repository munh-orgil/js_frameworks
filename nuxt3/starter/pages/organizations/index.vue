<template>
    <div class="cart" v-if="!loading">
        <CustomTable title="Хэрэглэгчийн жагсаалт" :columns="TableColumns" :items="orgs" :loading="loading" />
        <div class="flex">
            <span class="text-sm ml-3 mb-2"> Нийт {{ totalRow }} мөрийн {{ rowMin }}-с {{ rowMax }} хүртэлх үр дүн. </span>
            <div class="ml-auto pr-4">
                <Pagination :cur="pageNumber" :total="totalPage" @update="refetch" />
            </div>
        </div>
    </div>
</template>

<script setup lang='ts'>

import { useCustomFetch } from "../../composables/useCustomFetch";

const orgs = ref<IOrganization[]>([]);
const totalPage = ref<number>(0);
const pageSize = ref<number>(10);
const pageNumber = ref<number>(1);
const totalRow = ref<number>(0);
const loading = ref<boolean>(false);

const rowMin = computed(() => { return (pageNumber.value - 1) * pageSize.value + 1; })
const rowMax = computed(() => { return Math.min((pageNumber.value) * pageSize.value, totalRow.value); })

async function getOrgs() {
    loading.value = true;
    const result = await useCustomFetch<IPagination<IOrganization>>(`/organization?page_size=${pageSize.value}&page_number=${pageNumber.value}`, "GET");
    if (result?.value) {
        orgs.value = result.value?.items;
        totalPage.value = result.value?.total_page;
        totalRow.value = result.value?.total_row;
    }
    loading.value = false;
}
getOrgs();
function refetch(newValue: number) {
    pageNumber.value = newValue;
    getOrgs();
}

const TableColumns = [
    {
        name: 'Регистерийн дугаар',
        key: "reg_no",
    },
    {
        name: 'Нэр',
        key: "name",
    },
    {
        name: 'Бүртгэгдсэн огноо',
        key: "created_date",
    },
]

</script>

<style scoped></style>