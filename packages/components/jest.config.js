module.exports = {
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  roots: ["<rootDir>/src"],
  setupTestFrameworkScriptFile: "<rootDir>/setupTests.js",
  testRegex: ".test.tsx?$",
  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },
};
