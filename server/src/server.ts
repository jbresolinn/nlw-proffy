import express from "express";

const app = express();

app.get("/", (request, response) => {
  return response.json({ sucess: true });
});

app.listen(3333);
