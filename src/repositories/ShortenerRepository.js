const { response } = require("express");
const fs = require("fs");
const knex = require("../database");

/* 
const path =
  "C:\\Users\\Fabiana Kamo\\Documents\\Solutions Lab\\Encurtador de Links\\src\\data\\urls.json";

const readFile = (path) => {
  const read = fs.readFileSync(path);
  const toJson = JSON.parse(read);
  return toJson;
};

const writeURL = (links) => {
  // const writeURL = (shortString, result) => {
    // toJson[shortString] = result;
    // console.log(toJson);
    const toJson = readFile(path);
    const result = Object.assign(toJson, links);
    fs.writeFileSync(path, JSON.stringify(result), "utf-8");
    
    readFile(path);
    // return ;
  };

  const verifyingString = (result) => {
  const read = readFile(path);
  const finalResult = read[result];
  return finalResult;
};
  */
const writeURL = async (shortString, link) => {
  await knex("urls").insert({ url: link, shortString: shortString });
};

const verifyingString = async (string) => {
  const result = await knex
    .select("url")
    .from("urls")
    .where({ shortString: string })
    .first();

  if (!result) {
    throw new Error("Não existe URL");
  }
  return result.url;
};

module.exports = { writeURL, verifyingString };
