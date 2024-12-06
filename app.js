const express = require('express');
const app = express();
const port = 3333;

app.get('/', (req, res) => {
  res.send('Có thay đổi nè aaaaaaaaaa');
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
