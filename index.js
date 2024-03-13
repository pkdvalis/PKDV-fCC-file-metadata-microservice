const express = require('express')
const app = express()
const cors = require('cors')
require('dotenv').config()

// Require the upload middleware
const upload = require('./upload');

// Basic Configuration
app.use(cors());
app.use('/public', express.static(process.cwd() + '/public'));

app.get('/', function (req, res) {
  res.sendFile(process.cwd() + '/views/index.html');
});

// Set up a route for file uploads
app.post('/api/fileanalyse', upload.single('upfile'), (req, res) => {

  res.json({ name: req.file.originalname,
             type: req.file.mimetype,
             size: req.file.size,});
});



const listener = app.listen(process.env.PORT || 3000, () => {
  console.log('Your app is listening on port ' + listener.address().port)
})
