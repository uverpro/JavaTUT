// const printDiv = () => {
//     const divOfInterest = document.getElementById('catch-me-if-you-can');
//     console.log(divOfInterest);
// };
// window.onload = printDiv;

// const printSpans = () => {
//     const spansOfInterest = document.querySelectorAll('span.cloudy');
//     console.log(spansOfInterest);
// };
// window.onload = printSpans;



// create addElement function
const addElement = () => {
    // create new h1 element
    const newElement = document.createElement('h1');
    // set new element's id to 'sleeping-giant'
    newElement.setAttribute('id', 'sleeping-giant');
    // create text node 'jell-o, burled!'
    const newContent = document.createTextNode('Jell-0, Burled!');
    // append content to element
    newElement.appendChild(newContent);
    // append element to document body
    document.body.appendChild(newElement);
};

// run script when page loads
window.onload = addElement;
