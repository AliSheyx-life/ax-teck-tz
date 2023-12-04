<script setup lang="ts">
import { darkTheme, NConfigProvider } from "naive-ui";
</script>

<template>
  <n-config-provider :theme="darkTheme">
    <div>
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </div>
  </n-config-provider>
</template>

<style lang="scss">
body {
  @apply text-white;
  background-color: rgb(16, 16, 20);
}
</style>
