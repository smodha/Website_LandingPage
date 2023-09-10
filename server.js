const express = require('express');
const app = express();
const PORT = 3000; 

// Serve static files 
app.use(express.static(__dirname));

// Default route: Serve index.html
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

// Route for products.html
app.get('/products', (req, res) => {
  res.sendFile(__dirname + '/products.html');
});

app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});