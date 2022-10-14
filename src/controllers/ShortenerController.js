require("express-async-errors");
const ShortenerService = require("../services/ShortenerService");

const insertLink = async (request, response, next) => {
  try {
    const { link } = request.body;
    const result = ShortenerService.shorteningURL(link);
    response.send(result);
  } catch (error) {
    next(error);
  }
};

const getShortLink = async (request, response, next) => {
  try {
    const { string } = request.params;
    const result = await ShortenerService.gettingURL(string);
    response.redirect(result);
  } catch (error) {
    next(error);
  }
};

module.exports = { insertLink, getShortLink };
