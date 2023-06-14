const { Router } = require("express");
const charactersRouter = require("./charactersRoutes");
const episodesRouter = require("./episodesRoutes");

const mainRouter = Router();

mainRouter.use("/characters", charactersRouter);
mainRouter.use("/episodes", episodesRouter);

module.exports = mainRouter;
