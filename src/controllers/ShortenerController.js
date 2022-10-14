const ShortenerService = require("../services/ShortenerService");
const knex = require("../database");

const insertLink = async (request, response) => {
  try {
    const { link } = request.body;
    const result = ShortenerService.shorteningURL(link);
    response.send(result);
  } catch (error) {
    response.status(404).json(error.message);
  }
};

const getShortLink = async (request, response) => {
  try {
    const { string } = request.params;
    const result = await ShortenerService.gettingURL(string);
    response.redirect(result);
  } catch (error) {
    response.status(404).json(error.message);
  }
};

module.exports = { insertLink, getShortLink };
