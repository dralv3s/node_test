# Node.js Testing Project

This is a Node.js project set up to demonstrate unit testing with Mocha and Chai.

## Prerequisites

Before running this project, you need to have the following installed:
- Node.js

## Install the dependencies:
To run the unit tests, execute the following command in the root of the project:

npm install

## Running the tests:

npm test


## Functions

The project includes the following testable functions:

* doRequest(url): Performs a GET request to the specified URL and returns the response data.
* getHash(input): Generates a SHA-256 hash of the input string.
* getNewHash(b, c): Generates a SHA-256 hash of the concatenation of strings b and c.



## Writing Tests
Tests are written using the Mocha test framework and Chai assertion library. They are located in the test/ directory.

## Troubleshooting
Make sure all file paths in tests.js are correctly specified relative to the test file itself.
Ensure that all functions are being exported properly in app.js.
If you encounter any issues, please open an issue on the GitHub repository page.

## License
This project is licensed under the MIT License - see the [LICENSE file](LICENSE.txt)  for details.