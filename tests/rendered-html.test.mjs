import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

test("exports the Bspoke Ventures landing page", async () => {
  const html = await readFile(new URL("../out/index.html", import.meta.url), "utf8");
  assert.match(html, /Bspoke Ventures — Software Between the Software/i);
  assert.match(html, /Building the software/);
  assert.match(html, /between/);
  assert.match(html, /MarkPaid/);
  assert.match(html, /SerumSuite/);
  assert.match(html, /NameScoop/);
  assert.match(html, /mailto:ideas@bspokeventures\.com/);
  assert.match(html, /mailto:info@bspokeventures\.com/);
  assert.doesNotMatch(html, /codex-preview|react-loading-skeleton/i);
});
