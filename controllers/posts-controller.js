import { validationResult } from "express-validator"

import HttpError from "../models/http-error.js"
import POSTS from "../models/posts.js"
import { generateId } from "./utils.js"

export const getPosts = (req, res, next) => {
  res.json({ posts: POSTS })
}

export const getPostById = (req, res, next) => {
  const id = req.params.pid

  const post = POSTS.find((post) => post.id == id)

  if (!post) {
    const error = new HttpError("Post not found", 223)

    return next(error)
  }

  res.json({ post })
}

export const createPost = (req, res, next) => {
  const errors = validationResult(req)

  if (!errors.isEmpty()) {
    // const error = new HttpError('')
    return res.status(400).json({ errors: errors.array() })
  }

  const { title, body } = req.body

  const post = {
    title,
    body,
    id: generateId(),
  }

  POSTS.push(post)

  res.json({ post })
}
