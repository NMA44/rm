const { Character } = require("../db");
const axios = require("axios");

// const cleanArray = (arr) =>
//   arr.map((elem) => {
//     return {
//       id: elem.id,
//       name: elem.name,
//       created: false,
//     };
//   });

// const getCharacters = async () => {
//   //buscar en bdd
//   const databaseCharacters = await Character.findAll();
//   //buscar en api

//   const apiCharactersRaw = await axios.get(``).data;
//   //unificarlos
//   const apiCharacters = cleanArray(apiCharactersRaw);
//   const results = [...databaseCharacters, ...apiCharacters];
//   return results;
// };

const createCharacter = async (name, image) => {
  const newCharacter = await Character.create({ name, image });
  return newCharacter;
};

const deleteCharacter = async (id) => {
  const characterDeleted = await Character.destroy({ where: { id } });
  return characterDeleted;
};

module.exports = { /*getCharacters,*/ createCharacter, deleteCharacter };
