const Post = require("../models/post");

const PostsController = {
  Index: (req, res) => {
    Post.find((err, posts) => {
      if (err) {
        throw err;
      }

      res.render("posts/index", { posts: posts });
    });
  },
  New: (req, res) => {
    res.render("posts/new", {});
  },
  Create: (req, res) => {
    const post = new Post(req.body);
    console.log(post);
    post.save((err) => {
      console.log(post);
      if (err) {
        throw err;
      }

      res.status(201).redirect("/posts");
    });
  },
  ShowConfirm: (req, res) => {
    res.render("posts/confirm", {});
  },
  Delete: (req, res) => {
      const post = Post.findOne({message: "hi"});

      Post.remove(post);
      console.log('Hello');
      res.status(201).redirect("/posts");
  }

  // Delete: ("/posts/:id", function(req, res) {
  //   const post = Post.findOne({_id: req.params.id});
  //   // const ObjectId = mongoose.Types.ObjectId;
  //   let query = {_id: req.params.id}

  //     console.log(query);

  //    const a = post.posts.delete(query, function(err) {
  //       console.log(a);
  //       if(err){
  //        console.log(err);
  //      }
  //      res.send('Success');
  //    });

  //     res.status(201).redirect("/posts");
  //   }
  // )


  // Delete: ("/posts/:id", function(req, res, next) {
  
  //   // Post.findByIdAndDelete(req.params.id)

  //   Post.deleteOne({message: 'hi'})

  //   console.log("Helloooo!")
  //   .then(() => {

  //     res.redirect('/posts');
  //     })
  //  .catch(err => {
  //     const error = new Error(err);
  //     error.httpStatusCode = 500;
  //     return next(error);
  // })
  // console.log(req.params.id);
  // })


  // Delete: (req, res) => {
   
  //   // let query = {message: 'hi'};

  //   // Post.deleteOne(query);
  //   const post = Post.findOne({message: "hi"});

  //   Post.remove(post);
  //   console.log('Hello');

  //   // Post.remove(query, function(err){
 
  //   //   if(err){
  //   //     console.log(err);
  //   //   }
  //   //   console.log("Helloooo!")
  //   //   res.send('Success');
  //   //   });
  //   }

};

module.exports = PostsController;
