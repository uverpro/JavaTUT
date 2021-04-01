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
// an object like a large image, anything that takes a long time to load before
// the JS is ran, may make the user experience feel clunky and slow
// DOMContentLoaded is the method to prevent this

// The DOMContentLoaded event fires when the initial HTML document
// has been completely loaded and parsed, without waiting for stylesheets,
// images, and subframes to finish loading.

// DOMContentLoaded used to add CSS classes to page elements immediately after they are loaded.
// add "i-got-loaded" to the 'body' element when the window fires the DOMContentLoaded event
// can be done in the script block or in an external JS file

// JS:
window.addEventListener("DOMContentLoaded", event => {
    document.body.className = "i-got-loaded";
  });
// inspecting the page on the browser, notice: the 'body' element has class of "i-got-loaded"


/********************************************************************************************/


// Console.log, Element.innerHTML, and the Date Object
    // console.log can to print element values.
    // Element.innerHTML fills in the HTML of a DOM element.


// Console Logging Element Values
    // Console.log is a useful debugging tool

// HTML:
<!DOCTYPE html>
<html>
  <head> </head>
  <body>
    <ul id="your-best-friend">
      <li>Has your back</li>
      <li>Gives you support</li>
      <li>Actively listens to you</li>
      <li>Lends a helping hand</li>
      <li>Cheers you up when you're down</li>
      <li>Celebrates important moments with you</li>
    </ul>
  </body>
</html>

// Above: an id references the 'ul' element
    // PREVIOUSLY document.querySelectorAll() stored multiple elements w/ same class name
        // in a single variable, as a NodeList
    // Above: there's only on id for the parent element.
        // Can refence the parent element via its id to get access to the content of its children
// JS:
window.addEventListener("DOMContentLoaded", event => {
    const parent = document.getElementById("your-best-friend");
    const childNodes = parent.childNodes;
    for (let value of childNodes.values()) {
      console.log(value);
    }
});
// In browser: dev tools, open console, see the values of each 'li' have been printed



// Using Element.innerHTML
// In addition to referencing DOM elements via id or class name and
    // appending new element to existing DOM elements
// the inner HTML property can be used to get or set the HTML or XML markup contained
    // within an element

// Create a 'ul' element with the id "your-worst-enemy" w/ no children
// Add JS to construct a string that contains six 'li' tags, each containing a random number
// Set the inner HTML property of 'ul#your-worst-enemy' to that string
// HTML
<!DOCTYPE html>
<html>
  <head>
    <script type="text/javascript" src="example.js"></script>
  </head>
  <body>
    <ul id="your-worst-enemy"></ul>
  </body>
</html>
// Javascript
// generate a random number for each list item
const getRandomInt = max => {
    return Math.floor(Math.random() * Math.floor(max));
  };

  // listen for DOM ready event
  window.addEventListener("DOMContentLoaded", event => {
    // push 6 LI elements into an array and join
    const liArr = [];
    for (let i = 0; i < 6; i++) {
      liArr.push("<li>" + getRandomInt(10) + "</li>");
    }
    const liString = liArr.join(" ");

    // insert string into the DOM using innerHTML
    const listElement = document.getElementById("your-worst-enemy");
    listElement.innerHTML = liString;
  });
// Browser Page: six net list items on the page, each containing a random number


// Inserting a Date Object into the DOM

// Start with HTML doc containing an empty title element
// Create new element and append to title? Or use innerHTML to set the HTML of the title element?
    // Since no need to create new element, no care if it appears last, use latter
//HTML
<title id="title"></title>
// JS file w/ Date constructor to initiate a new Date object.
const date = new Date();
// Javascript

// What the DOM is and how we can access it
// How to access DOM elements using document.getElementById() and document.querySelectorAll()
// How to create new elements with document.createElement() and document.createTextNode,
// and append them to existing DOM elements with Element.appendChild()
// The difference between window.onload and DOMContentLoaded
// How to access children nodes with NodeList.childNodes
// Updating DOM elements with Element.innerHTML
// The Javascript Date object
