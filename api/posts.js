var express = require('express')
var router = express.Router()

var db = require("./db")

router.route("/posts").get(function(req, res){
    res.json(db.posts)
})

router.route("/posts").post(function(req, res){
    var body = req.body
    body.lat = parseFloat(body.lat)
    body.long = parseFloat(body.long)
    db.posts.push(body)
    res.json({"message": "Post successfully created"})
})

router.route("/posts/:id").get(function(req, res){
    var post = db.posts[req.params.id]
    if (post) res.json(post)
    else return res.json({"error": "Post doesn't exist"}, 404)
})

router.route("/posts/:id").put(function(req, res){
    var post = db.posts[req.params.id]
    if (!post) return res.json({"error": "Post doesn't exist"}, 404)
    for (var prop in req.body) {
        post[prop] = req.body[prop];
    }
    res.send("Updated!")
})

router.route("/posts/:id").delete(function(req, res){
    var post = db.posts[req.params.id]
    if (!post) return res.json({"error": "Post doesn't exist"}, 404)
    db.deletedPosts.push(post)
    db.posts.splice(req.params.id, 1)
    res.send("Deleted!")
})

module.exports = router