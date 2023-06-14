const { Router } = require("express");
const {
  getCharactersHandler,
  postCharacterHandler,
  putCharacterHandler,
  deleteCharacterHandler,
} = require("../handlers/charactersHandlers");

const charactersRouter = Router();

charactersRouter.get("/", getCharactersHandler);

charactersRouter.get("/:id");

charactersRouter.post("/", postCharacterHandler);

charactersRouter.put("/:id", putCharacterHandler);

charactersRouter.delete("/:id", deleteCharacterHandler);

module.exports = charactersRouter;
