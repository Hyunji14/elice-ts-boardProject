const express = require("express");
const app = express();
const test = require("./Router/test");
const notesRouter = require("./router/notes");

// 중요중요!!!!
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", test);
app.use("/board", notesRouter);

app.use((req, res, next) => {
  res.status(404);
  res.send({
    result: "fail",
    error: `Page not found ${req.path}`,
  });
});

app.use((err, req, res, next) => {
  res.status(500);

  res.json({
    result: "fail",
    error: err.message,
  });
});

const port = 3002; //node 서버가 사용할 포트 번호, 리액트의 포트번호(3000)와 충돌하지 않게 다른 번호로 할당
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
