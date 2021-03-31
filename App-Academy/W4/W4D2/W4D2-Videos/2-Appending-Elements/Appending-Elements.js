// create addElement function
const addElements = () => {
    // create new h1 element
    const newElement = document.createElement('h1');
    // set new element's id to 'sleeping-giant'
    newElement.setAttribute('id', 'sleeping-giant');
    // create text node 'jell-o, burled!'
    const newContent = document.createTextNode("Jell-0, Burled!");
    // append content to element
    newElement.appendChild(newContent);
    // append element to document body
    document.body.appendChild(newElement);
    // append a seceond element, a div, to the DOM
    const lastElement = document.createElement('div');
    // set the div's id to "lickable-frog"
    lastElement.setAttribute('id', 'lickable-frog');
    // append element to document.body

}

// run script when page loads
window.onload = addElement;
