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
