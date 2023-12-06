import { test, expect, it } from "vitest";
import { mount } from "@vue/test-utils";
import Layout from "@/layouts/default.vue";

// vitest vue test to test layout component
test("Layout component", () => {
  it("is a Vue instance", () => {
    const wrapper = mount(Layout);
    expect(wrapper.vm).toBeTruthy();
  });
});
