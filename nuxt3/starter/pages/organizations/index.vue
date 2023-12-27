<template>
    <div class="cart">
        <div class="p-2">
            <h1 class="font-bold text-lg mb-4 pl-2">Хэрэглэгчийн жагсаалт</h1>
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
                <span class="text-sm ml-3"> Нийт {{ totalRow }} мөрийн {{ rowMin }}-с {{ rowMax }} хүртэлх үр дүн. </span>
                <div class="ml-auto pr-4">
                    <Pagination :cur="pageNumber" :total="totalPage" pathString="/users" />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
</script>

<style scoped></style>