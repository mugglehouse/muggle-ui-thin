<script setup lang="ts">
import { ref } from 'vue'
import { useClassNames } from '../gen-class'

const { c, cx } = useClassNames('button')
const testRef = ref(false)
// cx()返回的是一个ref对象,传入的是一个getter函数
const cls = cx(() => {
  return {
    primary: true,
    secondly: testRef.value,
  }
})
function handleClick() {
  testRef.value = !testRef.value
}
</script>

<template>
  <div :class="cls">
    {{ cls }}
  </div>
  <button @click="handleClick">
    click
  </button>
</template>

<style scoped>

</style>
