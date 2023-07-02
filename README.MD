
***mocking userId***
userId is generated with nanoid(), stored in redux state for mocking a user id.
It doesn't truly authenticate or identify a user. It's just for testing or demonstration purposes in a development environment. For a real-world application, I'd likely use actual authentication and user identification, through tokens, cookies, or sessions.

This id will persist as long as the user doesn't refresh the page, a new id will be generated each time the application reloads.


***note about URL input***
This URL is used for an img tag's src attribute. Any JavaScript embedded in the URL will not execute. Browsers prevent JavaScript execution in this context to prevent cross-site scripting (XSS) attacks.