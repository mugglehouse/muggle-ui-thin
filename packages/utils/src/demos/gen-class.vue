<script setup lang="ts">
import { useClassNames } from '../gen-class'

const { c } = useClassNames('button')
</script>

<template>
  <div :class="c('primary')">
    {{ c('primary') }}
  </div>
</template>

<style scoped>

</style>
