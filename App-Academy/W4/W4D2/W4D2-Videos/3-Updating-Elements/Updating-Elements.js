// 1. Console.log the children of the ul element

// Listen for the DOM loaded
// window.addEventListener('DOMContentLoaded', (event) => {
//     // get id of parent element
//     const parent = document.getElementById('your-best-friend');
//     // store reference to child nodes
//     const childNodes = parent.childNodes;
//     // loop through node values and console.log each value
//     for (let value of childNodes.value()) {
//         console.log(value);
//     }
// });
// END


// 2. Write a function to set the innerHTML of the ul element to 6 LI tags

// generate a random number for each list item
// const getRandomInt = (max) => {
//     return Math.floor(Math.random() * Math.floor(max));
// }
// // listen to the DOM loaded
// window.addEventListener('DOMContentLoaded', (event) => {
//     // push 6 LI elemtn into array and join
//     const liArr = [];
//     for(let i = 0; i < 6; i++) {
//         liArr.push("<li>" + getRandomInt(10) + "</li>")
//     }
//     const liString = liArr.join('');
//     // insert string into the DOM using innerHTML
//     const listElement = document.getElementById('your-worst-enemy');
//     listElement.innerHTML = liString;
// });
// END


// 3. Insert clock into the DOM

// listen for DOM loaded
window.addEventListener('DOMContentLoaded', (event) => {
    // get title element by id
    const title = document.getElementById('title');
    // set up function to get the time
    const getTime = () => {
        // state date object, seconds, minutes, hours
        const date = new Date();
        const second = date.getSeconds();
        const minutes = date.getMinutes();
        const hours = date.getHours();
        // set innerHTML of 'title' element
        title.innerHTML = hours + ":" + minutes + seconds;
    };
    // set interval
    setInterval(getTime, 1000);
});
// END
