const Post = require('../models/Post');

const postdata = [
    new Post(1, "Test", "This is the first test post."),
    new Post(2, "Please render the main", "This is the second test to see if it shows up in when the main is rendered.")
];

const seedBlog = () => {
    Post.bulkCreate(postdata);
    console.log('postData:', postdata);
}


module.exports = seedBlog;