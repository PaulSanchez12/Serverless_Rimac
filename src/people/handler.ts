import 'source-map-support/register';
import express from 'express';
import Serverless from 'serverless-http';
import { router as RouterStarWar } from './api/route';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/people', RouterStarWar);

export const people = Serverless(app);