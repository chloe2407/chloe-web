const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());  // To parse JSON requests

const PORT = process.env.PORT || 5050;

// MongoDB connection
mongoose.connect('your-mongodb-connection-string', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

// Define schema for your portfolio items
const portfolioSchema = new mongoose.Schema({
  title: String,
  category: [String],
  description: String,
  links: [[String]],
  img: String,  // Store image URLs or paths
});

const Portfolio = mongoose.model('Portfolio', portfolioSchema);

// GET all portfolio items
app.get('/portfolio', async (req, res) => {
  try {
    const items = await Portfolio.find();
    res.json(items);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// POST new portfolio item
app.post('/portfolio', async (req, res) => {
  const portfolioItem = new Portfolio(req.body);

  try {
    const newItem = await portfolioItem.save();
    res.status(201).json(newItem);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
