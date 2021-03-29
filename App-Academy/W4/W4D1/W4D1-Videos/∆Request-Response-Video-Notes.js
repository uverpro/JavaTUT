/* The Request/Response Cycle

    Is what happens when someone makes a network request in a browser.

                Request
    PC          =============>  Data Center
    Browser     <============   Server/Data
                Response
    Client                      Server
    Side                        Side

When someone opens a browser and requests a URL, the request is sent to the server
    which processes the request and sends it back.

On the the browser side, it parcels all the HTML and CSS and JS sent back
    by the server. The internet is made up of these requests and responses.

    The browser side doesn't see what's under the hood but occasionally will
    receive error messages. Developers need to understand these messages in order
    to trouble shoot problems.
    We can view these network requests and responses by using
    DEVELOPERS TOOLS. ===> NETWORK TAB
    We can see status codes such as "200" which means a successful request.
*/
