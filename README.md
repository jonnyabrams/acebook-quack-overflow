# Quackbook

## Contributors

* [Jonny Abrams](https://github.com/jonnyabrams)
* [Gayathri Dharmavaram](https://github.com/gdrmvrm)
* [Valentina Maggio](https://github.com/valentina-maggio)
* [James Mooney](https://github.com/jam9304)
* [Chris Pinna](https://github.com/ChrisPinna)
* [Kenny Sweeney-Baird](https://github.com/KennySB1)

## Description

This is a clone of Facebook built using the Express.js framework for Node.js, with a MongoDB database and Handlebars templates for the front end. It was a group project as part of Makers Academy and we named our website Quackbook in honour of Quackie, the boot camp's anatine mascot.

## Technologies used

* JavaScript, HTML, CSS
* Express
* Nodemon
* Handlebars
* MongoDB
* Mongoose
* ESLint
* Jest
* Cypress

## How to run locally

1. Fork this repository
2. Clone your fork to your local machine
3. Use Node version 17.8.0 and install dependencies
   ```
   npm install
   ```
4. Install MongoDB
   ```
   brew tap mongodb/brew
   brew install mongodb-community@5.0
   ```
5. Start MongoDB
   ```
   brew services start mongodb-community@5.0
   ```
6. Start the server
   ```
   npm start
   ```
7. Browse to [http://127.0.0.1:3000](http://127.0.0.1:3000)

## Demo

#### Sign in page

![signin]()

#### Sign up page

![signup]()

#### Feed page

![feedpage]()

#### Post example

![post]()

#### Comments example

![comment]()

## Team approach

The overall goal was ensuring the team was having fun, felt confident, and were included throughout the process. 

* Standups every morning at 10:00
* Mini-retro after lunch 
* Retro at 5:30 every evening
* Pair programming throughout the entirety of the project
* Regular check-in with team members to make sure nobody was left behind
* Miro board for sharing project information
* Trello board for stopping pairs working on the same user story

### User Stories

#### Login

```
As a user, 
so that I can use Acebook,
I want to be able to sign up
```
```
As a user, 
so that I can use Acebook,
I want to be able to log in
```
```
As a user, 
so that the experience is seamless,
I want to be logged in automatically once I have signed up
```
```
As a user,
so I can choose how other users identify me,
I would like to be able to choose a username to display
```
#### Posts

```
As a user, 
so that so that I can express myself,
I would like to be able to publish a post
```
```
As a user, 
so that I can be informed,
I would like to be able to see a list of posts from others
```
```
As a user, 
so that I know who is posting,
I would like to see a username attached to each post
```
```
As a user, 
so that I know the context in which a post was made,
I would like to be able to see the time it was posted
```
```
As a user,
so that I can go back on what I posted,
I would like to be able to delete my posts
```

#### Interactions

```
As a user, so that I can express how I feel,
I would like to be able to like posts
```
```
As a user, 
so that I can go back on what I liked,
I would like to be able to unlike
```
### Further User Stories

```
As a user, 
so that I can have friends,
I would like to be able to send friend requests to other users
```
```
As a user, 
so that I can have friends,
I would like to be able to accept friend requests from other users
```

### MVP

* User can sign up, sign in and log out
* User can post a post and delete it
* User can see all posts in reverse chronological order
* User can like a post

### Wireframes

![signin](https://github.com/jonnyabrams/acebook-quack-overflow/blob/final-readme/public/images/screenshots/signin-wireframe.png)
![signup](https://github.com/jonnyabrams/acebook-quack-overflow/blob/final-readme/public/images/screenshots/signup-wireframe.png)
![feeds](https://github.com/jonnyabrams/acebook-quack-overflow/blob/final-readme/public/images/screenshots/home-wireframe.png)

### Edge cases

* Sign up with invalid input
* Sign in with invalid input
* Only user that creates post can delete post
* 

## Future improvements

* User can see only friends posts on feeds page
* Use cloud server for database
* Deploy website on Heroku

### How to run the tests

* Run all tests:
  ```
  npm test
  ```
* Run separate tests for either linting, unit or integration features:
  ```
  npm run lint             
  npm run test:unit        
  npm run test:integration  
  ```

The server must be running locally with test configuration for the
integration tests to pass.

```
npm run start:test
```