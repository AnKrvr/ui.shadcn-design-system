import test from "node:test";
import assert from "node:assert/strict";
import { verifyCatalog } from "./verify-catalog.mjs";
const entry={slug:"button",files:["src/components/ui/button.tsx"],storyIds:["components-button--default"]};
const check=(components, fileExists=()=>true, storyExists=()=>true)=>verifyCatalog({components},{fileExists,storyExists});
test("a catalog entry with real source and story passes",()=>assert.deepEqual(check([entry]),{errors:[],componentCount:1}));
test("missing source reports the component",()=>assert.match(check([entry],()=>false).errors.join(" "),/button.*source/i));
test("missing story reports the component",()=>assert.match(check([entry],()=>true,()=>false).errors.join(" "),/button.*story/i));
test("duplicate slug cannot hide a missing component",()=>assert.match(check([entry,entry]).errors.join(" "),/duplicate.*button/i));
test("empty source list is rejected",()=>assert.match(check([{...entry,files:[]}]).errors.join(" "),/button.*source/i));
test("empty story list is rejected",()=>assert.match(check([{...entry,storyIds:[]}]).errors.join(" "),/button.*story/i));

