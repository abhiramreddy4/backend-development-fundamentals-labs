# Lab 3: Advanced GET API, Validation and CRUD Operations

## Student Details

- **Name:** DHONI ABHIRAM REDDY
- **Section:** CSE (GEN-AI) 2A
- **Subject:** Backend Development Fundamentals
- **Project:** Lab 3

## Aim

To enhance a Node.js and Express.js application by implementing advanced GET API operations, input validation, and CRUD operations using an SQLite database.

## Technologies Used

- Node.js
- Express.js
- SQLite
- JavaScript
- Thunder Client
- VS Code

## Project Description

This project implements a Book Management REST API using Node.js, Express.js and SQLite.

The application supports retrieving books, searching books by title, sorting records, pagination, price filtering, adding new books with input validation, updating existing books and deleting books.

## Features

1. Retrieve all books.
2. Retrieve a book using its ID.
3. Search books by title.
4. Sort books using different columns.
5. Implement pagination using limit and offset.
6. Filter books using minimum and maximum prices.
7. Validate POST request inputs.
8. Add new books to the database.
9. Update existing book records.
10. Delete book records.
11. Handle invalid inputs and missing records using appropriate HTTP status codes.

## API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| GET | `/books/` | Retrieve all books |
| GET | `/books/:bookId/` | Retrieve a book by ID |
| POST | `/books/` | Add a new book |
| PUT | `/books/:bookId/` | Update a book |
| DELETE | `/books/:bookId/` | Delete a book |

## GET API Query Parameters

| Parameter | Description |
|---|---|
| search_q | Search books by title |
| order_by | Sort using a valid column |
| order | ASC or DESC |
| limit | Maximum number of records |
| offset | Number of records to skip |
| min_price | Minimum book price |
| max_price | Maximum book price |

Example:

`http://localhost:3000/books/?limit=5&offset=0&order=ASC`

## POST API Validation

The POST API validates the following inputs:

- Title must not be empty.
- Author must not be empty.
- Price must be a valid number.

Invalid requests return HTTP 400 Bad Request.

Successful book creation returns HTTP 201 Created.

## How to Run the Project

### 1. Install Node.js

Download and install Node.js if it is not already installed.

### 2. Open the project folder

Open the Lab 3 folder in VS Code.

### 3. Install dependencies

```bash
npm install
```

### 4. Start the server

```bash
npm start
```

### 5. Open the API

`http://localhost:3000/books/`

### 6. Test API operations

Use Thunder Client in VS Code to test GET, POST, PUT and DELETE requests.

## Database

- Database: SQLite
- Database file: `books.db`
- Table: `book`

The book records contain ID, title, author, price and pages.

## Screenshots

All API testing screenshots are maintained in the `SCREENSHOTS` folder.

The screenshots demonstrate API operations, validation responses and database verification.

## Result

Successfully implemented an advanced Book Management REST API using Node.js, Express.js and SQLite, including GET operations, search, sorting, pagination, price filtering, input validation and CRUD functionality.

The API was tested using Thunder Client.