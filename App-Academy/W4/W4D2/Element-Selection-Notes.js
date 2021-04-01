// What is DOM?
    // The Document Object Model, DOM, an object-oriented representation of HTML doc/web page
    // represented by objects or nodes
    // Allows developers to access the document via programming languages, like Javascript


// Referencing the DOM
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
// .querySelectorAll("span.cloudy") (object.property?) references all elements 
