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
