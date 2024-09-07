require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect(process.env.MONGODB_URI);

const marvelRoutes = require("./routes/marvel");
app.use(marvelRoutes);
const searchRoutes = require("./routes/search");
app.use(searchRoutes);
const userRoutes = require("./routes/user");
const User = require("./models/User");
app.use(userRoutes);

app.get("/", (req, res) => {
  res.json({ message: "Welcome on Marvel API" });
});

// app.get("/comics", async (req, res) => {
//   try {
//     const skip = req.query.skip;
//     const limit = req.query.limit || 100;

//     const response = await axios.get(
//       `https://lereacteur-marvel-api.herokuapp.com/comics?apiKey=${process.env.API_KEY}&limit=${limit}&skip=${skip}`
//     );
//     res.json(response.data);
//   } catch (error) {
//     console.log("comics error", error.message);
//     res.status(400).json({ message: error.message });
//   }
// });

// app.get("/comics/:characterId", async (req, res) => {
//   try {
//     const characterId = req.params.characterId;

//     const response = await axios.get(
//       `https://lereacteur-marvel-api.herokuapp.com/comics/${characterId}?apiKey=${process.env.API_KEY}`
//     );
//     res.json(response.data);
//   } catch (error) {
//     console.log("characterId/comics", error.message);
//     res.status(400).json({ message: error.message });
//   }
// });

app.all("*", (req, res) => {
  res.json({ message: "this page does not exist" });
});

app.listen(process.env.PORT, () =>
  console.log(`Server started on port ${process.env.PORT}`)
);
