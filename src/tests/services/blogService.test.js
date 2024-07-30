const {
  create,
  getAll,
  getById,
  update,
  deletePost,
} = require("../../services/blogService");
const BlogPost = require("../../models/BlogPost");

jest.mock("../../models/BlogPost");

const validBlogPost = { title: "Test Post", content: "This is a test post" };
const updatedData = { title: "Updated Post" };

describe("Blog Service", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should create a new blog post", async () => {
    BlogPost.create.mockResolvedValue(validBlogPost);
    const post = await create(validBlogPost);
    expect(post).toEqual(validBlogPost);
    expect(BlogPost.create).toHaveBeenCalledWith(
      expect.objectContaining(validBlogPost)
    );
  });

  it("should get all blog posts", async () => {
    BlogPost.find.mockResolvedValue([validBlogPost]);
    const posts = await getAll();
    expect(posts).toEqual([validBlogPost]);
    expect(BlogPost.find).toHaveBeenCalled();
  });

  it("should get a blog post by ID", async () => {
    BlogPost.findById.mockResolvedValue(validBlogPost);
    const post = await getById(validBlogPost._id);
    expect(post).toEqual(validBlogPost);
    expect(BlogPost.findById).toHaveBeenCalledWith(validBlogPost._id);
  });

  it("should update a blog post", async () => {
    BlogPost.findByIdAndUpdate.mockResolvedValue({
      ...validBlogPost,
      ...updatedData,
    });
    const post = await update(validBlogPost._id, updatedData);
    expect(post).toEqual({ ...validBlogPost, ...updatedData });
    expect(BlogPost.findByIdAndUpdate).toHaveBeenCalledWith(
      validBlogPost._id,
      updatedData,
      { new: true }
    );
  });

  it("should delete a blog post", async () => {
    BlogPost.findByIdAndDelete.mockResolvedValue(validBlogPost);
    const post = await deletePost(validBlogPost._id);
    expect(post).toEqual(validBlogPost);
    expect(BlogPost.findByIdAndDelete).toHaveBeenCalledWith(validBlogPost._id);
  });
});
