const Post = require('./Post');

const Comment = require('./Comments');

const User = require('./Users');

User.hasMany(Post, {
    foreignKey: 'user_id'
});
Post.belongsTo(User,
    {
        foreignKey: 'user_id'
    });
    Comment.belongsTo(User, {
        foreignKey: 'user_id',
        onDelete: 'cascade',
        hooks:true
    });

    User.hasMany(Comment, {
        foreignKey: 'user_id',
        onDelete: 'cascade',
        hooks: true
    })
    module.exports = {User, Post, Comment};