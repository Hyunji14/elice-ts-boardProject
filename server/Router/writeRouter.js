const { Router } = require("express");
const { Post } = require("../models");

const router = Router();

// 새로운 게시글 생성
router.post("/", async (req, res) => {
  const { title, content, author } = req.body;
  try {
    // title이랑 content를 안적으면 에러에러
    if (!title || !content) {
      return res.sendStatus(400).json({
        message: "Title and Content are required",
      });
    }
    const newPost = await Post.create({ title, content, author });
    res.sendStatus(200).json(newPost);
  } catch (err) {
    res.sendStatus(500).json({
      message: " Server err",
    });
  }
});

module.exports = router;
