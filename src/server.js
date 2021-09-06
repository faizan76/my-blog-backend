import express from 'express';
import bodyParser from 'body-parser';

const app = express();

app.use(bodyParser.json());

const articlesInfo = {
    'learn-react': {
        upvotes: 0,
    },
    'learn-node': {
        upvotes: 0,
    },
    'my-thoughts-on-resumes': {
        upvotes: 0,
    },
}

app.get('hello', (req, res) => res.send('Hello!'));

app.get('/hello/:name', (req, res) => res.send(`Hello ${req.params.name}`));

app.post('/hello', (req, res) => res.send(`Hello ${req.body.name}`));

app.listen(8000, () => console.log('listening on port 8000'));