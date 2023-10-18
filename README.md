# ToDoListApp

Steps:

1. HTML & CSS Starte code

   - div container
     - h1 - Todo List
     - input type text
     - button - disabled by default

2. The "Add" must be enabled when user types in input

   - if the user clears the input, the button should be disabled again
   - create 2 variables containing the input and button elements
   - add an event listener for input element(try using 'input' event - if doesn't work properly try using 'keyup' event )
   - disabled property will be set to true when input value lenght > 0 otherwise false

3. The user should be able to add a new todo to the list

   - event listener - addButton
   - create li element containing value from input
   - append li element to list(ul)
   - add styles for li
   - clear selection from input

4. The use should be able to delete a todo
   - the creation of li element must include a button with X content
   - an event listener must be added when the button is created
   - the li that contains the button must be removed when delete button is clicked
