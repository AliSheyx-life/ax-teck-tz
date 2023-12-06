import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";

import postPage from "../../pages/index.vue";

describe("PostPage", () => {
  it("is a Vue instance", () => {
    const wrapper = mount(postPage);
    expect(wrapper.vm).toBeTruthy();
  });
});
