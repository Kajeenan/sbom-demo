const express = require('express');  // Express = einfacher Webserver
const axios = require('axios');      // Axios = HTTP-Anfragen (API-Aufrufe)
const app = express();

app.get('/', async (req, res) => {
  const response = await axios.get('https://api.github.com');
  res.send(`GitHub API Status: ${response.status}`);
});

app.listen(3000, () => console.log('✅ Server läuft auf Port 3000'));
