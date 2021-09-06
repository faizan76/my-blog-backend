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



app.listen(8000, () => console.log('listening on port 8000'));