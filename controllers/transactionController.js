const db = require('../config/db');

// Add a new transaction
const addTransaction = (req, res) => {
  const { type, category, amount, date, description } = req.body;
  const sql = 'INSERT INTO transactions (type, category, amount, date, description) VALUES (?, ?, ?, ?, ?)';
  
  db.run(sql, [type, category, amount, date, description], function (err) {
    if (err) {
      return res.status(400).json({ error: err.message });
    }
    res.status(201).json({ message: 'Transaction added successfully', id: this.lastID });
  });
};

// Get all transactions
const getTransactions = (req, res) => {
  const sql = 'SELECT * FROM transactions';
  
  db.all(sql, [], (err, rows) => {
    if (err) {
      return res.status(400).json({ error: err.message });
    }
    res.status(200).json(rows);
  });
};

// Get transaction by ID
const getTransactionById = (req, res) => {
  const { id } = req.params;
  const sql = 'SELECT * FROM transactions WHERE id = ?';
  
  db.get(sql, [id], (err, row) => {
    if (err) {
      return res.status(400).json({ error: err.message });
    }
    if (!row) {
      return res.status(404).json({ error: 'Transaction not found' });
    }
    res.status(200).json(row);
  });
};

// Update transaction by ID
const updateTransaction = (req, res) => {
  const { id } = req.params;
  const { type, category, amount, date, description } = req.body;
  const sql = 'UPDATE transactions SET type = ?, category = ?, amount = ?, date = ?, description = ? WHERE id = ?';

  db.run(sql, [type, category, amount, date, description, id], function (err) {
    if (err) {
      return res.status(400).json({ error: err.message });
    }
    if (this.changes === 0) {
      return res.status(404).json({ error: 'Transaction not found' });
    }
    res.status(200).json({ message: 'Transaction updated successfully' });
  });
};

// Delete transaction by ID
const deleteTransaction = (req, res) => {
  const { id } = req.params;
  const sql = 'DELETE FROM transactions WHERE id = ?';

  db.run(sql, [id], function (err) {
    if (err) {
      return res.status(400).json({ error: err.message });
    }
    if (this.changes === 0) {
      return res.status(404).json({ error: 'Transaction not found' });
    }
    res.status(200).json({ message: 'Transaction deleted successfully' });
  });
};

// Get summary of transactions (total income, expenses, balance)
const getSummary = (req, res) => {
  const sqlIncome = 'SELECT SUM(amount) AS total_income FROM transactions WHERE type = "income"';
  const sqlExpense = 'SELECT SUM(amount) AS total_expenses FROM transactions WHERE type = "expense"';

  db.get(sqlIncome, [], (err, incomeRow) => {
    if (err) {
      return res.status(400).json({ error: err.message });
    }
    db.get(sqlExpense, [], (err, expenseRow) => {
      if (err) {
        return res.status(400).json({ error: err.message });
      }
      const totalIncome = incomeRow.total_income || 0;
      const totalExpenses = expenseRow.total_expenses || 0;
      const balance = totalIncome - totalExpenses;
      
      res.status(200).json({ total_income: totalIncome, total_expenses: totalExpenses, balance: balance });
    });
  });
};

module.exports = {
  addTransaction,
  getTransactions,
  getTransactionById,
  updateTransaction,
  deleteTransaction,
  getSummary
};
