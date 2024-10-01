Netflix Clone:
    A responsive web application that mimics the basic features of Netflix, allowing users to browse movies and TV shows, play trailers, and view show details. This project is built using modern web development technologies.

Features:
    User Authentication: Sign up and log in with authentication using JWT tokens.
    Movie Browsing: Browse movies and TV shows by categories.
    Movie Trailers: Play trailers using the embedded YouTube player.
    Search Functionality: Search for movies and TV shows by title.

Backend:
    Node.js - Backend environment for running JavaScript.
    Express.js - A web framework for Node.js to handle server-side routing.
    MongoDB - NoSQL database for storing user data and movie lists.
    JWT (JSON Web Tokens) - For user authentication.

APIs:
    TMDB API - Used to fetch movie and TV show data (The Movie Database API).

Project Setup
    Prerequisites:
    Node.js (v14 or higher)
    MongoDB (local or cloud instance)
    TMDB and YouTube API keys

1. Installation:
    Install dependencies:npm install

2. Create a .env file in the root directory and add your environment variables:
    MONGO_URL = mongodb+srv://vibhutikothiya259:QY1yI4TOiSmUepAj@cluster0.3cy8y.mongodb.net/netflix_clone

    PORT = 5050

    JWT_SECRET = my_relly_hard_to_decode_secret 

    TMDB_API_KEY = eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5NmM5NzIyZGYwZTJhM2IxY2ZkMGQ4NzJkNDFhY2NhNiIsIm5iZiI6MTcyNzc0MjIxOC4zMjY1Mywic3ViIjoiNjZmYjNmYTBkODA2NDE2NWJkZjE2MDNmIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.8PghLwzH0wdQqwXLhObHysnHYxYYoj28CGEN8TXwUWM

 3. Run the server: npm start  


Dependencies:
    Backend:
    "axios": "^1.7.7",
    "bcryptjs": "^2.4.3",
    "cookie-parser": "^1.4.6",
    "dotenv": "^16.4.5",
    "express": "^4.21.0",
    "jsonwebtoken": "^9.0.2",
    "mongoose": "^8.7.0"
    "devDependencies": "nodemon": "^3.1.7"


