const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Xin chào đây là thử nghiệm ci-cd');
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
