import { copyFileSync, existsSync } from "node:fs";

const distIndex = new URL("../dist/index.html", import.meta.url);
const distFallback = new URL("../dist/404.html", import.meta.url);
const rootCname = new URL("../CNAME", import.meta.url);
const distCname = new URL("../dist/CNAME", import.meta.url);

if (!existsSync(distIndex)) {
  throw new Error("dist/index.html does not exist. Run vite build before preparing Pages assets.");
}

copyFileSync(distIndex, distFallback);

if (existsSync(rootCname)) {
  copyFileSync(rootCname, distCname);
}
