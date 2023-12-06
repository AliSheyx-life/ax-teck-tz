import { test, expect, it, vitest } from "vitest";
import { debounce } from "~/utils/utils";

// white vitest.ts test to test dubounce function
test("debounce", () => {
  it("debounce function", () => {
    const func = vitest.fn();
    const debouncedFunc = debounce(func, 1000);
    debouncedFunc();
    expect(func).not.toBeCalled();
    setTimeout(() => {
      expect(func).toBeCalled();
    }, 1000);
  });
});
