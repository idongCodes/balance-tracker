// Function to create and output elements
const createElement = (elType, id, className) => {
    const el = document.createElement(`${elType}`);
    if (id) el.id = id;
    if (className) el.className = className;
    return el;
};

// Function to set element id
const setIdName = id => id;

// Function to set element class
const setClassName = className => className;

// Function to append parent/child elements
const appendElement = (parent, child) => {
    if (parent && child) {
        parent.appendChild(child);
    }
};

// Function that gets value from input element
const getInput = inputEl => inputEl.value;

// Function that sets input value as current value
const setCurrVal = getInput => ;

// Fuction to add to current value
const addToCurrVal = () => setCurrVal + ;

// Function to subtract from current value
const subFromCurrVal = () => {};
const title = document.querySelector("#title");



title.textContent = "Balance Tracker";

/*  
1) Create input emelent conatiner
2) Create input element label
3) Create input element
4) Append input element container to main element
5) Create description variable
6) Set <p> text to description variable
7) Set <h1> text to title
*/