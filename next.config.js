const fs = require("fs");
const { join } = require("path");
const { promisify } = require("util");
const copyFile = promisify(fs.copyFile);

const map = {
  "/": { page: "/" },
  "/project/0": { page: "/project", query: { id: "0" } },
  "/project/1": { page: "/project", query: { id: "1" } },
  "/project/2": { page: "/project", query: { id: "2" } },
  "/project/3": { page: "/project", query: { id: "3" } },
  "/project/4": { page: "/project", query: { id: "4" } }
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
