# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm install`

Installs all the required packages in node_modules folder.

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm run cypress:browser`

Launches the test runner in the interactive watch mode.
If you will run with localhost:3000, test will be running fine.
If you will run with another port, please follow steps :

1.  Go to cypress.config.js : line 13
    Replace baseUrl with your current localhost port number.
    For example, ( "http://localhost:3000" to "http://localhost:3002")

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!
