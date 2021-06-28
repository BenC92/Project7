const post = require('../../models/post');
const fs = require('fs');

exports.createPost = (req, res, next) => {
  const sourceData = JSON.parse(req.body);
  console.log(sourceData)
  const url = req.protocol + '://' + req.get('host');
  const post = new Post({
    name: sourceData.name,
    imageUrl: url + '/images/' + req.file.filename,
    userId: sourceData.userId,
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


