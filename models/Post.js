const { Sequelize, Model, DataTypes } = require('sequelize');
const sequelize = require('../config/config');

class Post extends Model {}

Post.init(
  {
    title: DataTypes.STRING,
    content: DataTypes.STRING
  },
  {
    sequelize
  }
);

const postdata = [
  new Post(1, "Test", "This is the first test post."),
  new Post(2, "Please render the main", "This is the second test to see if it shows up in when the main is rendered.")
];

const seedBlog = () => {
  Post.bulkCreate(postdata);
}

seedBlog();

module.exports = Post;
