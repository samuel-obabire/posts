import { Router } from "express"
import { validate } from "./utils.js"

import {
  getPosts,
  getPostById,
  createPost,
} from "../controllers/posts-controller.js"

const router = Router()

router.get("/", getPosts)

router.get("/:pid", getPostById)

router.post("/", validate(), createPost)

export default router
