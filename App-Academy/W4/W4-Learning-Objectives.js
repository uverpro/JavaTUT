/************************************************************************/
// D1 - Browser Basics Lesson Learning Objectives
/************************************************************************/

// 1. Explain the difference between the BOM (browser object model)
    // and the DOM(document object model).

    `The DOM is the API used to access the elements inside the document`

/*(document)
    |__(Root element: <html>)
        |__(Element: <head>)
        |    |__(Element: <title>)
        |        |__(Text: "My title")
        |__(Element: <body>)
        |    |__(Element: <h1>)
        |        |__(Text: "A heading")
        |__(Element: <a>)---(Attribute: href)
            |__(Text: "Link text")
    */

    // Interface that allows us to dynamically access and update the content, structure
        // and style of a website
    // JS is the client-side scripting language that connects to the DOM in a browser
    // Defines HTML elements as objects and gives them properties, methods, and events

    `The BOM is a larger representation of everything provided by the browser,
     including the current document`

    /*                                  (window)
            ________________________________|_____________________________________
            |             |                 |                   |                 |
        (document)    (history)         (screen)            (navigator)        (location)
    */
    // Larger representation of everything provided by the browser, including the current
        // document, location, history, frame, and any other functionality the browser
        // may expose to JS.


// 2. Given a diagram of all the different parts of the browser, identify each part.

`
     User Interface =====\
           |             |
     Browser Engine======|====Data Persistence
             |           |
     Rendering Engine    |
       |    |    |       |
Networking  |   UI Backend
        Javascript
        Interpretor`

//  i. The User Interface
    // Everything the user interacts with, such as the address bar, back/forward buttons,
        //bookmarks, etc..
    // Everything except page content

//  ii. Browser Engine
    // Manages interactions between the User Interface and the rendering engine

//  iii. Render Engine
    // Displays the requested page content
    // Parses HTML and uses CSS to build render tree and display content
    // Constructs the DOM(Document Object Model)
    // Not all browsers use the same rendering engine
        // Chrome(Blink), Safari(Webkit)

// iv. Networking
    // Sends network calls like http requests to a server
    // Asks for images, docs, and other resources that compose the page

// v. JavaScript Interpreter
    // Parses and executes JS code
        // Chrome(V8), Safari(JavaScriptCore)

// vi. UI Backend
    // Used for drawing basic widgets like checkboxes, inputs, etc..
    // Uses the UI methods of the underlying OS

// vii. Data Storage
    // The persistence of data in the browser via:
        // A. Cookies
            // Can be read client-side as well as server-side
            // Can only be 4kb in size
            // Purposes:
                // Session management - Logins, shopping carts, game scores
                // Personalization - User preferences, themes, and settings
                // Tracking - Recording and analyzing human behavior
        // B. Web Storage:
            // Session Storage:
                // Maintains a separate storage area for each web address that is available
                    // for user for the duration their session, including reloads and restores
                // Data never transferred to the server
                // Storage limit larger than a cookie (5MB max)
            // Local Storage
                // Does the same thing as Session Storage, excepts persists even when the browser
                    //  is closed and reopened
                // No expiration date and only gets cleared through JS, or clearing the browser
                    //  cache / locally stored data
                // Maximum storage of all options


// 3. Use the Window API to change the innerHeight of a user's window.

// Open New Window
const newWindow = window.open(
    'https://github.com',
    'GitHub',
    'width=100, height=100'
  );

  // Resize Window
  newWindow.resizeTo(500, 500);


// 4. Identify the context of anonymous functions running in the browser (the window).

`The Window Object:
    Represents an open window in a browser
    The global object in the browser
    The root of the DOM (contains document property used to reference DOM)
    Show in Browser`

// 5. Given a JS file and an HTML file, use a script tag to import the JS file
    // and execute the code therein when all the elements on the page load.

    // HTML:
    // <!DOCTYPE html>
    // <html lang="en">
    // <head>
    //     <meta charset="UTF-8">
    //     <meta http-equiv="X-UA-Compatible" content="IE=edge">
    //     <meta name="viewport" content="width=device-width, initial-scale=1.0">

    //     <!-- What Not To Do - Script loads before rest of page exist -->
    //     <!-- <script type="text/javascript" src="./index.js"></script> -->

    //     <!-- Method 1: Use async and defer to delay execution of script -->
    //     <!-- - defer is compatible with more browsers
    //          - async is in newer browsers
    //          - You can combine them for best results                    -->
    //     <script defer type="text/javascript" src="./index.js"></script>
    //     <script async defer type="text/javascript" src="./index.js"></script>
    //     <title>Document</title>
    // </head>
    // <body>

    // </body>

    // <!-- Method 4: Place script below html it is dependent on -->
    // <!-- <script type="text/javascript" src="./index.js"></script> -->
    // </html>

    // JS
    // Method 2:  Run script after the DOM has loaded
document.addEventListener('DOMContentLoaded', () => {
  console.log(`DOMContentLoaded fired`);
  console.log(document.getElementById('my-body')).id;
});

// Method 3: Handler function invoked after the page is loaded with all resources
window.onload = () => {
  console.log(`window.onload has fired. Everything ready!`);
  console.log(document.getElementById('my-body').id);
};

// What Not To Do:
let bodyId = window.document.getElementById('my-body').id; // my-body
console.log(bodyId);


// 6. Explain the browser's main role in the request/response cycle.



// 7. Identify, examine, and delete cookies for a given website using the Chrome Developer Tools.



/************************************************************************/
// D2 - Element Selection Lesson Learning Objectives
/************************************************************************/


// 1. Write a JavaScript statement that selects one or more elements by their attributes or tags.



// 2. Compare and contrast NodeList with HTMLCollection.



// 3. Create and append a child HTML element with specified attributes
// to a parent HTML element using JavaScript.



// 4. Use a string to construct HTML elements with .innerHTML.



// 5. Compare and contrast .innerHTML and .innerText methods on an HTML element.



// 6. Write JavaScript to add a CSS class to an HTML element.



// 7. Construct JavaScript to write the content of the child HTML elements of a given element to the console.



// 8. Write JavaScript to update the title of the document.



/************************************************************************/
// Event Handling Lesson Learning Objectives
/************************************************************************/


// 1. Update HTML as a response to a click event.



// 2. Add and remove CSS classes to manipulate HTML elements based on the status of a user input.



// 3. Use setTimeout() or setInterval() to trigger a delayed action
// after an event has been triggered.



// 4. Prevent the default behavior of a form submission event when a user submits a form.



// 5. Compare and contrast event.target and event.currentTarget.



// 6. Capture the id and value of an HTML element with event.target.



// 7. Capture click events on the children of an HTML element using the bubbling principle.



// 8. Stop the propagation of bubbling.
`   The Bubbling Principle represents an upward-moving chain of events through the DOM.
    When an event happens on an element, that element’s event handlers will run,
    and then its parent’s event handlers will run,
    and so on upwards through the DOM, until either no event handlers are found
    or we use stopPropagation() to stop the bubbling.`
