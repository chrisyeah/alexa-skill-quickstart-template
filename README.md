# Alexa Skill Quickstart Template

This is a node.js template for your custom Alexa Skill.

## How to use the template

### Get Started

Prerequisites:
* You need [node.js](https://nodejs.org) installed.
* You need [git](https://git-scm.com/downloads) installed.

Let's go:
1. Clone this repository `git clone...`
2. Rename the cloned folder for you needs and jump into `cd my-folder/src/`
3. In the src folder: install the node modules `npm install`
And there you have it: start coding!

### Local development

For local alexa skill development I use [Bespoken Tools](https://bespoken.io/alexa-skills/).
When installed once, just do the following:
1. Start your lambda proxy: `bst proxy lambda src/index.js`
2. Take the proxy url and use it as Https Service Endpoint for your skill in the [Amazon Developer portal](https://developer.amazon.com/alexa/console/ask).
Now you can instant test your implementation in the Test Simulator or with a real Echo.

### Manually deploy to AWS Lambda

If you need a zip file for your AWS lambda function, just do the following:
1. In the src folder: `npm run zip`
2. Go to the dist folder and find your zip file which you can upload to AWS.



