<script lang="ts" setup>
const props = defineProps<{
  title: string;
  subtitle: string;
}>();

</script>
<template>
  <div class="mb-8">
    <h2 class="font-bold">{{ title }}</h2>
    <p class="text-muted-foreground m-0 mb-2">{{ subtitle }}</p>
    <div class="career-description">
      <slot></slot>
    </div>
  </div>
</template>

<style>
.career-description p {
  margin-top: 0 !important;
  margin-bottom: 18px;
}
</style>
