<script setup lang="ts">
// import { useFetch, useRuntimeConfig } from "nuxt/app";
import { NIcon, NList, NListItem, NThing, NInput } from "naive-ui";
import { ArrowLeft, Search } from "@vicons/fa";
import { useRoute } from "vue-router";
import { debounce } from "@/utils/utils";
import type { IComment, IPost } from "~/types/post-types";

const runtimeConfig = useRuntimeConfig();
const route = useRoute();
const postId = route.params.id;
const commentAuthorName = ref("");
// const cookie = useCookie("totalCount");

const searchComments = debounce((value: string) => {
  commentAuthorName.value = value;
}, 300);

const getSearchAuthorName = computed(() => {
  return commentAuthorName.value ? commentAuthorName.value : undefined;
});

const { data: post } = await useFetch<IPost>(`/posts/${postId}`, {
  baseURL: runtimeConfig.public.API_BASE_URL,
  method: "GET",
});

const { data: comments } = await useFetch<IComment[]>(
  `/posts/${postId}/comments`,
  {
    baseURL: runtimeConfig.public.API_BASE_URL,
    method: "GET",
    params: {
      name_like: getSearchAuthorName,
    },
  },
);
</script>

<template>
  <main class="post-page py-5">
    <div class="container">
      <div class="post-body py-5">
        <nuxt-link to="/" class="text-xl mb-7 inline-block">
          <n-button type="success" class="text-green-800 flex items-center">
            <n-icon :component="ArrowLeft" />
            <span class="ml-2">Go to posts</span>
          </n-button>
        </nuxt-link>

        <h1 class="text-3xl uppercase">
          {{ post?.title }}
        </h1>
        <p class="text-gray-500 my-5 text-xl max-w-[50%]">
          {{ post?.body }}
        </p>
      </div>

      <div class="comments-body">
        <h2 class="text-2xl uppercase mb-5">Comments</h2>
        <div class="comments-list">
          <n-input
            placeholder="Search by author"
            round
            clearable
            size="large"
            @input="searchComments"
          >
            <template #prefix>
              <n-icon :component="Search" />
            </template>
          </n-input>

          <n-list hoverable clickable class="mt-5">
            <n-list-item v-for="comment in comments" :key="comment.id">
              <n-thing :title="comment.name" class="my-5 uppercase">
                <template #description>
                  <p class="text-xs text-green-500">
                    {{ comment.email }}
                  </p>
                  <p class="text-lg">
                    {{ comment.body }}
                  </p>
                </template>
              </n-thing>
            </n-list-item>
          </n-list>
        </div>
      </div>
    </div>
  </main>
</template>
