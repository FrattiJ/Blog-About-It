const Post = require('../models/Post');

const getAllPosts = async () => {
    try {
        const posts = await Post.findAll();
        console.log('posts:' , )
        return posts;
    } catch (error) {
        console.error('Error fetching posts:', error);
        return [];
    }
};

const renderMainView = async (req, res) => {
    try {
        const blogPosts = await getAllPosts();
        res.render('layouts/main', { body: 'Your main content goes here', blogPosts });
    } catch (error) {
        console.error('Error rendering main view:', error);
        res.status(500).send('Internal Server Error');
    }
};

module.exports = { renderMainView };

