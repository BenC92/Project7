

const postSchema = Schema({
  name: { type: String, required: true },
  title:{ type: String, required: true },
  imageUrl: { type: String, required: true },
  userId: { type: String, required: true },
});

// module.exports = mongoose.model('Sauce', sauceSchema);