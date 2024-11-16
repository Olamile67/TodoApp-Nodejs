import express from 'express';
import { createPost, getPost, updatePost, deletePost } from '../controller/postController.js';

const router = express.Router();

router.post("/create", createPost);

router.get("/login", getPost);

router.put("/update", updatePost);

router.delete("/delete", deletePost);

export default router