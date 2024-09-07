const express = require("express");
const router = express.Router();
const axios = require("axios");

// CHARACTERS LIST FOR HOME PAGE
router.get("/characters", async (req, res) => {
  try {
    const skip = req.query.skip;
    const limit = req.query.limit || 100;

    const response = await axios.get(
      `https://lereacteur-marvel-api.herokuapp.com/characters?apiKey=${process.env.API_KEY}&limit=${limit}&skip=${skip}`
    );
    res.json(response.data);
    // res.json(response.data.results);
  } catch (error) {
    console.log("characters error", error.message);
    res.status(400).json({ message: error.message });
  }
});

// COMICS LIST FOR SPECIFIC PAGES
router.get("/comics", async (req, res) => {
  try {
    const skip = req.query.skip;
    const limit = req.query.limit || 100;

    const response = await axios.get(
      `https://lereacteur-marvel-api.herokuapp.com/comics?apiKey=${process.env.API_KEY}&limit=${limit}&skip=${skip}`
    );
    res.json(response.data);
  } catch (error) {
    console.log("comics error", error.message);
    res.status(400).json({ message: error.message });
  }
});

// ALL COMICS PER CHARACTERS ID
router.get("/comics/:characterId", async (req, res) => {
  try {
    const characterId = req.params.characterId;

    const response = await axios.get(
      `https://lereacteur-marvel-api.herokuapp.com/comics/${characterId}?apiKey=${process.env.API_KEY}`
    );
    res.json(response.data);
  } catch (error) {
    console.log("characterId/comics", error.message);
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
