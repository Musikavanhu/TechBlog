const { Comment } = require('../models');

const commentData = [
  {
    comment_text: "Wow!here I am",
    post_id: 3,
    user_id: 1
  },
  {
    comment_text: "Sometimes I love my life.",
    post_id: 1,
    user_id: 4
  },
  {
    comment_text: "Cookies are scary and tasty",
    post_id: 4,
    user_id: 2
  },
  {
    comment_text: "Great. Now I'm hungry for cookies.",
    post_id: 4,
    user_id: 3
  },
  {
    comment_text: "What time is it",
    post_id: 5,
    user_id: 5
  },
  {
    comment_text: "Facebook wants your data",
    post_id: 5,
    user_id: 4
  },
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;