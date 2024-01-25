import { renderHook, act } from "@testing-library/react";
import useMath from "./useMath";

describe("useMath unit Testing", () => {
  test("result should be 0", () => {
    const hook = renderHook(() => useMath({ a: 0, b: 0 }));
    expect(hook.result.current.result).toBe(0);
  });

  test("result should be 10", () => {
    const hook = renderHook(() => useMath({ a: 5, b: 5 }));
    act(() => {
      hook.result.current.addition();
    });
    expect(hook.result.current.result).toBe(10);
  });
});
