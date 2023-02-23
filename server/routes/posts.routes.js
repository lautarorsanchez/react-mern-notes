import { Router } from "express";
import {
  getPosts,
  getOnePost,
  createPost,
  updatePost,
  deletePost,
} from "../controllers/post.controllers.js";

const router = Router();

// ROUTES
// request posts
router.get("/posts", getPosts);
// request single post
router.get("/posts/:id", getOnePost);

// create post
router.post("/posts", createPost);

// update post
router.put("/posts/:id", updatePost);

// delete post
router.delete("/posts/:id", deletePost);

// EXPORTS
export default router;
