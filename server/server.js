require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const app = express();
// const { MONGO_USER, MONGO_PASS } = process.env;
const { Post } = require("./models");
const postRouter = require("./router/postRouter");

// 몽고디비 연결
mongoose
  .connect(
    `mongodb+srv://rhwjdghk:aldksgo@cluster0.c5frxft.mongodb.net/?retryWrites=true&w=majority`,
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => {
    console.log("MongoDB connection successful");
  })
  .catch((err) => {
    console.log(err);
  });

// 중요중요!!!!
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// '/'경로 페이지에서 기본 문구 띄우기
app.get("/", (req, res) => {
  res.send("Welcome board");
});

// 라우터 연결
app.use("/board", postRouter);

// ejs 세팅
app.set("view", __dirname + "/views");
app.set("view engine", "ejs");

//node 서버가 사용할 포트 번호, 리액트의 포트번호(3000)와 충돌하지 않게 다른 번호로 할당
const port = 3002;
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

// 테스트를 위해 데이터를 삽입해봄
// async function run() {
//   let posts = [
//     {
//       title: "엘리스 스터디",
//       content: "난 백엔드를 맡았지",
//       author: "정화",
//     },
//     {
//       title: "엘리스 스터디",
//       content: "난 프론트엔드를 맡았지",
//       author: "현지",
//     },
//   ];

//   await Post.create(posts);
// }

// run();
