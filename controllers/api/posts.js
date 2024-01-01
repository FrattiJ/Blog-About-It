const express = require('express');
const router = express.Router();
const withAuth = require('../../utils/auth');
const Post = require('../../models/Post');

let blogPosts = [
    new Post(1, "Test", "This is the first test post."),
    new Post(2, "Please render the main", "This is the second test to see if it shows up in when the main is rendered.")
];

router.get('/', withAuth, async (req, res) => {
    try {
        res.json(blogPosts);
    } catch (error) {
        res.status(500).json({ error: 'Server Error, please try again latwer' });
    }
});

router.get('/:id', withAuth, async (req, res) => {
    try {
        const postId = parseInt(req.params.id);
        const post = blogPosts.find(post => post.id === postId);

        if (post) {
            res.json(post);
        } else {
            res.status(404).json({ error: 'Not found' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Server Error, please try again latwer' });
    }
});

router.post('/', withAuth, async (req, res) => {
    try {
        const { title, content } = req.body;

        if (!title || !content) {
            return res.status(400).json({ error: 'Title and content are required' });
        }

        const newPost = new Post(blogPosts.length + 1, title, content);

        blogPosts.push(newPost);
        res.status(201).json(newPost);
    } catch (error) {
        res.status(500).json({ error: 'Server Error, please try again latwer' });
    }
});

module.exports = router;
