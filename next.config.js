const fs = require("fs");
const { join } = require("path");
const { promisify } = require("util");
const copyFile = promisify(fs.copyFile);

const map = {
  "/": { page: "/" },
  "/project?id=0": { page: "/project", query: { id: "0" } }
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
