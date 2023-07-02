
**mocking userId**
userId is generated with nanoid(), stored in redux state for mocking a user id.
It doesn't truly authenticate or identify a user. It's just for testing or demonstration purposes in a development environment. For a real-world application, I'd likely use actual authentication and user identification, through tokens, cookies, or sessions.

This id will persist as long as the user doesn't refresh the page, a new id will be generated each time the application reloads.


**note about URL input**
This URL is used for an img tag's src attribute. Any JavaScript embedded in the URL will not execute. Browsers prevent JavaScript execution in this context to prevent cross-site scripting (XSS) attacks.


**Backend testing** 
examples of testing approach
Integration Tests: PUT /streamers/:streamerId/vote
This tests the interaction between different components or layers of my application. Sends an HTTP request to the API endpoint and asserts the response. It ensures that the voting functionality works correctly when making a request to the server.

Unit Tests: Vote event emission 
I'm testing whether the event is emitted correctly to the connected clients.
This test verifies the behavior of the event emission functionality independently of the HTTP request. 

TODO: testSetup that uses serverStarter
* get it working so I can set up sockets for testing in different cases

