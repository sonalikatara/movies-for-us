
# movies-for-us
# movies-for-us
# Project

A small web app for finding information about all of your favorite movies using the The Movie Database API
#Project Setup

#Technical Features
The UI uses css styles, Styled components and bootstrap library. I started wil css and added the other libraries as needed, ideally I would clean up the code to be more consistent in using the same library if possible.
## client
The client application is in the /client folder. 
It was created using create-react app and it uses ReactRouter for client side routing. it runs on port 3000.
## server
An express server running on the server at port 9000


#I nstallation and Launching 

1. download the project [https://github.com/sonalikatara/movies-for-us]https://github.com/sonalikatara/movies-for-us

2. at the root folder set the poort to run the server
   if you are running on a MAC book
   run
   $ yarn install 
   $ PORT=9000 yarn start
   or
   $ npm install
   $ PORT=9000 npm start

3. listen the server on http://localhost:9000
  you can test it by running  http://localhost:9000/movies

4. now to start the client app
   $ cd client

   $ yarn install
   $ yarn start
   or
   $ npm install
   $ npm start

 5.  listen the client on http://localhost:3000

I have not added my .env file to .gitignore so that it is available to you, the .env files must always be kept in the .gitignore folder.

#Features
=======

# Movie Time

A small web app for finding information about all of your favorite movies using the The Movie Database API
![PopularMovies](./client/gitImages/popularMovies.png)

## Project Setup

The UI uses css styles, Styled components and bootstrap library. I started wil css and added the other libraries as needed, ideally I would clean up the code to be more consistent in using the same library if possible.
### client
The client application is in the ` /client ` folder. 
It was created using create-react app and it uses ReactRouter for client side routing. it runs on port 3000.
### server
An express server running on the server at port 9000


## Installation and Launching 

1. Download the project 

2. At the root folder, install all the packages
  `  $ yarn install  `
  
   Then, set the server to run at port 9000.

   On a MAC this can be done by 
  ` $ PORT=9000 `

   Now, you can start the server by 
  `yarn start `
  
   If you are using npm 
  ```
   $ npm install
  
   $ PORT=9000 npm start
  ```

3. Listen to the server on http://localhost:9000
  you can test it by running  http://localhost:9000/movies

4. Now, to start the client app
  ` $ cd client `

  ```
   $ yarn install
   
   $ yarn start   
  ```  
   or
  ``` 
   $ npm install
   
   $ npm start
 ``` 
 
 5. Listen to the client on http://localhost:3000

I have not added my .env file to .gitignore so that it is available to you, the .env files must always be kept in the .gitignore folder.

## Features

1. When first loaded, the user sees a list of the most popular movies and a search bar.
2. A user is able to search for a movie by title in the search bar, and the matching results should show up in the list of movies. This list is responsive and has infinite scroll.
3. A user can click on a movie in the list and be taken to a page that displays more details for the movie (title, movie poster,ratings, categories, release date,overview, etc).
4. A user can see a list of similar movies on the movie page.
5. A user can also view a list of popular movies created by Walt Disney Studios ( search by production_company ). The backend API provides the capability to discover movies based on different parameters, so the client app can create more components to display movies queried on different properties.
6. A user can also view a list of popular movies of the Animation Genre ( search by genres ).
7. The app caches the popular movies, animation movies and disney movies in the browser’s local storage and uses it to display content when the server is slower offline.
 

## Server API's

` /movies  `          

returns list of popular movies it also takes an optional parameter `page` to get records of that page number

` /movie?id=:id   `  

returns details on a movie of id = :id

 ` /search?query=:query&page=:page  `     

returns search results for movies on `query` at `page` (default 1) 

 ` /discoverquery=:query&queryValue=:queryValue&page=:page`

Discover movies by different types of data like average rating, number of votes, genres and certifications. default values are sort_by populatity.desc . The client app is using it to pull data on Genre: Annimation and production_company :"Walt Disney Production' 

## Test
```
$ cd client
$ yarn test
```
I have only added one test case to check that the MovieLists are loading the MovieList control is called.
We can add tests to check that each route is loaded and the app is not crashing
More tests can be added to check that items in the list are unique and pulled from cache when the server is down or slow.
We can further check if the API is returning valid results

 
 ## Screen Shots
 ### Search
![SearchMovies](./client/gitImages/searchMovies.png)
### Movie Details
![MoviesDetails](./client/gitImages/movieDetails.png)
### Disney Movies
![DisneyMovies](./client/gitImages/disneyMovies.png)
>>>>>>> 5ce6a42bc1ad1df1d85155a4262c48757f14b0a7
