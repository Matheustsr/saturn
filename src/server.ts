import express from 'express';
import 'reflect-metadata';

import './database';

const app = express();

app.listen(3005, () => {
    console.log('Rock time!');
});
