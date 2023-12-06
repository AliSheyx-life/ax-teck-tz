<script setup lang="ts">
import {
  NGrid,
  NGridItem,
  NPagination,
  NSpin,
  NInput,
  NIcon,
  NResult,
  NText,
  NRadioGroup,
  NRadioButton,
} from "naive-ui";
import { Search } from "@vicons/fa";
import { debounce } from "@/utils/utils";
import type { IPost } from "~/types/post-types";

const runtimeConfig = useRuntimeConfig();
const cookie = useCookie("totalCount");

const page = ref(1);
const searchTitle = ref("");
const sortType = ref("");
const itemsLimit = 8;

const getPage = computed(() => {
  return page.value;
});

const getSortType = computed(() => {
  return sortType.value ? "title" : "";
});

const postsOrders = [
  { value: "", label: "None" },
  { value: "asc", label: "Ascending" },
  { value: "desc", label: "Descending" },
];

const getPagesCount = computed(() => {
  const totalCount = cookie.value;
  if (!totalCount) return 1;
  return Math.ceil(Number(totalCount) / itemsLimit);
});

const searchPosts = debounce((value: string) => {
  searchTitle.value = value;
}, 300);

const { data, pending } = await useFetch<IPost[]>(`/posts`, {
  baseURL: runtimeConfig.public.API_BASE_URL,
  method: "GET",
  params: {
    _page: getPage,
    _limit: itemsLimit,
    q: searchTitle,
    _sort: getSortType,
    _order: sortType,
  },
  onResponse({ response }) {
    cookie.value = response.headers.get("x-total-count") || "0";
  },
});
</script>

<template>
  <main class="container pt-5">
    <div class="fillters-wrapper mb-5">
      <n-grid :x-gap="12" :y-gap="12" :cols="5">
        <n-grid-item span="4">
          <n-input
            placeholder="Search post"
            round
            clearable
            size="large"
            @input="searchPosts"
          >
            <template #prefix>
              <n-icon :component="Search" />
            </template>
          </n-input>
        </n-grid-item>
        <n-grid-item>
          <n-radio-group
            v-model:value="sortType"
            name="radiobuttongroup1"
            size="large"
          >
            <n-radio-button
              v-for="order in postsOrders"
              :key="order.value"
              :value="order.value"
              :label="order.label"
            />
          </n-radio-group>
        </n-grid-item>
      </n-grid>
    </div>

    <n-text
      v-if="searchTitle.length"
      class="p-3 font-semibold text-green-500"
      size="large"
    >
      *{{ cookie }} posts found
    </n-text>

    <n-grid :x-gap="12" :y-gap="12" :cols="2">
      <n-grid-item v-for="post in data" :key="post.id" :x-span="4">
        <post-card :post="post" />
      </n-grid-item>
    </n-grid>

    <div v-if="!data?.length" class="not-found">
      <n-result
        status="404"
        title="404 Not Found"
        description="You know life is always ridiculous."
      >
      </n-result>
    </div>

    <div
      v-if="Number(cookie)"
      class="pagination-wrapper p-5 flex justify-center"
    >
      <client-only>
        <n-pagination v-model:page="page" :page-count="getPagesCount" />
      </client-only>
    </div>
    <div v-if="pending" class="loader flex justify-center">
      <n-spin size="large" />
    </div>
  </main>
</template>
