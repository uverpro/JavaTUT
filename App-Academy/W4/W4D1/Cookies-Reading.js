// Cookies

// Cookies are used to store info about a user ie,
    // browser habits or history, form input info

// Session Cookies are lost once the browser window is closed

// Persistent Cookies are set up with a specified expiration date
    // such as an e-commerce site tracking a users browsing and buying habits


// How to create a cookie in JS:
    // document interface represents the web page loaded in a user's browser
    // cookies are stored on a user's browser, so document object allows
    // to get/set cookies on users broswer:
const firstCookie = "favoriteCat=million";
document.cookie = firstCookie;
const secondCookie = "favoriteDog=bambi";
document.cookie = secondCookie;
document.cookie; // Returns "favoriteCat=million; favoriteDog=bambi"

    // the following syntax will create a new cookies:
document.cookie = aNewCookieHere;

    // to set a second cookie, you would assign a new key value pair, using the same syntax
const firstCookie = "favoriteCat=million";
document.cookie = firstCookie;
document.cookie; // Returns "favoriteCat=million"

    // Formatting your string like we do in the firstCookie variable above sets the cookie value
    // with a defined key, known as the cookie's name, instead of an empty name


// Deleting a cookie:
    // Delete cookies in JS by setting a cookie's expiration date to a date in the past:
    const firstCookie = "favoriteCat=million";
    document.cookie = firstCookie;
    document.cookie; // Returns "favoriteCat=million"

    // specify the cookies "name" (the key) with an "=" and set the  expiration
    // date to the past
    document.cookie = "favoriteCat=; expires = Thu, 01 Jan 1970 00:00:00 GMT";
    document.cookie; // ""
