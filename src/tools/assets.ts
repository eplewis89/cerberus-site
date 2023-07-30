import fs from "fs"

// copy view templates and assets in the public folder
fs.cpSync("./src/views", "./dist/views", {recursive: true})
fs.cpSync("./src/public", "./dist/public", {recursive: true})

// remove unnecessaries
fs.rmSync("./dist/tools", {recursive:true})
fs.rmSync("./dist/public/_vercel", {recursive:true});