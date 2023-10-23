const mongoose = require("mongoose");
const { MONGO_USER, MONGO_PASS } = process.env;

const connect = mongoose
  .connect(
    `mongodb+srv://${MONGO_USER}:${MONGO_PASS}@cluster0.zfqur6p.mongodb.net/?retryWrites=true&w=majority`,
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => {
    console.log("MongoDB connection successful");
  })
  .catch((err) => {
    console.log(err);
  });

module.exports = connect;
