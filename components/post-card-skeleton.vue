<script setup lang="ts">
import { NCard, NSkeleton } from "naive-ui";
</script>

<template>
  <n-card bordered class="shadow rounded-xl h-full">
    <div class="text-xl uppercase mb-2">
      <n-skeleton height="35px" width="50%" />
    </div>
    <div class="mb-2">
      <n-skeleton text :repeat="2" /> <n-skeleton text style="width: 60%" />
    </div>
    <n-skeleton height="40px" width="30%" :sharp="false" />
  </n-card>
</template>
