// Open a new window
const newWindow = window.open("https://www.wikipedia.org", "Wikipedia", "width=100, height=100");
// Resize the new window
newWindow.resizeTo(500, 500);

(function() { // the context of a function is actually the object that contains that function. In the case of an anonymous function, that context is the window.
 console.log(this) // console.logs the window object which means the context of the function is the windows object
})();


// How to run scripts in the appropriate time
window.onload = () => { // this will run after the window has loaded!
    console.log("This script loaded when all the resources and the DOM were ready.");
};

window.addEventListener('DOMContentLoaded', () => { // this line will print BEFORE the window.onload!
    console.log("This script loaded when the DOM was ready.");
});

// How to run a script after the DOM has loaded:
// Above we waited for DOM content to load
