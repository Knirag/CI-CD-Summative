const BlogPost = require("../models/BlogPost");

const create = async (blogData) => {
  const post = await BlogPost.create(blogData);
  return post;
};

const getAll = async () => {
  const posts = await BlogPost.find();
  return posts;
};

const getById = async (id) => {
  const post = await BlogPost.findById(id);
  return post;
};

const update = async (id, updatedData) => {
  const post = await BlogPost.findByIdAndUpdate(id, updatedData, { new: true });
  return post;
};

const deletePost = async (id) => {
  const post = await BlogPost.findByIdAndDelete(id);
  return post;
};

module.exports = { create, getAll, getById, update, deletePost };
