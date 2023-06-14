const { Router } = require("express");

const charactersRouter = Router();

charactersRouter.get("/", (req, res) => {
  res.send("characters");
});
module.exports = charactersRouter;
