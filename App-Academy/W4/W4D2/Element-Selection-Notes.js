// Hello, World DOMination: Element Selection And Placement
    // the usage and inner workings of the DOM API.

// Reference and manipulate the DOM via Javascript
// Update and create new DOM elements via Javascript
// Change CSS based on a DOM event

/********************************/

// What is DOM?
    // The Document Object Model, DOM, an object-oriented representation of HTML doc/web page
    // represented by objects or nodes
    // Allows developers to access the document via programming languages, like Javascript


// Referencing the DOM -
    // The DOM API is a tool used to reference, create, and update DOM elements
    // How to reference a DOM element in JS:
        // Assume the HTML file includes the following div:
        <div id="”catch-me-if-you-can”">HI!</div> // HTML (avaliable in the DOM)
        // With JS, reference the element by scanning the DOCUMENT and finding the ID
        // via document.getElementById(). Then, assign the reference to a variable:
        const divOfInterest = document.getElementById(“catch-me-if-you-can”) // JS

        // Referencing multiple objects
        // HTML:
        <span class="“cloudy”"></span>
        <span class="“cloudy”"></span>
        <span class="“cloudy”"></span>
        <span class="“cloudy”"></span>
        <span class="“cloudy”"></span>
        <span class="“cloudy”"></span>
        <span class="“cloudy”"></span>

        // JS:
        const cloudySpans = document.querySelectorAll("span.cloudy");
        // All 7 elements referenced and stored in a single variable

// .getElementById() references single element
// .querySelectorAll("span.cloudy") object.property? refs all elements w/ class name "cloudy"
    // A static NodeList. Can iterate over NodeList with .forEach()
    // Using .forEach() on a NodeList (JS):
    const cloudySpans = document.querySelectorAll("span.cloudy");

    cloudySpans.forEach(span => {
      console.log("Cloudy!");
    });


// Creating New DOM Elements -
    // Reference the JS file in the HEAD of the HTML file:
<!DOCTYPE html>
<html>
    <head>
        <title></title>
        <script type="text/javascript" src="example.js"></script>
    </head>
    <body></body>
</html>
// Create a new h1 element, assign an id, give content, and arrach to the body of HTML doc:
const addElement = () => {
    // create a new div element
    const newElement = document.createElement("h1");

    // set the h1's id
    newElement.setAttribute("id", "sleeping-giant");

    // and give it some content
    const newContent = document.createTextNode("Jell-O, Burled!");

    // add the text node to the newly created div
    newElement.appendChild(newContent);

    // add the newly created element and its content into the DOM
    document.body.appendChild(newElement);
  };
  // run script when page is loaded
  window.onload = addElement;

// Open HTML file in a browser, "Jell-O Burled!" on page.
// Use the browser tools to inspect the page:
// (right-click on the page and select “inspect”, or hotkeys fn + f12)
// Notice the new h1 with the id we gave it.

/*********************************************************************/

// Inserting Element in JS File and Script Block

// Create a second element, div with an id "lickable-frog"
// append it to the BODY
// Update the JS function to append a second element to the page

// JAVASCRIPT:
const addElements = () => {
    // create a new div element
    const newElement = document.createElement("h1");

    // set the h1's id
    newElement.setAttribute("id", "sleeping-giant");

    // and give it some content
    const newContent = document.createTextNode("Jell-O, Burled!");

    // add the text node to the newly created div
    newElement.appendChild(newContent);

    // add the newly created element and its content into the DOM
    document.body.appendChild(newElement);

    // append a second element to the DOM after the first one
    const lastElement = document.createElement("div");
    lastElement.setAttribute("id", "lickable-frog");
    document.body.appendChild(lastElement);
  };
  // run script when page is loaded
  window.onload = addElements;
// function now "addElements", plural, b/c we're appending two elements to the body
// the HTML file in the browser, inspect the page, there's two elements
// in the body, the h1, and the div



// Referencing a JS File vs. Using a Script Block -
// JS doesn't have to have a seperate file
// You can write a script block directly in the HTML file

<!DOCTYPE html>
<html>
  <head>
    <script type="text/javascript">
      {/* Javascript goes here! */}
    </script>
  </head>
  <body></body>
</html>
// Inside the block:
  // create 'ul' element with no id
  // create an 'li' element with the id 'dreamy-eyes'
  // add the 'li' as a child to the 'ul' element
  // add the 'ul' element as the first child of the 'body' element
<!DOCTYPE html>
<html>
    <head>
      <title>My Cool Website</title>
      <script type="text/javascript">
        const addListElement = () => {
          const listElement = document.createElement("ul");
          const listItem = document.createElement("li");
          listItem.setAttribute("id", "dreamy-eyes");
          listElement.appendChild(listItem);
          document.body.prepend(listElement);
        };
        window.onload = addListElement;
      </script>
    </head>
    <body></body>
</html>
// open HTML in browser, inspect the page, & notice the 'ul' & 'li' elements

/*****************************************************************************/

// Adding a CSS Class After DOM Load Event

// window.onload was used to run a function after the window page loaded
// with this you have to wait for stylesheets, images, and subframes.
// JS isn't dependent on them and can be ran before them
