const express = require("express");
const router = express.Router();
const blogController = require("../controllers/blogController");
const authMiddleware = require("../middlewares/authMiddleware");

// Route to get all blog posts
router.get("/", blogController.getAllBlogs);

// Route to create a new blog post
router.post("/", authMiddleware, blogController.createBlog);

// Route to get a single blog post by id
router.get("/:id", blogController.getBlogById);

// Route to update a blog post by id
router.put("/:id", authMiddleware, blogController.updateBlog);

// Route to delete a blog post by id
router.delete("/:id", authMiddleware, blogController.deleteBlog);

module.exports = router;
