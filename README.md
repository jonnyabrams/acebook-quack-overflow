# Quackbook

## Contributors



## Description

This is a clone of Facebook.

## Technologies used

* JavaScript
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
2. Rename your fork to `acebook-<team name>`
3. Clone your fork to your local machine
4. Install Node.js dependencies
   ```
   npm install
   ```
5. Install an ESLint plugin for your editor. For example: [linter-eslint](https://github.com/AtomLinter/linter-eslint) for Atom.
6. Install MongoDB
   ```
   brew tap mongodb/brew
   brew install mongodb-community@4.4
   ```
7. Start MongoDB
   ```
   brew services start mongodb-community@5.0
   ```



1. Install Node Version Manager (NVM)
   ```
   brew install nvm
   ```
   Then follow the instructions to update your `~/.bash_profile`.
2. Open a new terminal
3. Install the latest long term support (LTS) version of [Node.js](https://nodejs.org/en/), currently `16.14.0`.
   ```
   nvm install 16
   ```

   1. Start the server
   ```
   npm start
   ```
2. Browse to [http://127.0.0.1:3000](http://127.0.0.1:3000)




## Demo



## Features



## Building process



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
add the extra client requests
```

### MVP



### Wireframing



### Edge cases



## Future improvements





### How to run the tests

- Run all tests:
  ```
  npm test
  ```
- Run separate tests for either linting, unit or integration features:
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








