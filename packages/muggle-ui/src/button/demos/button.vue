<script setup>
import { ref } from 'vue'

import { test } from '@muggle-ui/utils'

const count = ref(0)
test()
</script>

<template>
  <button @click="count++">
    click
  </button>
  <span>{{ count }}</span>
</template>

<style>

</style>
