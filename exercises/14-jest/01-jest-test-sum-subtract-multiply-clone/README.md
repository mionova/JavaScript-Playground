## Unit Testing in JavaScript with Jest

### Notes on testing with Jest ###

Unit Testing in JavaScript with Jest requires Node.js to be globally installed in the system.

To start, run **npm init -y** in the project directory to initialize all the default values. This will create a package.json file to manage dependencies for working with Node in the project directory.

To install Jest, run **npm i --save-dev jest** 

When the installation is complete, go to package.json file and under scripts, change the value of “test” to “jest”.

To verify that Jest has been properly installed (and to run the the actual tests later), run **npm test**.

[View Jest tests](https://github.com/mionova/JavaScript-Playground/tree/main/exercises/14-jest/01-jest-test-sum-subtract-multiply-clone/js)  

[View Jest test report](https://github.com/mionova/JavaScript-Playground/blob/main/exercises/14-jest/01-jest-test-sum-subtract-multiply-clone/coverage/lcov-report/index.html)  