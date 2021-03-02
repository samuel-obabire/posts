import POSTS from "../models/posts.js"

export const getPosts = (req, res, next) => {
  res.json({ posts: POSTS })
}
