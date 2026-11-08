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


## Screenshots

### 1. Project Setup and Server

![Project Setup](./SCREEN%20SHORTS/01_Lab03_Project_Setup.png)

![Existing Server Code](./SCREEN%20SHORTS/02_Existing_Server_Code.png)

![Server Running](./SCREEN%20SHORTS/03_Server_Running.png)

### 2. GET API Operations

![GET API Updated](./SCREEN%20SHORTS/02_GET_API_Updated.png)

![GET All Books](./SCREEN%20SHORTS/01_GET_All_Books.png)

![GET Book by ID 1](./SCREEN%20SHORTS/02_GET_Book_ID_1.png)

![GET Book by ID 2](./SCREEN%20SHORTS/03_GET_Book_ID_2.png)

### 3. POST API and Validation

![POST Add Book](./SCREEN%20SHORTS/04_POST_Add_Book.png)

![POST Success Response](./SCREEN%20SHORTS/14_POST_Success_Response.png)

![POST Validation Code](./SCREEN%20SHORTS/12_POST_Validation_Code.png)

![POST Missing Title](./SCREEN%20SHORTS/15_POST_Missing_Title.png)

![POST Missing Author](./SCREEN%20SHORTS/16_POST_Missing_Author.png)

![POST Invalid Price](./SCREEN%20SHORTS/17_POST_Invalid_Price.png)

![POST Empty Price](./SCREEN%20SHORTS/18_POST_Empty_Price.png)

### 4. Search, Sorting, Filtering and Pagination

![Search Books](./SCREEN%20SHORTS/05_Search_Books.png)

![Sort by Price](./SCREEN%20SHORTS/06_Sort_By_Price.png)

![Sort Descending](./SCREEN%20SHORTS/07_Sort_Descending.png)

![Limit Test](./SCREEN%20SHORTS/08_Limit_Test.png)

![Offset Test](./SCREEN%20SHORTS/09_Offset_Test.png)

![Price Filter](./SCREEN%20SHORTS/10_Price_Filter.png)

![Valid Price Filter](./SCREEN%20SHORTS/40_GET_Valid_Price_Filter.png)

![Combined Query Test](./SCREEN%20SHORTS/47_GET_Combined_Query_Test.png)

### 5. GET API Error Handling

![Invalid Limit](./SCREEN%20SHORTS/34_GET_Invalid_Limit_Validation.png)

![Invalid Offset](./SCREEN%20SHORTS/35_GET_Invalid_Offset_Validation.png)

![Invalid Order By](./SCREEN%20SHORTS/36_GET_Invalid_Order_By_Validation.png)

![Invalid Order](./SCREEN%20SHORTS/37_GET_Invalid_Order_Validation.png)

![Invalid Price Filter](./SCREEN%20SHORTS/38_GET_Invalid_Price_Filter.png)

### 6. PUT and DELETE Operations

![PUT Update Book](./SCREEN%20SHORTS/48_PUT_Update_Book.png)

![Verify Updated Book](./SCREEN%20SHORTS/49_GET_Verify_Updated_Book.png)

![DELETE Book Success](./SCREEN%20SHORTS/50_DELETE_Book_Success.png)


All API testing screenshots are maintained in the `SCREENSHOTS` folder.

The screenshots demonstrate API operations, validation responses and database verification.

## Result

Successfully implemented an advanced Book Management REST API using Node.js, Express.js and SQLite, including GET operations, search, sorting, pagination, price filtering, input validation and CRUD functionality.

The API was tested using Thunder Client.