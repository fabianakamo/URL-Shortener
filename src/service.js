const express = require("express");
const router = require("../src/routes/routes");
const app = express();

app.use(express.json());
app.use(router.router);

// app.post("/link", (request, response) => {
//   const { link } = request.body;
//   try {
//     console.log(link);
//     return response.json(link);
//   } catch (error) {
//     response.status(404).json(error.message);
//   }
// });

app.get("/", (request, response) => {
  return response.json({ message: "Solutions Lab: Encurtador de Links" });
});

const PORT = 4001;

app.listen(PORT, () => {
  console.log(
    `
      App listen on port: ${PORT}
      `
  );
});
