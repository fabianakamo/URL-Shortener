const crypto = require("crypto");
const ShortenerRepository = require("../repositories/ShortenerRepository");

const shorteningURL = (result) => {
  const shortString = crypto.randomBytes(3).toString("hex");

  const links = {
    [shortString]: result,
  };

  ShortenerRepository.writeURL(links);
  // ShortenerRepository.writeURL(shortString, result);
  return "localhost:4001/" + shortString;
};

const gettingURL = (result) => {
  const site = ShortenerRepository.verifyingString(result);
  return site;
};

module.exports = { shorteningURL, gettingURL };
