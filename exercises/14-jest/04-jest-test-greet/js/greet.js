/*********************
Jest testing - Greet()
*********************/


/*
1. Write a function called Greet(name) that takes an argument called name, and returns a simple greeting message. For example,
  if the name is “Elizabeth” the function should return “Hello, Elizabeth”.

2. Handle null values by introducing default. For example, when the name parameter is null, then the method should
return the string “Hello there!”.

3. Add shouting. When “name” is all uppercase, then the method should shout back to the user. For example, when the name is "JOSE"
then the method should return the string "HELLO JOSE!".

4. Handle two names as input. If the name parameter is an array containing two names, then both names should be greeted. For example, if the input parameter is [‘Jose’, ’Pep’], the method should
return the string: “Hello, Jose, Pep”.

5. Handle an arbitrary number of names as input. If the name parameter is an array of multiple names, all names must be greeted. For example, if the input parameter is [‘Alex’, ’Arsene’, ’Jose’, ’Zidane’], the method should
return the string: “Hello, Alex, Arsene, Jose, Zidane”
*/

function Greet(name) {
  if (name === null || name === undefined) return 'Hello there!';

  if (typeof name === typeof []) {
    if (name.length > 0) {
      let names = '';
      name.forEach((elm) => {
        names += ', ' + elm;
      });
      return 'Hello' + names;
    }
    return 'Hello there!';
  }

  if (name === name.toUpperCase()) {
    return 'HELLO ' + name + '!';
  }

  return 'Hello, ' + name;
}

module.exports = Greet