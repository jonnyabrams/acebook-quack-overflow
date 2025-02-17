const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
  message: String,
  username: String,
  dateAndTime: Date,
  likes: [String],
  comments: [
    {
      type: mongoose.Schema.Types.Object,
      ref: "Comment",
    },
  ],
  postImage: {
    type: String,
  },
});

const Post = mongoose.model("Post", PostSchema);

module.exports = Post;
