<script setup lang="ts">
import { NCard, NButton } from "naive-ui";
import type { IPost } from "~/types/post-types";

defineProps<{
  post: IPost;
}>();
</script>

<template>
  <n-card bordered class="shadow rounded-xl h-full">
    <h3 class="text-xl uppercase mb-2">{{ post.title }}</h3>
    <p class="text-gray-500 mb-2 text-lg">
      {{ post.body }}
    </p>
    <nuxt-link :to="`/post/${post.id}`" class="text-primary">
      <n-button type="success" class="text-green-800">Go to post</n-button>
    </nuxt-link>
  </n-card>
</template>
