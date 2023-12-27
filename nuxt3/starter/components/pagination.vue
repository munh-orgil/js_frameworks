<template>
    <!-- v-if="total > 1" -->
    <div class="border rounded-md flex divide-x" v-if="total != 1" :key="cur.value">
        <NuxtLink class="px-3 py-1" v-if="leftDots == true" :to="{ path: pathString, query: { page: 1 } }">{{
            1
        }}
        </NuxtLink>
        <div class="px-3 py-1" v-if="leftDots == true">...</div>
        <NuxtLink v-for="i in items" :to="{ path: pathString, query: { page: i } }">
            <div class="px-3 py-1 bg-blue-200" v-if="i == cur">{{ i }}</div>
            <div class="px-3 py-1" v-else>{{ i }}</div>
        </NuxtLink>
        <div class="px-3 py-1" v-if="rightDots == true">...</div>
        <NuxtLink class="px-3 py-1" v-if="rightDots == true" :to="{ path: pathString, query: { page: total } }">{{ total }}
        </NuxtLink>
    </div>
</template>

<script setup lang="ts">
import { range } from "~/helpers/common.helper"
import { ref } from "vue";
import type { NuxtLinkProps } from "nuxt/app";
import { NuxtLink } from "~/.nuxt/components";
// const { cur, total, pathString } = defineProps(['cur', 'total', 'pathString']);
const { total, pathString } = defineProps({
    total: {
        type: Number as any,
    },
    pathString: {
        type: String as any,
    },
});
const route = useRoute();
const cur = ref<number>(1) as any;
const $emit = defineEmits(["change"])

watch(() => route.query.page, (newValue) => {
    cur.value = parseInt(newValue)
})
let leftDots = false;
let rightDots = false;
let items = [] as any;
if (total < 5) {
    items = range(1, total)
} else {
    let left = 0;
    let right = 0;
    if (cur.value - 1 > 3) {
        leftDots = true;
    }
    if (total - cur.value > 3) {
        rightDots = true;
    }
    if (cur.value <= 4) {
        left = 1
        right = 5
    }
    if (cur.value >= total - 3) {
        left = total - 4
        right = total
    }
    if (cur.value > 4 && cur.value < total - 3) {
        left = cur.value - 1
        right = cur.value + 1
    }
    items = range(left, right)
}

function Changed(link: NuxtLinkProps) {
    $emit("change", link.to.query.page);
}

</script>

<style scoped></style>