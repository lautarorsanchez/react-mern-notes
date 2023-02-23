import Post from "../models/Post.js";

export const getPosts = async (req, res) => {
  const posts = await Post.find();
  res.send(posts);
};

export const getOnePost = async (req, res) => {
  const onePost = await Post.findById(req.params.id);

  if (!onePost) return res.sendStatus(404);
  return res.json(onePost);
};

export const createPost = async (req, res) => {
  const { title, description } = req.body;
  const newPost = new Post({ title, description });
  await newPost.save();
  return res.json(newPost);
};

export const updatePost = async (req, res) => {
  const post = await Post.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  console.log(post);
  return res.send("post updated");
};

export const deletePost = async (req, res) => {
  const removedPost = await Post.findByIdAndDelete(req.params.id);
  if (!removedPost) return res.sendStatus(404);
  return res.sendStatus(204);
};
