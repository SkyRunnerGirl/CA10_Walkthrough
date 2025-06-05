/* What do I need?
1. My button, on click, should add info to table
2. How do I get info? - from the <input> fields and their value
    - Need: firstName, lastName, favoriteColor - store in a variable
3. Find a way to get the # value
    - Need: way to get value from the form when we submit, then append the info to table
    - Need: get values with getElementById(), so we need IDs on values
4. eventListener on button

Notes:
- buttons inside a form have a default action of refreshing the page when you click them
- .preventDefault is often needed for buttons
*/

const formButton = document.getElementById('formSubmit');

let number = 1;

formButton.addEventListener('click', (event) => {
    event.preventDefault()

    //variables to hold values of form
    let firstName = document.getElementById('firstName').value;
    let lastName = document.getElementById('lastName').value;
    let favoriteColor = document.getElementById('favoriteColor').value;

    //create a <tr> node to append to form
    let newTableRow = document.createElement('tr');

    let numberNode = document.createElement('td');
    numberNode.innerHTML = number;
    newTableRow.append(numberNode);

    let firstNameNode = document.createElement('td');
    firstNameNode.innerHTML = firstName;
    newTableRow.append(firstNameNode);

    let lastNameNode = document.createElement('td');
    lastNameNode.innerHTML = lastName;
    newTableRow.append(lastNameNode);

    let favoriteColorNode = document.createElement('td');
    favoriteColorNode.innerHTML = favoriteColor;
    newTableRow.append(favoriteColorNode);

    document.getElementById('tBody').appendChild(newTableRow);

    document.getElementById('firstName').value = '';
    document.getElementById('lastName').value = '';
    document.getElementById('favoriteColor').value = '';

    number++
})