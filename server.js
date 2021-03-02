import express from "express"
import cors from "cors"
import bodyParser from "body-parser"

import postRoutes from "./routes/post-routes.js"

const server = express()

// server.use(cors())
server.use(bodyParser.json())

server.use("/", postRoutes)

server.listen(3001, console.log("Sever has started"))
