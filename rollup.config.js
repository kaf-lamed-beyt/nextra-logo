import json from "@rollup/plugin-json";
import babel from "rollup-plugin-babel";
import { terser } from "rollup-plugin-terser";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import generatePackageJSON from "rollup-plugin-generate-package-json";

const packageJSON = require("./package.json");

export default [
  {
    input: "src/index.ts",
    output: [
      {
        file: packageJSON.main,
        format: "cjs",
        sourcemap: true,
      },
      {
        file: packageJSON.module,
        format: "esm",
        sourcemap: true,
      },
    ],
    plugins: [
      json(),
      styles(),
      terser(),
      commonjs(),
      peerDepsExternal(),
      typescript({ tsconfig: "./tsconfig.json" }),
      generatePackageJSON({
        baseContents: packageJSON,
        outputFolder: "./dist/cjs",
      }),
      babel({
        extensions: [".ts", ".tsx", ".js", ".css", ".scss"],
        exclude: "node_modules/**",
      }),
      nodeResolve({
        extensions: [".ts", ".tsx", ".js", ".jsx", ".scss", ".css"],
      }),
    ],
    external: ["react", "react-dom", "sass"],
  },
];
