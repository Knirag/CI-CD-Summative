const BlogPost = require("../models/BlogPost");

// Get all blog posts
const getAllBlogs = async (req, res) => {
  try {
    const blogs = await BlogPost.find();
    res.json(blogs);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Create a new blog post
const createBlog = async (req, res) => {
  const blog = new BlogPost({
    title: req.body.title,
    content: req.body.content,
    author: req.user.id,
  });

  try {
    const newBlog = await blog.save();
    res.status(201).json(newBlog);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Get a single blog post by id
const getBlogById = async (req, res) => {
  try {
    const blog = await BlogPost.findById(req.params.id);
    if (blog == null) {
      return res.status(404).json({ message: "Blog not found" });
    }
    res.json(blog);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Update a blog post by id
const updateBlog = async (req, res) => {
  try {
    const blog = await BlogPost.findById(req.params.id);
    if (blog == null) {
      return res.status(404).json({ message: "Blog not found" });
    }

    if (req.body.title != null) {
      blog.title = req.body.title;
    }
    if (req.body.content != null) {
      blog.content = req.body.content;
    }

    const updatedBlog = await blog.save();
    res.json(updatedBlog);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Delete a blog post by id
const deleteBlog = async (req, res) => {
  try {
    const blog = await BlogPost.findById(req.params.id);
    if (blog == null) {
      return res.status(404).json({ message: "Blog not found" });
    }

    await blog.remove();
    res.json({ message: "Blog deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  getAllBlogs,
  createBlog,
  getBlogById,
  updateBlog,
  deleteBlog,
};
