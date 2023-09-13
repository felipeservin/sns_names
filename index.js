const express = require('express');
const cors = require('cors');

const app = express();

// Use cors middleware and configure it
app.use(cors({
    origin: true, // Reflect the origin if it's in the allowed list or not
    methods: ["GET", "POST"], // allowed HTTP methods
    credentials: true, // required to handle session cookies
}));

app.get('/domain/:name', async (req, res) => {
  const { name } = req.params;
  const apiUrl = `https://api.geniidata.com/api/1/sns/name/${name}`;
  
  const headers = {
    'Accept': 'application/json',
    'api-key': '142cf1b0-1ca7-11ee-bb5e-9d74c2e854ac'
  };

  try {
    const response = await fetch(apiUrl, { method: 'GET', headers: headers });
    if (!response.ok) {
      throw new Error(`GeniiData API responded with HTTP status: ${response.status}`);
    }

    const data = await response.json();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get('/domain/:name/:field', async (req, res) => {
  const { name, field } = req.params;

  const apiUrl = `https://api.geniidata.com/api/1/sns/name/${name}`;
  const headers = {
    'Accept': 'application/json',
    'api-key': '142cf1b0-1ca7-11ee-bb5e-9d74c2e854ac'
  };

  try {
    const response = await fetch(apiUrl, { method: 'GET', headers: headers });
    if (!response.ok) {
      throw new Error(`GeniiData API responded with HTTP status: ${response.status}`);
    }

    const data = await response.json();

    // Check if the desired field exists in the response's data object
    if (data.data && data.data[field]) {
      res.json({ [field]: data.data[field] });
    } else {
      res.status(404).json({ error: `${field} not found` });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = app;
