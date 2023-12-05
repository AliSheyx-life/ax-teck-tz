<script setup lang="ts">
import { useFetch } from "nuxt/app";
import { useRoute } from "vue-router";
import { IPost } from "~/types/post-types";

const route = useRoute();
const postId = route.params.id;
// const runtimeConfig = useRuntimeConfig();
// const cookie = useCookie("totalCount");

const { data, pending } = useFetch<IPost>(`/posts/${postId}`, {
  // baseURL: runtimeConfig.public.API_BASE_URL,
  method: "GET",
});
</script>

<template>
  <main class="">
    {{ pending }}
    {{ data }}
  </main>
</template>
