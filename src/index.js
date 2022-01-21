//import express from 'express';
import express from 'express';
import {v4 as uuidv4} from 'uuid';
import models from 'models';

const app = express();
const PORT = process.env.PORT || 3000;

// middleware that makes body of request accessible on req.body for json body and url-encoded params
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// define custom middleware (just a function with params (req, res, next))
app.use((req, res, next) => {
    req.me = users[1];
    console.log(".me property set on req object")
    next();
})


app.get('/users', (req, res) => {
    return res.send('Received a GET HTTP method');
});

app.post('/users', (req, res) => {
    return res.send('Received a POST HTTP method');
});

app.put('/users/:userId', (req, res) => {
    return res.send(`Received a PUT HTTP method on user/${req.params.userId} resource`);
});

app.get('/messages', (req, res) => {
    return res.send(Object.values(messages));
});

app.get('/messages/:messageId', (req, res) => {
    return res.send(messages[req.params.messageId]);
});

app.post('/messages', (req, res) => {
    const id = uuidv4();
    const message = {
        id,
        text: req.body.text,
        userId: req.me.id
    };
    messages[id] = message;
    return res.send(message);
})

app.delete('/messages/:messageId', (req, res) => {
    const {
        [req.params.messageId]: message,
        ...otherMessages
    } = messages;

    messages = otherMessages;

    return res.send(message);
});

app.listen(PORT, () =>
    console.log(`Example app listening on port ${PORT}!`),
);