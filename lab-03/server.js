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

    // Create book table if it does not exist
    await db.exec(`
      CREATE TABLE IF NOT EXISTS book (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        title TEXT,
        author TEXT,
        price REAL,
        pages INTEGER
      );
    `);

    
    // GET API: Retrieve books with search, sorting, pagination and price filtering
    app.get("/books/", async (request, response) => {
      const {
        search_q = "",
        order_by = "id",
        order = "ASC",
        limit = "10",
        offset = "0",
        min_price,
        max_price,
      } = request.query;

      // Validate sorting options
      const allowedColumns = ["id", "title", "author", "price", "pages"];

      if (!allowedColumns.includes(order_by)) {
        return response.status(400).json({
          message: "Invalid order_by column",
        });
      }

      if (!["ASC", "DESC"].includes(order.toUpperCase())) {
        return response.status(400).json({
          message: "Order must be ASC or DESC",
        });
      }

      // Validate limit and offset
      if (
        !Number.isInteger(Number(limit)) ||
        Number(limit) < 1 ||
        !Number.isInteger(Number(offset)) ||
        Number(offset) < 0
      ) {
        return response.status(400).json({
          message: "Invalid limit or offset",
        });
      }

      // Validate price filters
      if (
        (min_price !== undefined && !Number.isFinite(Number(min_price))) ||
        (max_price !== undefined && !Number.isFinite(Number(max_price)))
      ) {
        return response.status(400).json({
          message: "Price must be numeric",
        });
      }

      if (
        min_price !== undefined &&
        max_price !== undefined &&
        Number(min_price) > Number(max_price)
      ) {
        return response.status(400).json({
          message: "Minimum price cannot exceed maximum price",
        });
      }

      let conditions = [];
      let parameters = [];

      // Search books by title
      if (search_q !== "") {
        conditions.push("title LIKE ?");
        parameters.push(`%${search_q}%`);
      }

      // Filter by minimum price
      if (min_price !== undefined) {
        conditions.push("price >= ?");
        parameters.push(Number(min_price));
      }

      // Filter by maximum price
      if (max_price !== undefined) {
        conditions.push("price <= ?");
        parameters.push(Number(max_price));
      }

      let getBooksQuery = `
        SELECT *
        FROM book
      `;

      if (conditions.length > 0) {
        getBooksQuery += ` WHERE ${conditions.join(" AND ")}`;
      }

      getBooksQuery += `
        ORDER BY ${order_by} ${order.toUpperCase()}
        LIMIT ? OFFSET ?;
      `;

      parameters.push(Number(limit), Number(offset));

      const booksArray = await db.all(getBooksQuery, parameters);

      response.status(200).json(booksArray);
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

// POST API: Add a new book with validation
app.post("/books/", async (request, response) => {
  const { title, author, price, pages } = request.body;

  if (!title || title.trim() === "") {
    return response.status(400).json({
      message: "Title is required",
    });
  }

  if (!author || author.trim() === "") {
    return response.status(400).json({
      message: "Author is required",
    });
  }

  if (
    price === undefined ||
    price === null ||
    price === "" ||
    !Number.isFinite(Number(price))
  ) {
    return response.status(400).json({
      message: "Price must be a valid number",
    });
  }

  if (Number(price) <= 0) {
  return response.status(400).json({
    message: "Price must be greater than zero",
  });
}

  const addBookQuery = `
    INSERT INTO book (title, author, price, pages)
    VALUES (?, ?, ?, ?);
  `;

  await db.run(addBookQuery, [
    title,
    author,
    Number(price),
    pages,
  ]);

  response.status(201).json({
    message: "Book Added Successfully",
  });
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

      const PORT = process.env.PORT || 3000;

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
});

  } catch (error) {
    console.log(`DB Error: ${error.message}`);
  }
};

initializeDBAndServer();