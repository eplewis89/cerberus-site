import fs from "fs"

// copy view templates and assets in the public folder
fs.cpSync("./src/views", "./dist/views", {recursive: true})
fs.cpSync("./src/public", "./dist/public", {recursive: true})

// remove tools dir
fs.rmSync("./dist/tools/assets.js")
fs.rmdirSync("./dist/tools")