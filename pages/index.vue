<script setup lang="ts">
import { NGrid, NGridItem, NPagination } from "naive-ui";
import { IPost } from "~/types/post";

const page = ref(1);

const loadMore = () => {
  console.log(page.value);
  page.value++;
};

const { data }: IPost = await useFetch(`http://localhost:5000/posts`, {
  method: "GET",
  params: {
    page: page.value,
    _limit: 10,
  },
  watch: [page],
});
</script>

<template>
  <main class="container pt-5">
    <n-grid :x-gap="12" :y-gap="12" :cols="2">
      <n-grid-item v-for="post in data" :key="post.id" :x-span="4">
        <post-card :post="post" />
      </n-grid-item>
    </n-grid>
    <div class="pagination-wrapper p-5 flex justify-center">
      <client-only>
        <n-pagination
          v-model:page="page"
          :page-count="100"
          @on-update:page="loadMore"
        />
      </client-only>
    </div>
  </main>
</template>
