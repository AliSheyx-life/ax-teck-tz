import { test, expect, it } from "vitest";
import { mount } from "@vue/test-utils";
import PostCardSkeleton from "~/components/post-card-skeleton.vue";

// vitest vue test to test post card component
test("PostCardSkeleton", () => {
  it("is a Vue instance", () => {
    const wrapper = mount(PostCardSkeleton);
    expect(wrapper.vm).toBeTruthy();
  });
});
