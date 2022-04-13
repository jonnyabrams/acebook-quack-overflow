const express = require("express");
const router = express.Router();

const PostsController = require("../controllers/posts");

router.get("/", PostsController.Index);
router.post("/", PostsController.Create);
router.get("/new", PostsController.New);
router.get("/confirm", PostsController.ShowConfirm);
router.post("/confirm", PostsController.Delete);

module.exports = router;
