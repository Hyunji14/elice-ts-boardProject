const mongoose = require("mongoose");
const PostSchemas = require("./schemas/post");

exports.Post = mongoose.model("Post", PostSchemas);
