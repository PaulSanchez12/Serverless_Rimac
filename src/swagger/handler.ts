import 'source-map-support/register';
import express from 'express';
import Serverless from 'serverless-http';

const swaggerHtml = require("./swagger.html");
const openApiJson = require("./openapi.json");

const app = express();

app.get("/api-docs", async (_, res) => {
  res.set("Content-Type", "text/html; charset=utf-8");
  res.send(swaggerHtml);
});

app.get(["/openapi.json", "/api-docs/openapi.json"], async (_, res) => {
  res.set("Content-Type", "application/json; charset=utf-8");
  res.send(openApiJson);
});

export const swagger = Serverless(app);