# React App with Formik Form and Validation

## Overview

This React App is designed to demonstrate the use of Formik Forms and Validation. Formik is a library that helps you create forms in React with ease. It provides a powerful set of tools for managing form state, validating user input, and submitting data to an API. This app will show you how to create a simple form with Formik and validate user input using Yup validation schema. You will also learn how to handle form submission and display errors when necessary. With this app, you can quickly build forms that are both user-friendly and secure.

This was created to submit for an assignment in Module 13 of the MIT xPRO Full Stack Development course (Fall 2022).

## Details

Details of the assignment are listed below.

> **In this activity, your task is to create a login form with validation using Formik.**
>
> Your form should include the following:
>
> - An Email field
> - A Password field
> - A Submit Button
>
> Your form should implement the following input validation rules:
>
> - If the username or password inputs are empty, display the message "Field required" under the text input.
> - If the username is not in an email format, display the message "Username should be an email" under the text input.
> - If the username and password pass the validation above, then display the message "Login Successful" in an `alert` box.
>
> Your form should implement the following specific details:
>
> - The email input field should have an id of `emailField`
> - The email error message should be within a `div` element that has an id of `emailError`
> - The password input field should have an id of `pswField`
> - The password error message should be within a `div` element that has an id of `pswError`
> - The submit button should have an id of `submitBtn`
>
> The starter code can be found inside `src/App.js`.

## How to Run

[Click this link](https://github.com/Danny-Nunez/React-Formik-Login-Form) to view the app live on GitHub.

This React app has been deployed to GitHub Pages using `gh-pages` by following the information provided [here](https://github.com/gitname/react-gh-pages).

It is viewable on the web without having to download and run it locally. However, the source code is also provided if you choose to do so. More information is below.

## React Toolchains

This project was bootstrapped with [**Create React App**](https://reactjs.org/docs/create-a-new-react-app.html).
You can learn more in the **Create React App documentation** [here](https://facebook.github.io/create-react-app/docs/getting-started) or [here](https://github.com/facebook/create-react-app).

To learn React, check out the [React documentation](https://reactjs.org/).

### Available Scripts

<details>
<summary>In the project directory, you can run:</summary>

#### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

#### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

#### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

</details>
