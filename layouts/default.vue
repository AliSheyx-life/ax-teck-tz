<script setup lang="ts">
import { NSpace, NLayoutContent, NLayoutFooter, NLayoutHeader } from "naive-ui";
</script>

<template>
  <div class="main-layout">
    <n-space vertical size="large">
      <n-layout-header>header</n-layout-header>
      <n-layout-content content-style="padding: 24px;">
        <slot />
      </n-layout-content>
      <n-layout-footer>footer</n-layout-footer>
    </n-space>
  </div>
</template>
