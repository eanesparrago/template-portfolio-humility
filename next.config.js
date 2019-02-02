const fs = require("fs");
const { join } = require("path");
const { promisify } = require("util");
const copyFile = promisify(fs.copyFile);

const map = {
  "/": { page: "/" },
  "/project?id=0": { page: "/", query: { id: "0" } },
  "/project?id=1": { page: "/", query: { id: "1" } },
  "/project?id=2": { page: "/", query: { id: "2" } },
  "/project?id=3": { page: "/", query: { id: "3" } },
  "/project?id=4": { page: "/", query: { id: "4" } }
};

module.exports = {
  exportPathMap: async function(
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    if (dev) {
      return defaultPathMap;
    }
    // This will copy _redirects from project root into the out directory
    await copyFile(join(dir, "_redirects"), join(outDir, "_redirects"));
    return map;
  }
};
