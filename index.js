/* 
- create function that creates elements
- create main container
- give main container an id
- append main element to body
- create header element
- create title for header
- add instructions element
- add form container
- create form header
- create form header h3 and h2
- create form element
- create form group sections
- create both labels
- set label for attributes
- set label text
- create inputs and set attributes (type, id, name, required)
- create button element
- add button attributes
- add button text
- append button to DOM
*/

const createEl = (elementType) => { 
    return document.createElement(elementType);;
};

const main = createEl('section');
const header = createEl('header');
const title = createEl('h1');
const instructions = createEl('h3');
const formContainer = createEl('section');
const formHeader = createEl('section');
const formTitle = createEl('h3');
const balance = createEl('h2');
const form = createEl('form');
const formGroupOne = createEl('section');
const formGroupTwo = createEl('section');
const addLabel = createEl('label');
const subLabel = createEl('label');
const addInput = createEl('input');
const subInput = createEl('input');
const updateBalance = createEl('button');

main.setAttribute('id', 'main-container');
header.setAttribute('id', 'header');
title.setAttribute('class', 'title');
instructions.setAttribute('id', 'instructions');
formContainer.setAttribute('class', 'form-container');
formHeader.setAttribute('class', 'form-header');
formTitle.setAttribute('class', 'form-title');
balance.setAttribute('class', 'balance');
form.setAttribute('id', 'form');
formGroupOne.setAttribute('class', 'form-group');
formGroupTwo.setAttribute('class', 'form-group');
addLabel.setAttribute('for', 'addition');
subLabel.setAttribute('for', 'subtraction');
addInput.setAttribute('type', 'number');
addInput.setAttribute('id', 'addition');
addInput.setAttribute('name', 'addition');
addInput.setAttribute('required', 'required');
subInput.setAttribute('type', 'number');
subInput.setAttribute('id', 'subtraction');
subInput.setAttribute('name', 'subtraction');
subInput.setAttribute('required', 'required');
updateBalance.setAttribute('type', 'button');
updateBalance.setAttribute('class', 'update-btn');
updateBalance.setAttribute('onclick', 'updBal()');

header.textContent = "Header Element";
main.textContent = "This is the main container that will hold everthing.";
title.textContent = "Balance Tracker";
instructions.textContent = "Add how much was taken from or added to the balance, in the form below.";
formContainer.textContent = "This will hold the form";
formHeader.textContent = "This will hold form Header";
formTitle.textContent = "Current Balance:";
balance.textContent = `$${5005.47}`;
form.textContent = "This is the form";
formGroupOne.textContent = "Form group one";
formGroupTwo.textContent = "Form group two";
addLabel.textContent = "How much did we deposit?";
subLabel.textContent = "How much did we withdraw?";
updateBalance.textContent = "Update Balance";

main.appendChild(header);
document.body.appendChild(main);
header.appendChild(title);
header.appendChild(instructions);
main.appendChild(formContainer);
formContainer.appendChild(formHeader);
formHeader.appendChild(formTitle);
formHeader.appendChild(balance);
formContainer.appendChild(form);
form.appendChild(formGroupOne);
form.appendChild(formGroupTwo);
formGroupOne.appendChild(addLabel);
formGroupTwo.appendChild(subLabel)
formGroupOne.appendChild(addInput);
formGroupTwo.appendChild(subInput);
form.appendChild(updateBalance);