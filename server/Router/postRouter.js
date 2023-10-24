const { Router } = require("express");
const { Post } = require("../models");

const router = Router();

// 비동기 기억하기

// 전체 조회~
router.get("/", async (req, res) => {
  try {
    const posts = await Post.find({});

    return res.json(posts);
  } catch (err) {
    res.sendStatus(500).json({
      message: "Server err",
    });
  }
});

// :id에 해당하는 post 검색
router.get("/:id", async (req, res) => {
  // console.log(req.params._id);
  const searchId = req.params._id;
  try {
    const post = await Post.findOne({ id: searchId });
    if (!post) {
      return res.sendStatus(404).json({
        message: "Post not found",
      });
    }
    return res.json(post);
  } catch (err) {
    res.sendStatus(500).json({
      message: "Server err",
    });
  }
});

// 새로운 게시글 생성
router.post("/write", async (req, res) => {
  const { title, content } = req.body;
  try {
    // title이랑 content를 안적으면 에러에러
    if (!title || !content) {
      return res.sendStatus(400).json({
        message: "Title and Content are required",
      });
    }
    const newPost = await Post.create({ title, content });
    return res.sendStatus(200).json(newPost);
  } catch (err) {
    res.sendStatus(500).json({
      message: " Server err",
    });
  }
});

// :id에 해당하는 post 수정
router.put("/:id", async (req, res) => {
  const searchId = req.params._id;
  const { title, content } = req.body;
  try {
    const updatePost = await Post.findOneAndUpdate(
      { id: searchId },
      { title, content }
    );
    if (!updatePost) {
      return res.sendStatus(404).json({
        message: "Post NotFound",
      });
    }
    return res.json(updatePost);
  } catch (err) {
    res.sendStatus(500).json({
      message: "Server err",
    });
  }
});

// :id에 해당하는 post 삭제
router.delete("/:id", async (req, res) => {
  const searchId = req.params._id;
  try {
    await Post.deleteOne({ id: searchId });
    res.sendStatus(204);
  } catch (err) {
    res.sendStatus(500).json({
      message: "Server err",
    });
  }
});

module.exports = router;
