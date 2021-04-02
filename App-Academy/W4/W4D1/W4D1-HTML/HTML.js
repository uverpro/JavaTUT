// HTML

// HTML is a MARKUP LANGUAGE, not a programming language.
// HTML consists of a series of elements, which are enclosed, wrapped, or marked up
// The enclosing tags make content into a hyperlink to connect another page,
    // italicize words, etc. Example:
        My cat is very grumpy
        // to make the text stand alone, enclose with paragraph <p> element:
            <p>My cat is very grumpy</p>
// Note: Tags are case insensitive


// Anatomy of HTML:
// Opening tag            Closing tag
//   |                        |
    <p>My cat is very grumpy</p>
//     |      CONTENT      |
//  \         ELEMENT          /

// 1. The opening tag: This consists of the name of the element (in this example, p for paragraph),
    // wrapped in opening and closing angle brackets.
    // This opening tag marks where the element begins or starts to take effect.
// 2. The content: This is the content of the element. In this example, it is the paragraph text.
// 3. The closing tag: This is the same as the opening tag, except that it includes
    // a forward slash before the element name. This marks where the element ends.

// Nesting Elements:
{/* <p>My cat is <strong>very</strong> grumpy.</p> */}


// Block verses Inline Elements
// Block-level elements form a visible block on a page.
    // A block-level element appears on a new line following the content that precedes it.
    // Any content that follows a block-level element also appears on a new line.
    // Block-level elements are usually structural elements on the page.
    // For example, a block-level element might represent headings, paragraphs, lists,
    // navigation menus, or footers.
    // A block-level element wouldn't be nested inside an inline element,
    // but it might be nested inside another block-level element.

// Inline elements are contained within block-level elements, and surround only small parts
    // of the document’s content (not entire paragraphs or groupings of content).
    // An inline element will not cause a new line to appear in the document.
    // It is typically used with text, for example an <a> element creates a hyperlink,
    // and elements such as <em> or <strong> create emphasis.

{/* <em>first</em><em>second</em><em>third</em> */}
// <em> is an inline element. All sit on the same line, no space between
// firstsecondthird

{/* <p>fourth</p><p>fifth</p><p>sixth</p> */}
// <p> is a block level. Each p element on a new line, with space above/below
// fourth

// fifth

// sixth


// Empty Elements
// Not all elements follow the pattern of an opening tag, content, and a closing tag.
    // Some elements consist of a single tag, which is typically used to insert/embed
    // something in the document.
    // For example, the <img> element embeds an image file onto a page:
{/* <img src="https://raw.githubusercontent.com/mdn/beginner-
    html-site/gh-pages/images/firefox-icon.png"></img> */}
// Note: Empty elements are sometimes called "void elements"


// Attributes
// Elements can also have attributes. Attributes look like this:
// <p class="editor-note">My cat is very grump</p>
//    \    ATTRIBUTE    /
// Attributes contain extra information about the element that won't appear in the content.
// In this example, the class attribute is an identifying name used to
// target the element with style information.

// An attribute should have:
    // A space between it and the element name. (For an element with more than one attribute,
        //  the attributes should be separated by spaces too.)
    // The attribute name, followed by an equal sign.
    // An attribute value, wrapped with opening and closing quote marks.


// Adding attributes to an element:
    // <a> is an ANCHOR TAG.
        // An anchor makes the text it encloses in a hyperlinke.

// Several attributes an anchor can take:

    // href: This attribute's value specifies the web address for the link.
        // For example: href="https://www.mozilla.org/".

    // title: The title attribute specifies extra information about the link,
    // such as a description of the page that is being linked to.
        // For example, title="The Mozilla homepage".
        //  This appears as a tooltip when a cursor hovers over the element.

    // target: The target attribute specifies the browsing context used to display the link.
        //  For example, target="_blank" will display the link in a new tab.
        //  If you want to display the linked content in the current tab, just omit this attribute.


// Boolean Attributes
    // Attributes w/o written values are called Boolean Attributes.
    // Boolean values only have one value which is usually the same as attribute name
        // Example: the disabled attribute, which you can assign to form input elements.
            // You use this to disable the form input elements so the user can't make entries.
            // The disabled elements typically have a grayed-out appearance.
            <input type="text" disabled="disabled"></input>

// <!-- using the disabled attribute prevents the end user from entering text into the input box -->
    // <input type="text" disabled>

// <!-- text input is allowed, as it doesn't contain the disabled attribute -->
    {/* <input type="text"> */}



// Anatomy of an HTML document

<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>My test page</title>
  </head>
  <body>
    <p>This is my page</p>
  </body>
</html>
</html>

// 1. !DOCTYPE html is the shortest string of chars for a valid doctype. Use it.
// 2. <html></html>: The <html> element.
    // This element wraps all the content on the page.
    // It is sometimes known as the root element.
// 3. <head></head>: The <head> element.
    // Holds META DATA
    // This element acts as a container for everything you want to include on the HTML page,
    // that isn't the content the page will show to viewers.
    // This includes keywords and a page description that would appear in search results,
    // CSS to style content, character set declarations, and more.
// 4. <meta charset="utf-8">: This element specifies the character set for your document to UTF-8,
    // which includes most characters from the vast majority of human written languages.
    // With this setting, the page can now handle any textual content it might contain.
    // There is no reason not to set this, and it can help avoid some problems later.
// 5. {/* <title></title>: The <title> element. This sets the title of the page,
    // which is the title that appears in the browser tab the page is loaded in.
    // The page title is also used to describe the page when it is bookmarked. */}
// 6. {/* <body></body>: The <body> element. This contains all the content that displays
    // on the page, including text, images, videos, games, playable audio tracks,
    // or whatever else. */}

// Whitespace:
/*
<p>Dogs are silly.</p>

<p>Dogs        are
         silly.</p>
*/
// When rendering the code, the sequence will be single spaced
    // but "white space" can be useful for readibility



// Entity references: Including special characters in HTML
    // In HTML, the characters <, >,",' and & are special characters.
    // They are parts of the HTML syntax itself.
    // If you want to use these chars an not be intepretted as code:
    // Literal character                            Character reference equivalent
    //         <                                                &lt;
    //         >                                                &gt;
    //         "                                                &quot;
    //         '                                                &apos;
    //         &                                                &amp;



// Applying CSS and Javascript to HTML

// The <link> element should always go inside the head of your document.
    // This takes two attributes, rel="stylesheet",
    // which indicates that it is the document's stylesheet, and href,
    // which contains the path to the stylesheet file:
        // <link rel="stylesheet" href="my-css-file.css">


// The <script> element should also go into the head, and should include a src attribute
    // containing the path to the JavaScript you want to load, and defer,
    // which basically instructs the browser to load the JavaScript at the same time
    // as the page's HTML. This is useful as it makes sure that the HTML is all loaded
    // before the JavaScript runs, so that you don't get errors resulting from JavaScript
    // trying to access an HTML element that doesn't exist on the page yet.
    // There are actually a number of ways to handle loading JavaScript on your page,
    // but this is the most foolproof one to use for modern browsers
        // <script src="my-js-file.js" defer></script>



// Setting primary language of the document:
    // This can be done by adding the lang attribute to the opening HTML tag
        // <html lang="en-US">
    // You can also set subsections of your document to be recognized as different languages:
        // <p>Japanese example: <span lang="ja">ご飯が熱い。</span>.</p>
