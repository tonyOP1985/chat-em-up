const path = require('path');
const express = require('express');

const publicPath = path.join(__dirname, '../public');

app.use(express.static(publicPath));
const port = process.env.PORT || 3000;
var app = express();



// app.get('/', (req, res) => {
//   res.render('index.html');
// });

app.listen(port, () => {
  console.log(`Server is up on port ${port}`);
});
