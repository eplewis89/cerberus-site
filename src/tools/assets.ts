import * as shell from "shelljs";

// copy view templates and assets in the public folder
shell.cp("-R", ["src/views", "src/public"], "dist/");

// remove unnecessary files
shell.rm(["dist/public/js/*.ts", "dist/public/js/*.json"]);