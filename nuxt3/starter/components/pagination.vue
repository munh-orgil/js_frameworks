<template>
    <!-- v-if="total > 1" -->
    <div class="border rounded-md flex divide-x">
        <NuxtLink class="pages" v-if="leftDots == true" :to="{ path: pathString, query: { page: 1 } }">{{ 1 }}
        </NuxtLink>
        <div class="pages" v-if="leftDots == true">...</div>
        <NuxtLink v-for="i in items" :to="{ path: pathString, query: { page: i } }">
            <div class="pages selected" v-if="i == cur">{{ i }}</div>
            <div class="pages" v-else>{{ i }}</div>
        </NuxtLink>
        <div class="pages" v-if="rightDots == true">...</div>
        <NuxtLink class="pages" v-if="rightDots == true" :to="{ path: pathString, query: { page: total } }">{{ total }}
        </NuxtLink>
    </div>
</template>

<script setup>
import { range } from "~/helpers/common.helper"
// const { cur, total, pathString } = defineProps(['cur', 'total', 'pathString']);
const { cur, total, pathString } = defineProps({
    cur: {
        type: Number,
    },
    total: {
        type: Number,
    },
    pathString: {
        type: String,
    },
})
let leftDots = false;
let rightDots = false;
let items = [];
if (total < 5) {
    items = range(1, total)
} else {
    let left = cur - 1;
    let right = cur + 1;
    console.log(left, right);
    while (left < 1) {
        left++;
        right++;
    }
    while (right > total) {
        left--;
        right--;
    }
    if (cur >= 3) {
        if (left > 2) {
            leftDots = true;
        } else {
            left--;
        }
        left = Math.min(cur - 1, left);
    }
    if (cur <= total - 2) {
        if (right < total - 1) {
            rightDots = true;
        } else {
            right++;
        }
        right = Math.max(cur + 1, right);
    }
    items = range(left, right)
}

</script>

<style scoped>
.pages {
    @apply px-3 py-1
}

.selected {
    @apply bg-blue-200
}
</style>