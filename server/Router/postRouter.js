const { Router } = require("express");
const { Post } = require("../models");

const router = Router();

// 비동기 기억하기

// 전체 post 검색하여 json 형태로 반환
router.get("/", async (req, res) => {
  try {
    const posts = await Post.find({});
    // if (!posts.length) {
    //   return res.sendStatus(404).json({
    //     message: "Post not found",
    //   });
    // }
    res.json(posts);
    res.send("목록이 있을 공간이야");
  } catch (err) {
    res.sendStatus(500).json({
      message: "Server err",
    });
  }
});

// :id에 해당하는 post 검색
router.get(":id", async (req, res) => {
  const searchId = Number(req.params.id);
  try {
    const post = await Post.findOne({ id: searchId });
    // if (!post) {
    //   return res.sendStatus(404).json({
    //     message: "Post not found",
    //   });
    // }
    res.json(post);
  } catch (err) {
    res.sendStatus(500).json({
      message: "Server err",
    });
  }
});

// :id에 해당하는 post 수정
router.put("/:id", async (req, res) => {
  const searchId = Number(req.params.id);
  const { title, content } = req.body;
  try {
    const updatePost = await Post.findOneAndUpdate(
      { id: searchId },
      { title, content }
    );
    if (!updatePost) {
      res.sendStatus(404).json({
        message: "Post NotFound",
      });
    }
    res.json(updatePost);
  } catch (err) {
    res.sendStatus(500).json({
      message: "Server err",
    });
  }
});

// :id에 해당하는 post 삭제
router.delete("/:id", async (req, res) => {
  const searchId = Number(req.params.id);
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
