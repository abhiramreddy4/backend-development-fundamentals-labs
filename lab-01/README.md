
# Lab 1 — Node.js and Express Server

## Student Details

- **Name:** DHONI ABHIRAM REDDY
- **Section:** CSE (GEN-AI) 2A
- **Subject:** Backend Development Fundamentals
- **University:** Aurora Deemed-to-be University

## Objective

To create a basic HTTP server using Node.js and build a web server using Express.js.

## Technologies Used

- Node.js
- Express.js
- JavaScript
- Visual Studio Code

## Live Deployment

**Deployment Status:** Live

**Render URL:** https://backend-development-fundamentals-labs-e4cd.onrender.com

### Live Endpoints

- Home: https://backend-development-fundamentals-labs-e4cd.onrender.com/
- About: https://backend-development-fundamentals-labs-e4cd.onrender.com/about
- Time: https://backend-development-fundamentals-labs-e4cd.onrender.com/time
- Unknown: https://backend-development-fundamentals-labs-e4cd.onrender.com/unknown

## Project Setup

1. Install Node.js.
2. Open the project folder in VS Code.
3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the Node.js HTTP server:

   ```bash
   node server.js
   ```

5. Start the Express server:

   ```bash
   node app.js
   ```

## API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| GET | `/` | Home page |
| GET | `/about` | Student details |
| GET | `/time` | Current date and time |
| GET | `/unknown` | 404 error response |

## Screenshots

### 1. Node.js HTTP Server
![Node HTTP Server](./SCREEN%20SHORTS/node-http-server.png.png)

### 2. Express Home
![Express Home](./SCREEN%20SHORTS/express-home.png.png)

### 3. Express About
![Express About](./SCREEN%20SHORTS/express-about.png.png)

### 4. Express Time
![Express Time](./SCREEN%20SHORTS/express-time.png.png)

### 5. Express 404
![Express 404](./SCREEN%20SHORTS/express-404.png.png)

## Conclusion

Successfully created and tested a basic HTTP server using Node.js and an Express server with multiple routes, including a custom 404 error handler.