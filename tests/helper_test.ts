import { describe, it, expect } from "vitest";
import { Cl } from "@stacks/transactions";

describe("stx-helper", () => {
  it("should convert stx to ustx", () => {
    const result = simnet.callReadOnlyFn("stx-helper", "stx-to-ustx", [Cl.uint(1)], wallet1);
    expect(result.result).toBe(Cl.uint(1000000));
  });

  it("should return min of two values", () => {
    const result = simnet.callReadOnlyFn("stx-helper", "min-of", [Cl.uint(5), Cl.uint(10)], wallet1);
    expect(result.result).toBe(Cl.uint(5));
  });
});
