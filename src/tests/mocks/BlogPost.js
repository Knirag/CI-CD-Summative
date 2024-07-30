const blogPosts = [];

const BlogPost = {
  find: jest.fn(() => blogPosts),
  findById: jest.fn((id) => blogPosts.find((post) => post._id === id)),
  create: jest.fn((post) => {
    blogPosts.push(post);
    return post;
  }),
  findByIdAndUpdate: jest.fn((id, update) => {
    const index = blogPosts.findIndex((post) => post._id === id);
    if (index !== -1) {
      blogPosts[index] = { ...blogPosts[index], ...update };
      return blogPosts[index];
    }
    return null;
  }),
  findByIdAndDelete: jest.fn((id) => {
    const index = blogPosts.findIndex((post) => post._id === id);
    if (index !== -1) {
      const [deletedPost] = blogPosts.splice(index, 1);
      return deletedPost;
    }
    return null;
  }),
};

module.exports = BlogPost;
