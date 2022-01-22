import express from 'express';
import models from 'models';
import routes from './routes';

const app = express();
const PORT = process.env.PORT || 3000;

// middleware that makes body of request accessible on req.body for json body and url-encoded params
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// define custom middleware (just a function with params (req, res, next))
app.use((req, res, next) => {
    req.context = {
        models,
        me: models.users[1]
    };
    console.log(".me property set on req.context object");
    next();
});

app.use('/messages', routes.message);
app.use('/users', routes.user);

app.listen(PORT, () =>
    console.log(`Example app listening on port ${PORT}!`),
);