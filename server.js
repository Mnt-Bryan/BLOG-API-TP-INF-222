const express = require('express');
const app = express();
const cors = require('cors');

const articleRoutes = require('./routes/articleRoutes');

app.use(cors());
app.use(express.json());
app.use(express.static('public'));

app.use('/api/articles', articleRoutes);

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});