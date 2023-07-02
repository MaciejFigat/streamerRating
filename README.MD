<div align="center">
 
  <h3 align="center">Dare to be great!</h3>

  <p align="center">
    home task for DareDrop
    <br />
    <br />
    <a href="https://streamerrate.netlify.app/">Live version</a> 
    &#9898;
    <a href="https://streamerratebe.onrender.com/">Backend deploy</a> 
    &#9898;
    <a href="https://github.com/MaciejFigat/streamerRating">FE and BE repository</a>
    &#9898;
  </p>
</div>

## About the Project

This is a proof of concept full stack application, made for recruitment purposes [DareDrop](https://daredrop.com/).

### Features and todo (ie. features not finished)

- [x] streamer object post req functionality
- [x] streamer object put req functionality
- [x] streamer objects get req functionality
- [x] live updates thanks to websockets
- [x] error boundaries for 
- [x] backend tests
- [o] frontend tests - todo: vitest for async redux-toolkit thunks

### Built With
- Vite 
- redux-toolkit 
- socket.io
- Express
- MongoDB
- Mongoose

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

**Frontend testing - no testing for now** 

TODO: Vitest for the future of testing redux-toolkit thunks
* I have yet to find a reliable way of using jest with vite
* no testing 