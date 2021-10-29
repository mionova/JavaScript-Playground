/**************
DOM: To-do-list
**************/

/*
Task:
Create a function called addItem which takes a user's input and appends it to the browser's DOM, displaying it as a to-do list item.
*/

function addItem() {
  const inputValue = document.getElementById('myInput').value;
  const t = document.createTextNode(inputValue);
  const li = document.createElement('li');
  li.appendChild(t);
  document.getElementById('myTODOs').appendChild(li);
}