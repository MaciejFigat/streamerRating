
***mocking userId***
userId is generated with nanoid(), stored in redux state for mocking a user id.
It doesn't truly authenticate or identify a user. It's just for testing or demonstration purposes in a development environment. For a real-world application, I'd likely use actual authentication and user identification, through tokens, cookies, or sessions.

This id will persist as long as the user doesn't refresh the page, a new id will be generated each time the application reloads.