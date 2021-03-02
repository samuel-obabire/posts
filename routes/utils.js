import { check } from "express-validator"

export const validate = () => [
  check("title").notEmpty().withMessage("Post title is required"),
  check("body")
    .isLength({ min: 10 })
    .withMessage("A min of 15 characters is required"),
]
