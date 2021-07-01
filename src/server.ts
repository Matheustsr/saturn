import express from 'express';

const app = express();

// const routes = new express.Router();

app.get('/2', (req, res) => res.status(201));

app.listen(3005, () => {
    console.log('Rock time!');
});
