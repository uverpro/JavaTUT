/*
The DOM (Document Object Model)
    A heirarchy of object in the DOCUMENT OBJECT,
    which includes HTML elements.

The BOM (Browser Object Model)
    A heirarchy of objects in the BROWSER OBJECT,
    which includes the document object.

The DOM is contained within the BOM.


USER INTERFACE: The browser interface, which includes the address bar, back and forward buttons,
    bookmars menu, etc. Includes everything except for the requested page content.

     User Interface =====\
        |                |    Data
     Browser Engine|=====|===Persistence
            |            |
    Rendering Engine     |
       |    |    |       |
Networking  |   UI Backend
        Javascript
        Interpretor

BROWSER ENGINE: Manages the interactions between the UI and the rendering engine.

RENDERING ENGINE: Displays or renders the requested page content. if the requested
    content is HTML, it will parse HTML and CSS and render the parsed content.

NETWORKING: Handles network calls, such as HTTP requests.

*/
