const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database('./blog.db', (err) => {
    if (err) console.error(err.message);
    console.log("Connected to SQLite database.");
});

db.run(`
CREATE TABLE IF NOT EXISTS articles (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    titre TEXT NOT NULL,
    contenu TEXT NOT NULL,
    auteur TEXT NOT NULL,
    categorie TEXT,
    tags TEXT,
    date TEXT
)
`);

module.exports = db;