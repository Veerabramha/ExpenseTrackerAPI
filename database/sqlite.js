const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database('./data/expense-tracker.db', (err) => {
  if (err) {
    console.error('Error opening database ' + err.message);
  } else {
    console.log('Connected to the SQLite database.');
    // Create the transactions table if it doesn't exist
    db.run(`
      CREATE TABLE IF NOT EXISTS transactions (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        type TEXT,
        category TEXT,
        amount REAL,
        date TEXT,
        description TEXT
      )
    `);
  }
});

module.exports = db;
