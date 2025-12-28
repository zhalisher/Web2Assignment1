const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs')

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});


app.use(express.static(path.join(__dirname, 'public')));


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

app.get('/search', (req, res) => {
  const q = req.query.q;
  if (!q) {
    return res.status(400).send('Missing search query');
  }
  res.send(`<h2>Search result for: ${q}</h2><a href="/">Back</a>`);
});

app.get('/contact.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'contact.html'));
});

app.get('/about.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'about.html'));
});

app.get('/index.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

app.post('/submit', (req, res) => {
  const filePath = path.join(__dirname, 'contacts.json')

  fs.writeFile(filePath, JSON.stringify(req.body, null, 2), err => {
    if (err) {
      return res.status(500).send('Error saving data')
    }
    res.sendFile(path.join(__dirname, 'views', 'test.html'))
  })
})

app.get('/item/:id', (req, res) => {
  res.json({ id: req.params.id })
})

app.get('/api/info', (req, res) => {
  res.json({
    project: 'Website',
    author: 'Our Group',
    version: '1.0',
    description: 'Description of the project'
  })
})

app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
});

app.listen(3000, () => console.log('Server running on http://localhost:3000'));