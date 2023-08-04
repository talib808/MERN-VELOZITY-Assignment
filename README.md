### Movie Search and Favorites App
![App Screenshot](https://snipboard.io/m8f1Qy.jpg)
> • Live Recording - [Assignment](https://drive.google.com/file/d/1u2MHXuI0B1Kxqgidue4_SWLz8MAGN-oZ/view?usp=sharing)
- This is a web application that allows users to search for movies, mark them as favorites, and view their favorite movies.

### Features
-  Search for movies using keywords.
-  View search results with movie details.
-  Mark movies as favorites.
-  View a list of favorite movies.
-  Pagination

### Technologies Used
- React for building the user interface.
- React Router for handling navigation.
- Redux for state management.
- Express.js for creating the backend server.
- Axios for making HTTP requests.
- OMDB API for movie data.

## Getting Started
#### Prerequisites
* Node.js and npm (Node Package Manager) should be installed on your machine.
* Installation
* Clone the repository:
```
git clone <repository-url>
cd MERN-Velozity-Assignment
````
#### Install the dependencies for the frontend and backend:
```
cd frontend
npm install
```
```
cd ../backend
npm install
```
### Usage 
> Start the backend server:
```
cd backend
npm start
```
> In a new terminal window, start the React app:
```
cd frontend
npm start
```
> The application will be accessible at `http://localhost:3000`.

### Implementation

- The frontend is built using React, with components for search, movie cards, pagination, and favorites.
- React Router is used for navigation between different pages.
- Redux is used for state management, storing search results and favorites.
- Axios is used to make API requests to the OMDB API and the server.

### API Endpoints

> /api/movies/search: Search for movies using a query parameter.
> /api/movies/favorites: Add/remove movies from the user's favorites list.

### Contributing

> Contributions are welcome! If you find any issues or have suggestions for improvements, feel free to submit a pull request.
