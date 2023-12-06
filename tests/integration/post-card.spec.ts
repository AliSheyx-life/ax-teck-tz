import { test, expect, it } from "vitest";
import { mount } from "@vue/test-utils";
import PostCard from "~/components/post-card.vue";

// vitest vue test to test post card component
test("PostCard", () => {
  it("is a Vue instance", () => {
    const wrapper = mount(PostCard);
    expect(wrapper.vm).toBeTruthy();
  });
});
