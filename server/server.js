const express = require('express');
const cors = require('cors');


const app = express();
const PORT = process.env.PORT || 4000;

// Middleware
app.use(cors());

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
  
  app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
  });
  