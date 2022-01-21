//import express from 'express';
const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/users', (req, res) => {
    return res.send('Received a GET HTTP method');
});

app.post('/users', (req, res) => {
    return res.send('Received a POST HTTP method');
});

app.put('/users/:userId', (req, res) => {
    return res.send(`Received a PUT HTTP method on user/${req.params.userId} resource`);
});

app.delete('/users/:userId', (req, res) => {
    return res.send(`Received a DELETE HTTP method on user/${req.params.userId} resource`);
});

app.listen(PORT, () =>
    console.log(`Example app listening on port ${PORT}!`),
);