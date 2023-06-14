const { Router } = require("express");

const episodesRouter = Router();

episodesRouter.get("/", (req, res) => {
  res.send("episodes");
});
module.exports = episodesRouter;
