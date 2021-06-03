const express = require("express");
const app = express();
const PORT = 8080;
const cors = require("cors");

app.use(cors());
app.use(express.json());

app.listen(PORT, () => {
  console.log(`The Application is Running on http://localhost:${PORT}`);
});

app.get("/test", (req, res) => {
  res.status(200).send({
    name: "Mriganka Saha",
    age: 13,
  });
});

app.post("/test/:id", (req, res) => {
  const { id } = req.params;
  const { logo } = req.body;
  if (!logo) {
    res.status(418).send({
      ErroeMessage: "The Logo Send is not Valid",
    });
  } else {
    res.status(200).send({
      Message: `The Send value is ${logo} and the ID is ${id}`,
    });
  }
});
