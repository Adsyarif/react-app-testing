import { renderHook } from "@testing-library/react";
import useStatus from "./useStatus";

describe("UseStatus unit test", () => {
  test("Should be terutn active value", () => {
    const hook = renderHook(() => useStatus({ status: true }));
    expect(hook.result.current).toBe("active");
  });
  test("Should be terutn deactive value", () => {
    const hook = renderHook(() => useStatus({ status: false }));
    expect(hook.result.current).toBe("deactive");
  });
});
