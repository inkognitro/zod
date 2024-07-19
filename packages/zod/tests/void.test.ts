// @ts-ignore TS6133
import { expect, test } from "vitest";

import { util } from "../src/helpers/index.js";
import * as z from "../src/index.js";
test("void", () => {
  const v = z.void();
  v.parse(undefined);

  expect(() => v.parse(null)).toThrow();
  expect(() => v.parse("")).toThrow();

  type v = z.infer<typeof v>;
  util.assertEqual<v, void>(true);
});
