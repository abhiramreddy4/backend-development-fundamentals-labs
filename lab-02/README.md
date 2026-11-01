# Lab 2: SQLite Database and CRUD Routes

## Student Details

- **Name:** DHONI ABHIRAM REDDY
- **Registration Number:** 252U1R9031
- **Section:** CSE (GEN-AI)
- **Subject:** Backend Development Fundamentals

## Aim

To create a SQLite database and implement CRUD operations using Node.js and Express.js.

## Technologies Used

- Node.js
- Express.js
- SQLite
- JavaScript

## Live Deployment

**Deployed Application:** Not applicable — the project is currently running locally and has not been deployed to a hosting platform.

**Get All Books API:** http://localhost:3000/books/

**Get Book by ID:** http://localhost:3000/books/1/

## Project Description

This project demonstrates how to connect a SQLite database to a Node.js application and perform CRUD operations on book records. The API supports creating, retrieving, updating, and deleting books using Express.js routes and SQL queries.

## How to Run

1. Install Node.js and SQLite.
2. Open the `lab-02` project folder in the terminal.
3. Install the required dependencies:

   ```bash
   npm install
   ```

4. Start the server:

   ```bash
   npm run dev
   ```

5. Open the following URL in your browser to retrieve all books:

   http://localhost:3000/books/

6. Test the remaining API operations using Thunder Client.

## API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| GET | `/books/` | Retrieve all books |
| GET | `/books/:bookId/` | Retrieve a book by ID |
| POST | `/books/` | Add a new book |
| PUT | `/books/:bookId/` | Update a book |
| DELETE | `/books/:bookId/` | Delete a book |

## Screenshots

### 1. Retrieve All Books

![Get All Books](SCREEN%20SHORTS/01_GET_All_Books.png)

### 2. Retrieve a Single Book

![Get Book ID 1](SCREEN%20SHORTS/02_GET_Book_ID_1.png)

![Get Book ID 2](SCREEN%20SHORTS/03_GET_Book_ID_2.png)

### 3. Create a Book

![Create a Book](SCREEN%20SHORTS/04_POST_Add_Book.png)

### 4. Update a Book

![Update a Book](SCREEN%20SHORTS/05_PUT_Update_Book.png)

### 5. Delete a Book

![Delete a Book](SCREEN%20SHORTS/06_DELETE_Book.png)

### 6. SQLite Database

![SQLite Database](SCREEN%20SHORTS/07_Database_After_Delete.png)

## Result

Successfully created a SQLite database and implemented CRUD operations using Node.js and Express.js. All five API routes were tested, and the database was verified after deleting a book.
