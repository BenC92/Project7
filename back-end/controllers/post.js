const db = require('../src/database/models/index');
const Post = db.Post
const fs = require('fs');

exports.createPost = (req, res, next) => {
  console.log(req.body)
  // const data = JSON.parse(req.body);
  // console.log(data)
  // const url = req.protocol + '://' + req.get('host');
  // const post = new Post({
  //   name: data.name,
  //   content: req.file ? url + '/images/' + req.file.filename : data.text,
  //   userId: data.userId,
  //   title: data.title
  // });
  // post.save().then(
  //   () => {
  //     res.status(201).json({
  //       message: 'Post saved successfully!'
  //     });
  //   }
  // ).catch(
  //   (error) => {
  //     res.status(400).json({
  //       error: error
  //     });
  //   }
  // );
};

 exports.getOnePost = (req, res, next) => {
   Post.findOne({
    where: {id: req.params.id}
   }).then(
     (post) => {
       res.status(200).json(post);
   }
   ).catch(
    (error) => {
     res.status(404).json({
        error: error
     });
     }
  );
 };


exports.deletePost = (req, res, next) => {
  Post.findOne({
    _id: req.params.id
  }).then(
    (post) => {
      const filename = post.imageUrl.split('/images/')[1];
      fs.unlink('images/' + filename, () => {
        post.deleteOne({
          _id: req.params.id
        }).then(
          () => {
            res.status(200).json({
              message: 'Deleted!'
            });
          }
        ).catch(
          (error) => {
            res.status(400).json({
              error: error
            });
          }
        );
      });
    }
  );
};

exports.getAllPost = (req, res, next) => {
  Post.findAll().then(
    (post) => {
      res.status(200).json(post);
    }
  ).catch(
    (error) => {
      res.status(400).json({
        error: error
      });
    }
  );
};


