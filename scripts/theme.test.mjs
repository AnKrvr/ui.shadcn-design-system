import test from "node:test";
import assert from "node:assert/strict";
import { readTheme, resolveTheme, saveTheme } from "../src/lib/theme.ts";
test("blocked storage falls back to system",()=>assert.equal(readTheme({getItem(){throw new DOMException("blocked","SecurityError")}}),"system"));
test("invalid stored theme falls back to system",()=>assert.equal(readTheme({getItem:()=>"broken"}),"system"));
test("an explicit light choice overrides a dark system",()=>assert.equal(resolveTheme("light",true),"light"));
test("system follows the operating system",()=>assert.equal(resolveTheme("system",true),"dark"));
test("valid choice is restored",()=>assert.equal(readTheme({getItem:()=>"dark"}),"dark"));
test("theme changes survive blocked writes",()=>assert.doesNotThrow(()=>saveTheme({setItem(){throw new DOMException("blocked","SecurityError")}},"light")));
