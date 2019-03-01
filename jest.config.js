module.exports = {
  verbose: true,
  testEnvironment: "node",
  moduleFileExtensions: ["js", "jsx", "ts", "tsx", "json"],
  testMatch: ["<rootDir>/src/?(*.)+(spec|test).ts?(x)"],
  transform: {
    ".spec.(ts|tsx)": "dts-jest/transform",
    ".(ts|tsx)": "ts-jest"
  },
  globals: {
    "window": {},
    "_dts_jest_": {
      "compiler_options": "./tsconfig.json",
      "enclosing_declaration": true,
      "test_value": true,
      "transpile": true
    }
  },
  reporters: ["default", "dts-jest/reporter"]
}
