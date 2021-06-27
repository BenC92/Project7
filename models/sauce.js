

const sauceSchema = Schema({
  name: { type: String, required: true },
  title:{ type: String, required: true },
  imageUrl: { type: String, required: true },
  userId: { type: String, required: true },
  likes:{type: Number, default: 0},
  dislikes:{type: Number, default: 0},
  usersLiked: {type: [String], required: true},
  usersDisliked: {type: [String],require: true}
});

module.exports = mongoose.model('Sauce', sauceSchema);