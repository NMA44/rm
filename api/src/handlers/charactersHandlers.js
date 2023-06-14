const {
  createCharacter,
  getCharacters,
  deleteCharacter,
} = require("../controllers/charactersControllers");

const getCharactersHandler = (req, res) => {
  getCharacters();
};

const getCharacterHandler = (req, res) => {
  res.send("id");
};

const postCharacterHandler = async (req, res) => {
  const { name, image } = req.body;
  try {
    // if (!name || !image) throw new Error("Missing Data");
    const newCharacter = await createCharacter(name, image);
    res.status(201).json(newCharacter);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const putCharacterHandler = (req, res) => {
  res.send("put characters");
};

const deleteCharacterHandler = async (req, res) => {
  const { id } = req.params;
  try {
    const characterDeleted = await deleteCharacter(id);
    res.status(201).json(characterDeleted);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  getCharactersHandler,
  getCharacterHandler,
  postCharacterHandler,
  putCharacterHandler,
  deleteCharacterHandler,
};
