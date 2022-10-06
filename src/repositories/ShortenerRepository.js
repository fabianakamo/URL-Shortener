const { response } = require("express");
const fs = require("fs");

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

module.exports = { writeURL, readFile, verifyingString };
