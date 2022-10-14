const ShortenerService = require("../../services/ShortenerService");

exports.seed = async function (knex) {
  // const string = ShortenerService.shortingString();
  // Deletes ALL existing entries
  await knex("urls").del();
  await knex("urls").insert();
};
