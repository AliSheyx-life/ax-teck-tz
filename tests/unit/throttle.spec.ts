import { test, expect, it, vitest } from "vitest";
import { throttle } from "~/utils/utils";

// white vitest.ts test to test throttle function
test("throttle", () => {
  it("throttle function", () => {
    const func = vitest.fn();
    const throttledFunc = throttle(func, 1000);
    throttledFunc();
    expect(func).toBeCalled();
    setTimeout(() => {
      expect(func).toBeCalled();
    }, 1000);
  });
});
