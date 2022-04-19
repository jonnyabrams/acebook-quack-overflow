const Comment = require("../models/comment");
const Post = require("../models/post");

const CommentsController = {
  // Index: (req, res) => {
  //   Post.find((err, posts) => {
  //     if (err) {
  //       throw err;
  //     }
  //     res.render("posts/index", { posts: posts });
  //     console.log(posts)
  //   });
  // },
  // New: (req, res) => {
  //   res.render("posts/new", {});
  // },

  Create: ("/posts/:id/comment", async (req, res) => {
    let comment = new Comment();
    const id = req.params.id;
    comment.message = req.body.message;
    comment.username = req.session.user.username
    comment.dateAndTime = Date()
    comment.post = id;
    console.log(comment)

    await comment.save();
        // get this particular post
      const postRelated = await Post.findById(id);
        // push the comment into the post.comments array
      // postRelated.comments.push(comment);
      postRelated.comments.push(comment);
        // save and redirect...
      await postRelated.save(function(err) {
      if(err) {console.log(err)}
      res.redirect('/posts')
      })

    }),
    
  //   await comment.save((err) => {
  //     if (err) {
  //       throw err;
  //     }

  //     res.status(201).redirect("/posts");
  //   });
  // }),
  // Delete: ("/posts/:id", function(req, res) {

  //   Post.remove({_id: req.params.id}, (err) => {
  //     if (err) return console.log(err)
  //     console.log(req.body)
  //     res.redirect('/posts')
  //   })
  // })
};

module.exports = CommentsController;
