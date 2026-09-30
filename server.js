#!/usr/bin/env node
/**
 * Local server for Fuel Well Module 1.
 * Serves the static frontend and opens the browser automatically.
 * There is no separate API backend — quizzes and sorting run in the browser.
 */
const http = require("http");
const fs = require("fs");
const path = require("path");
const { exec } = require("child_process");

const PORT = Number(process.env.PORT) || 4321;
const HOST = process.env.HOST || "127.0.0.1";
const ROOT = __dirname;
const OPEN_URL = `http://${HOST === "0.0.0.0" ? "127.0.0.1" : HOST}:${PORT}/index.html`;

const MIME = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".svg": "image/svg+xml",
  ".ico": "image/x-icon",
  ".webp": "image/webp",
  ".md": "text/markdown; charset=utf-8"
};

function openBrowser(url) {
  if (process.env.NO_OPEN === "1") return;

  const platform = process.platform;
  let command;
  if (platform === "darwin") command = `open "${url}"`;
  else if (platform === "win32") command = `start "" "${url}"`;
  else command = `xdg-open "${url}"`;

  exec(command, (err) => {
    if (err) {
      console.log(`Open this URL in your browser: ${url}`);
    }
  });
}

const server = http.createServer((req, res) => {
  try {
    let reqPath = decodeURIComponent((req.url || "/").split("?")[0]);
    if (reqPath === "/") reqPath = "/index.html";

    const filePath = path.normalize(path.join(ROOT, reqPath));
    if (!filePath.startsWith(ROOT)) {
      res.writeHead(403).end("Forbidden");
      return;
    }

    if (!fs.existsSync(filePath) || fs.statSync(filePath).isDirectory()) {
      res.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" }).end("Not found");
      return;
    }

    const ext = path.extname(filePath).toLowerCase();
    const type = MIME[ext] || "application/octet-stream";
    res.writeHead(200, { "Content-Type": type, "Cache-Control": "no-cache" });
    fs.createReadStream(filePath).pipe(res);
  } catch (err) {
    res.writeHead(500, { "Content-Type": "text/plain; charset=utf-8" }).end("Server error");
  }
});

server.listen(PORT, HOST, () => {
  console.log(`Fuel Well is running at ${OPEN_URL}`);
  console.log("Press Ctrl+C to stop.");
  openBrowser(OPEN_URL);
});
