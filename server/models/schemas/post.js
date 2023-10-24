const { Schema } = require("mongoose");

// 게시글에 필요한 것들 타입 생성, 필수값
const PostSchemas = new Schema(
  {
    title: { type: String, required: true },
    content: { type: String, required: true },
    author: { type: String, required: true },
  },
  {
    collection: "Post", // 몽고에서 변경되지 않게 설정
  }
);

module.exports = PostSchemas;
