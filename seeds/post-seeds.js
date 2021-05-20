const { Post } = require('../models');

const postData = [
    {
        title: "This is a test",
        post_content: "Testing",
        user_id: 3
    },
   
]

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;