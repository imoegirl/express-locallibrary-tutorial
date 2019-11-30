const Book = require('../models/book');

exports.index = (req, res) => {
    res.send('No Code, Index');
};

exports.book_list = (req, res) => {
    res.send('No Code, Book List');
};

exports.book_detail = (req, res) => {
    res.send('No Code, Book Detail ' + req.params.id);
};

exports.book_create_get = (req, res) => {
    res.send('No Code, Get Book Create');
};

exports.book_create_post = (req, res) => {
    res.send('No Code, Post Book Create');
};

exports.book_delete_get = (req, res) => {
    res.send('No Code, Get Book Delete');
};

exports.book_delete_post= (req, res) => {
    res.send('No Code, Post Book Delete');
};

exports.book_update_get = (req, res) => {
    res.send('No Code, Get Book Update');
};

exports.book_update_post = (req, res) => {
    res.send('No Code, Post Book Update');
};

