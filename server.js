import express from "express"
import cors from "cors"
import bodyParser from "body-parser"

import postRoutes from "./routes/post-routes.js"
import HttpError from "./models/http-error.js"

const server = express()

server.use(cors())
server.use(bodyParser.json())

server.use("/api/posts", postRoutes)

server.use((req, res, next) => {
  const error = new HttpError("Route not found", 404)

  next(error)
})

server.use((error, req, res, next) => {
  if (res.headerSent) return next(error)

  res.status(error.code || 500)
  res.json({ message: error.message ?? "An unknown error occured" })
})

server.listen(3001, console.log("Sever has started"))
