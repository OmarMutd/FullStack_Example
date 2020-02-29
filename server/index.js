const express = require('express');
const cors = require('cors');

const folders = [
  { id: 1, name: 'Folder 1' },
  { id: 2, name: 'Folder 2' },
  { id: 3, name: 'Folder 3' }
];

const notes = [
  { id: 1, name: 'Note 1' },
  { id: 2, name: 'Note 2' },
  { id: 3, name: 'Note 3' }
];

const app = express();

app.use(cors());

app.get('/folders', (_, res) => {
  if (!folders) return res.status(404).json({ message: 'No Folders found' });
  res.json(folders);
});

app.get('/notes', (_, res) => {
  if (!notes) return res.status(404).json({ message: 'No Notes found' });
  res.json(notes);
});

app.listen(8000, console.log('Server up on port 8000'));
