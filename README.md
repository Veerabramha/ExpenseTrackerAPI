# Personal Expense Tracker API

## Overview

The Personal Expense Tracker API is a RESTful API designed for managing personal financial records. Users can record their income and expenses, retrieve past transactions, and get summaries by category or time period.

## Technologies

- **Backend Framework**: Node.js with Express.js
- **Database**: SQLite (for simplicity)

## Features

- Record income and expenses with detailed transaction information.
- Retrieve all transactions or filter by ID.
- Update and delete transactions.
- Get a summary of total income, expenses, and balance.

## Setup and Run Instructions

Follow these steps to set up and run the API:

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd expense-tracker
   ```
2. **Install dependencies**:
   Make sure you have Node.js and npm installed.
   Then run:
   npm install
3. Start the server:
   npm start
4. Access the API: The API will be running at http://localhost:5000.

API Endpoints

1. Add Transaction
   Endpoint: POST /api/transactions
   Description: Adds a new transaction (income or expense).
   Body (JSON):

{
"type": "income",
"category": "Salary",
"amount": 5000,
"date": "2024-10-23",
"description": "October Salary"
}

Response (JSON):

{
"message": "Transaction added successfully.",
"transactionId": 1
} 2. Get All Transactions
Endpoint: GET /api/transactions
Description: Retrieves all transactions.
Response (JSON):

[
{
"id": 1,
"type": "income",
"category": "Salary",
"amount": 5000,
"date": "2024-10-23",
"description": "October Salary"
}
] 3. Get Transaction by ID
Endpoint: GET /api/transactions/:id
Description: Retrieves a transaction by ID.
Response (JSON):

{
"id": 1,
"type": "income",
"category": "Salary",
"amount": 5000,
"date": "2024-10-23",
"description": "October Salary"
} 4. Update Transaction by ID
Endpoint: PUT /api/transactions/:id
Description: Updates a transaction by ID.
Body (JSON):

{
"type": "expense",
"category": "Groceries",
"amount": 200,
"date": "2024-10-23",
"description": "Grocery shopping"
}
Response (JSON):

{
"message": "Transaction updated successfully."
} 5. Delete Transaction by ID
Endpoint: DELETE /api/transactions/:id
Description: Deletes a transaction by ID.
Response (JSON):

{
"message": "Transaction deleted successfully."
} 6. Get Summary
Endpoint: GET /api/summary
Description: Retrieves a summary of transactions, such as total income, total expenses, and balance.
Response (JSON):

{
"totalIncome": 5000,
"totalExpenses": 200,
"balance": 4800
}
Testing the API
You can use Postman or cURL to test the endpoints. Here are some quick tips:

Use the Postman application to create requests for each endpoint.
For GET requests, you can directly enter the URL.
For POST, PUT, and DELETE requests, make sure to set the body format to JSON and include the necessary data.
Postman Screenshots
Below are the screenshots demonstrating each API call.

Add Transaction:
Get All Transactions:
Get Transaction by ID:
Update Transaction by ID:
Delete Transaction by ID:
Get Summary:
Additional Information
Ensure SQLite is properly set up in your environment to avoid database connection issues.
Consider implementing user authentication and validation for added security and functionality.
License
This project is licensed under the MIT License.

### 3. Adding Postman Screenshots

Make sure to create a directory named `postman/screenshots/` in your project structure. After testing your API in Postman, take screenshots of each API call (you can use the Snipping Tool on Windows or any screenshot tool you prefer) and save them in that directory. Name them appropriately, as referenced in the `README.md`.

### 4. Create a GitHub Repository

1. Go to [GitHub](https://github.com/) and log in.
2. Create a new repository and name it (e.g., `expense-tracker`).
3. Follow the instructions to push your local project to the newly created GitHub repository:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin <repository-url>
   git push -u origin main
   ```
4. Final Steps
   Ensure everything is working correctly by testing the API again.
   Review the README.md for clarity and completeness.
   Share your GitHub repository link with your assignment submission.
