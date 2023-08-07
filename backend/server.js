const express = require('express');
const cors = require('cors');
const axios = require('axios');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 5000;

// app.use(cors(
// {
// origin: [" "],
// methods: ["POST", "GET"],
// credentials: true
// }
// ));
 app.use(cors());
app.use(express.json());
app.use(bodyParser.json());


app.get('/api/movies/search', async (req, res) => {
  const { query } = req.query;
  try {
    const response = await axios.get(
      `http://www.omdbapi.com/?apikey=881cd60a&s=${query}`
    );
    res.json(response.data.Search || []);
  } catch (error) {
    console.error('Error searching movies:', error);
    res.status(500).json({ error: 'An error occurred while searching movies' });
  }
});

const favorites = [];

app.post('/api/movies/favorites', (req, res) => {
  const { imdbID } = req.body;

  if (!imdbID) {
    return res.status(400).json({ error: 'imdbID is required' });
  }

  const existingIndex = favorites.findIndex((fav) => fav.imdbID === imdbID);

  if (existingIndex !== -1) {
    favorites.splice(existingIndex, 1);
    res.json({ message: 'Removed from favorites' });
  } else {
    favorites.push({ imdbID });
    res.json({ message: 'Added to favorites' });
  }
});

app.get('/api/movies/favorites', (req, res) => {
  res.json(favorites);
});


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
