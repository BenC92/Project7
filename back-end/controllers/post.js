const post = require('../../models/post');
const fs = require('fs');

exports.createPost = (req, res, next) => {
  const sourceData = JSON.parse(req.body);
  console.log(sourceData)
  const url = req.protocol + '://' + req.get('host');
  const post = new Post({
    name: Post.name,
    imageUrl: url + '/images/' + req.file.filename,
    userId: Post.userId,
    title: Post.title
  });
  post.save().then(
    () => {
      res.status(201).json({
        message: 'Post saved successfully!'
      });
    }
  ).catch(
    (error) => {
      res.status(400).json({
        error: error
      });
    }
  );
};

// exports.getOneSauce = (req, res, next) => {
//   Sauce.findOne({
//     _id: req.params.id
//   }).then(
//     (sauce) => {
//       res.status(200).json(sauce);
//     }
//   ).catch(
//     (error) => {
//       res.status(404).json({
//         error: error
//       });
//     }
//   );
// };


exports.deletePost = (req, res, next) => {
  Post.findOne({
    _id: req.params.id
  }).then(
    (post) => {
      const filename = sauce.imageUrl.split('/images/')[1];
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

// exports.getAllSauce = (req, res, next) => {
//   Sauce.find().then(
//     (sauce) => {
//       res.status(200).json(sauce);
//     }
//   ).catch(
//     (error) => {
//       res.status(400).json({
//         error: error
//       });
//     }
//   );
// };


exports.likePost = (req, res, next) => {
  console.log(req.body)

  const userId = req.body.userId
  const like = req.body.like
  const id = req.params.id

  Post.findOne({
      _id: id
    })
    .then(post => {
      const sauceData = {
        _id: id
      }

      const usersDisliked = post.usersDisliked.includes(userId)

      if (like > 0) {
        sauceData.$inc = {
          likes: 1
        }
        sauceData.$push = {
          usersLiked: userId
        }
      } else if (like === -1) {
        sauceData.$inc = {
          dislikes: 1
        }
        sauceData.$push = {
          usersDisliked: userId
        }
      } else {
        if (usersDisliked) {
          sauceData.$inc = {
            dislikes: -1
          }
          sauceData.$pull = {
            usersDisliked: userId
          }
        } else {
          sauceData.$inc = {
            likes: -1
          }
          sauceData.$pull = {
            usersLiked: userId
          }
        }
      }

      console.log(sauceData)

      post.updateOne({
          _id: id
        }, sauceData)
        .then(
          () =>
          res.status(201).json({
            message: 'Post has been liked! :)'
          })

        ).catch(
          (error) => {
            res.status(404).json({
              error: error
            });
          }
        );
    })
};