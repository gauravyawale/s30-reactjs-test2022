# s30-reactjs-test2022

# About this repo

This is a Test ReactJS Project which demonstrates the following:

1) Creating a user information named "Info" Component in React and exporting it to import in app.js file.
2) Using "useEffect hook" to call the "getUserApi" function in initial render by adding the empty array "[]" as dependancy to ensure it. 
3) Fetching api using axios to get the response data and store it using "useState hook".
4) Displaying the user response data with a refresh button.
5) Refresh button has "onClick" event listner, whenever it gets clicked, it will invoke the handleRefresh function which is calling the "getUserApi" function.
6) "getUserApi" will make a get request again and will provide the new response. As soon as the "useState" changes it will re-render the page without reloading it.
7) Using CSS for styling.

# Live Application URL

https://62bdc18cb13ee52f9e33f0dc--vocal-buttercream-d082de.netlify.app/

# How to clone and run it in local machine

Prerequisite:

Install Node JS into your local machine:
    Refer to https://nodejs.org/en/ to install nodejs.

1) Clone the project into local machine.
    Refer following link- https://www.jcchouinard.com/clone-github-repository-on-windows/
2) Install all the npm packages. Go into the project folder named "s30-reactjs-test2022" and type the following command to install all npm packages.
    $cd frontend
    $npm install
3) In order to run the application Type the following command.
    npm start
4) The application runs on localhost:3000
