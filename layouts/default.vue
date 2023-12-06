<script setup lang="ts">
import { NSpace, NLayoutContent, NLayoutHeader } from "naive-ui";
</script>

<template>
  <div class="main-layout">
    <n-space vertical size="large">
      <n-layout-header bordered class="p-5">
        <h1 class="text-3xl text-center font-semibold">
          AX <span class="text-primary">Tech</span>
        </h1>
      </n-layout-header>
      <n-layout-content bordered>
        <slot />
      </n-layout-content>
    </n-space>
  </div>
</template>
