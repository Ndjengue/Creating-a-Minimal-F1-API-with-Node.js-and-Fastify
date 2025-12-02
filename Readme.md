# Minimal Formula 1 API --- Node.js + Fastify

A lightweight REST API built with Node.js and Fastify, designed to
demonstrate essential API concepts using Formula 1 data.\
This project exposes endpoints for teams, drivers, and driver lookup by
ID, including CORS configuration for broader access.

## 📌 Features

-   Fast and lightweight using Fastify
-   CORS enabled with @fastify/cors
-   Endpoints for:
    -   Listing all teams
    -   Listing all drivers
    -   Fetching a driver by ID
-   Simple and clean architecture for learning purposes

## 📂 Project Structure

    src/
     └── index.ts (or index.js)

## 🚀 Installation

Ensure you have Node.js v18+ installed.

``` bash
npm install
```

## ▶️ Running the Server

``` bash
npm run dev
```

Or, running directly:

``` bash
node index.js
```

Server starts on:

    http://localhost:3333

## 📡 API Endpoints

### GET /teams

Returns all Formula 1 teams.

### GET /drivers

Returns all registered drivers.

### GET /driver/:id

Returns a specific driver by ID.

If not found:

``` json
{ "message": "Driver Not Found" }
```

## 🧪 Example with cURL

``` bash
curl http://localhost:3333/drivers
```

## 📜 Technologies Used

-   Node.js
-   Fastify
-   @fastify/cors
-   TypeScript (optional)

## 📖 License

MIT
