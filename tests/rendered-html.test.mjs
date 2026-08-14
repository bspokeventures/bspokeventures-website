import assert from "node:assert/strict";
import { spawn } from "node:child_process";
import { once } from "node:events";
import net from "node:net";
import test from "node:test";

async function findAvailablePort() {
  const server = net.createServer();
  server.listen(0, "127.0.0.1");
  await once(server, "listening");
  const address = server.address();
  const port = typeof address === "object" && address ? address.port : 3000;
  server.close();
  await once(server, "close");
  return port;
}

async function render(t) {
  const port = await findAvailablePort();
  const server = spawn(
    process.execPath,
    ["node_modules/next/dist/bin/next", "start", "--hostname", "127.0.0.1", "--port", String(port)],
    { cwd: new URL("..", import.meta.url), stdio: "ignore" },
  );

  t.after(() => server.kill("SIGTERM"));

  const url = `http://127.0.0.1:${port}/`;
  let lastError;
  for (let attempt = 0; attempt < 80; attempt += 1) {
    try {
      return await fetch(url, { headers: { accept: "text/html" } });
    } catch (error) {
      lastError = error;
      await new Promise((resolve) => setTimeout(resolve, 100));
    }
  }

  throw lastError;
}

test("server-renders the Bspoke Ventures landing page", async (t) => {
  const response = await render(t);
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
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
