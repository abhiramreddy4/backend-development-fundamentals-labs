const express = require("express");
const path = require("path");
const sqlite3 = require("sqlite3");
const { open } = require("sqlite");

const app = express();

app.use(express.json());

const dbPath = path.join(__dirname, "books.db");

let db = null;

const initializeDBAndServer = async () => {
  try {
    db = await open({
      filename: dbPath,
      driver: sqlite3.Database,
    });

    console.log("Database connected successfully");

    // GET API: Retrieve all books
    app.get("/books/", async (request, response) => {
      const getBooksQuery = `
        SELECT *
        FROM book;
      `;

      const booksArray = await db.all(getBooksQuery);
      response.send(booksArray);
    });

    // GET API: Retrieve a book by ID
app.get("/books/:bookId/", async (request, response) => {
  const { bookId } = request.params;

  const getBookQuery = `
    SELECT *
    FROM book
    WHERE id = ?;
  `;

  const book = await db.get(getBookQuery, [bookId]);

  if (book === undefined) {
    response.status(404);
    response.send("Book not found");
  } else {
    response.send(book);
  }
});

// POST API: Add a new book
app.post("/books/", async (request, response) => {
  const { title, author, price, pages } = request.body;

  const addBookQuery = `
    INSERT INTO book (title, author, price, pages)
    VALUES (?, ?, ?, ?);
  `;

  await db.run(addBookQuery, [
    title,
    author,
    price,
    pages,
  ]);

  response.send("Book Added Successfully");

});

// PUT API: Update a book
app.put("/books/:bookId/", async (request, response) => {
  const { bookId } = request.params;
  const { title, author, price, pages } = request.body;

  const updateBookQuery = `
    UPDATE book
    SET
      title = ?,
      author = ?,
      price = ?,
      pages = ?
    WHERE id = ?;
  `;

  const result = await db.run(updateBookQuery, [
    title,
    author,
    price,
    pages,
    bookId,
  ]);

  if (result.changes === 0) {
    response.status(404);
    response.send("Book not found");
  } else {
    response.send("Book Updated Successfully");
  }
});

// DELETE API: Delete a book
app.delete("/books/:bookId/", async (request, response) => {
  const { bookId } = request.params;

  const deleteBookQuery = `
    DELETE FROM book
    WHERE id = ?;
  `;

  const result = await db.run(deleteBookQuery, [bookId]);

  if (result.changes === 0) {
    response.status(404);
    response.send("Book not found");
  } else {
    response.send("Book Deleted Successfully");
  }
});

    app.listen(3000, () => {
      console.log("Server running at http://localhost:3000/");
    });

  } catch (error) {
    console.log(`Database Error: ${error.message}`);
    process.exit(1);
  }
};

initializeDBAndServer();
 
