import http from "http";
import fs from "fs";
import path from "path";

const PORT = Number(process.env.PORT) || 3000;
const PUBLIC_DIR = path.join(process.cwd(), "public");

const MIME_TYPES: Record<string, string> = {
  ".html": "text/html; charset=utf-8",
  ".js": "application/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".webmanifest": "application/manifest+json; charset=utf-8",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".svg": "image/svg+xml",
  ".ico": "image/x-icon"
};

function safeResolvePublicPath(urlPathname: string) {
  const decoded = decodeURIComponent(urlPathname);
  const stripped = decoded.split("?")[0].split("#")[0];
  const normalized = path.posix.normalize(stripped);
  const withoutLeading = normalized.replace(/^\/+/, "");
  const fsPath = path.join(PUBLIC_DIR, withoutLeading);
  if (!fsPath.startsWith(PUBLIC_DIR)) return null;
  return fsPath;
}

const server = http.createServer((req, res) => {
  const url = new URL(req.url ?? "/", `http://${req.headers.host ?? "localhost"}`);
  const pathname = url.pathname === "/" ? "/index.html" : url.pathname;

  const requestedPath = safeResolvePublicPath(pathname);
  const fallbackPath = path.join(PUBLIC_DIR, "index.html");
  const filePath = requestedPath ?? fallbackPath;

  fs.stat(filePath, (statErr, stat) => {
    if (statErr || !stat.isFile()) {
      fs.readFile(fallbackPath, (err, data) => {
        if (err) {
          res.writeHead(500);
          res.end("Error loading game");
          return;
        }
        res.writeHead(200, { "Content-Type": MIME_TYPES[".html"] });
        res.end(data);
      });
      return;
    }

    const ext = path.extname(filePath).toLowerCase();
    const contentType = MIME_TYPES[ext] ?? "application/octet-stream";

    fs.readFile(filePath, (err, data) => {
      if (err) {
        res.writeHead(500);
        res.end("Error loading game");
        return;
      }
      res.writeHead(200, { "Content-Type": contentType });
      res.end(data);
    });
  });
});

server.listen(PORT, () => {
  console.log(`Mega IO Survival running at http://localhost:${PORT}`);
});
