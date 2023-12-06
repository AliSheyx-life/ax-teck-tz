import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";

import homePage from "../../pages/index.vue";

describe("HomePage", () => {
  it("is a Vue instance", () => {
    const wrapper = mount(homePage);
    expect(wrapper.vm).toBeTruthy();
  });
});
