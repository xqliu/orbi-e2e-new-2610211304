import test from "node:test";
import assert from "node:assert/strict";
import { greet } from "./index.mjs";
test("greets a name", () => assert.equal(greet("Ada"), "Hello, Ada!"));
