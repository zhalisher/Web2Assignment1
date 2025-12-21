# Movie Library

## Project Description
Movie Library is an online platform where users can browse films and TV series, watch content, leave reviews, and create personal lists of favorite movies.
Our platform will provide information about each film including things like plot descriptions, cast, genre, and reviews.

## Team Members
* Alisher - Group SE-2429 - Frontend & Backend, HTML, CSS.
* Alexander - Group SE-2429 - Frontend & Backend, HTML, CSS.
* Daryn - Group SE-2429 - Frontend, HTML.
* Arlan - Group SE-2429 - Backend, Node.js.

## Topic explanation
Our web application is aimed at creating reliable movie streaming and review platform.
Users will be able to:
* Watch content directly on the platform
* Read and write reviews for films
* Access detailed information about each film (cast, genre, synopsis, release year and etc)
* Create personalized watchlists and mark favorite movies

## Installation & Setup Instructions
### Prerequisites
* Node.js
* npm

### Installation Steps
1. Extract the project files.
2. Go to the project directory.
3. Install dependencies.
<img width="100" height="20" alt="image" src="https://github.com/user-attachments/assets/a3302c7e-0248-4737-a30e-27022d59f787" />

4. Start the server.
<img width="125" height="20" alt="image" src="https://github.com/user-attachments/assets/b3b1f18f-97fc-43ae-92f5-280a010b0969" />

5. Open your browser and go to http://localhost:3000

## Available routes 
* / main page 
* /index.html main page (to move from other pages to main with navigation)
* /about.html about us page where information about the team and project is displayed
* /contact.html contact us page where user can send a message
* /test.html a test page created to check if the message from contact.html were sent successfully (temporary)
* /randomroute if user types for random route that doesnt exist, error message 404 would occure

## Contact form details
The contact page includes 
* Name input
* Email input
* Message textarea 
* Submit button
* When the data is submitted data would be sent thourgh POST method and it would lead to text.html page where user sees that his message was successfuly sent
The full data of name, email and message stored in console (temporary) 
<img width="1903" height="891" alt="изображение" src="https://github.com/user-attachments/assets/6ac76092-8955-4d02-a788-5460bad6c849" />


## Roadmap of future steps

We aligned our roadmap with the course syllabus: starting from Express setup and frontend basics, then server-side handling, APIs, and finally database and CRUD operations

Week 1 (done) : 
  Introduction to Web Technologies: 
    project setup, Express server, project structure, landing page (frontend basics)

Week 2: Introduction to Backend Web Development:
  framework basics, backend components, MVC concept, forms + POST routes (register & login pages)
  
Week 3 : Working with Server Side:
  handle HTTP requests/responses, routing logic, basic server-side processing and validation
  
Week 4: Introduction to APIs:
  understand APIs, work with JSON, integrate external movie APIs (genre, description, cast &crew, etc)
  
Week 5: Mid-term:
  working with databases, database fundamentals, ER modeling, ORM usage, CRUD operations (users, movies/TV series, reviews, description)
