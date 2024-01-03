<template>
    <div class="border rounded-md flex divide-x" v-if="total! > 1" :key="cur">
        <button class="px-3 py-1" v-if="leftDots == true" @click="$emit('update', 1)">{{
            1
        }}
        </button>
        <div class="px-3 py-1" v-if="leftDots == true">...</div>
        <button v-for="i in items" @click="$emit('update', i)" :key="cur">
            <div class="px-3 py-1 bg-blue-300" v-if="i == cur">{{ i }}</div>
            <div class="px-3 py-1" v-else>{{ i }}</div>
        </button>
        <div class="px-3 py-1" v-if="rightDots == true">...</div>
        <button class="px-3 py-1" v-if="rightDots == true" @click="$emit('update', total)" :key="cur">{{ total }}
        </button>
    </div>
</template>

<script setup lang="ts">
import { range } from "~/helpers/common.helper"
// const { cur, total, pathString } = defineProps(['cur', 'total', 'pathString']);
const { cur, total } = defineProps({
    cur: {
        type: Number,
        default: 0,
    },
    total: {
        type: Number,
        default: 0,
    }
});
const $emit = defineEmits(['update'])

var leftDots = false;
var rightDots = false;
let items: any[];

if (total <= 7) {
    items = range(1, total)
} else {
    let left = 0;
    let right = 0;
    if (cur - 1 > 3) {
        leftDots = true;
    }
    if (total - cur > 3) {
        rightDots = true;
    }
    if (cur <= 4) {
        left = 1
        right = 5
    }
    if (cur >= total - 3) {
        left = total - 4
        right = total
    }
    if (cur > 4 && cur < total - 3) {
        left = cur - 1
        right = cur + 1
    }
    items = range(left, right)
}

</script>

<style scoped></style>