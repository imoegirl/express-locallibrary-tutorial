const Author = require('../models/author');

exports.author_list = (req, res) => {
    res.send('No Code, Author List');
};

exports.author_detail = (req, res) => {
    res.send('No Code, Author Detail: ' + req.params.id);
};

exports.author_create_get = (req, res) => {
    res.send('No Code, Get Create Author');
};

exports.author_create_post = (req, res) =>{
    res.send('No Code, Post Create Author');
};

exports.author_delete_get = (req, res) =>{
    res.send('No Code, Get Delete Author');
};

exports.author_delete_post = (req, res) => {
    res.send('No Code, Post Delete Author');
};

exports.author_update_get = (req, res) =>{
    res.send('No Code, Get Update Author');
};

exports.author_update_post = (req, res) => {
    res.send('No Code, Post Update Author');
};