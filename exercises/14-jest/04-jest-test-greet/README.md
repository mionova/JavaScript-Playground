## Unit Testing in JavaScript with Jest

### Task ###

1. Write a function called Greet(name) that takes an argument called name, and returns a simple greeting message. For example, if the name is “Elizabeth” the function should return “Hello, Elizabeth”.

2. Handle null values by introducing a default. For example, when the name parameter is null, then the method should return the string “Hello there!”.

3. Add shouting. When “name” is all uppercase, then the method should shout back to the user. For example, when the name is "JOSE" then the method should return the string "HELLO JOSE!".

4. Handle two names as input. If the name parameter is an array containing two names, then both names should be greeted. For example, if the input parameter is [‘Jose’,’Pep’], the method should return the string: “Hello, Jose, Pep”.

5. Handle an arbitrary number of names as input. If the name parameter is an array of multiple names, all names must be greeted. For example, if the input parameter is [‘Alex’,’Arsene’,’Jose’,’Zidane’], the method should return the string: “Hello, Alex, Arsene, Jose, Zidane” 

### Notes on testing with Jest ###

Unit Testing in JavaScript with Jest requires Node.js to be globally installed in the system.

To start, run **npm init -y** in the project directory to initialize all the default values. This will create a package.json file to manage dependencies for working with Node in the project directory.

To install Jest, run **npm i --save-dev jest** 

When the installation is complete, go to package.json file and under scripts, change the value of “test” to “jest” (or "jest --coverage" for more detailed feedback in the terminal).

To verify that Jest has been properly installed (and to run the the actual tests later), run **npm test** 