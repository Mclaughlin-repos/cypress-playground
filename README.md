# CYPRESS-PLAYGROUND

This is a playground to become familiar with the automation possibilities using AXE-Core/ Cypress/ Pa11y/ Pa11y-axe.

## Webapp Automation using Cypress

Cypress is a JavaScript-based end-to-end testing framework that uses Mocha, Chai, Chai-signon, jQuery-signon within the JavaScript testing framework.

Running cypress spins up a browser and executes the tests defined in the cypress/integration/ folder

More documentation [here.](https://docs.cypress.io/guides/overview/why-cypress.html#In-a-nutshell)

## What you need to do before you start...

### You must have a GitHub, GitLab, or an Indeed personal GitHub account in order to use this repo.

Permissions will only be granted to those who have one of account types specified above.

If you need to set up a `GitHub account`, you can quickly set one up with the link to this documentation

```
https://docs.github.com/en/free-pro-team@latest/github/getting-started-with-github/set-up-git
```

### Pa11y

Pa11y is your automated accessibility testing pal.
It runs accessibility tests on your pages via the command line or Node.js, so you can automate your testing process:
Go to `https://pa11y.org/` to get more info, go to the GitHub `https://github.com/pa11y/pa11y` to learn more about the repo itself (You will need node.js so if you don't have node...run this command to install node `$brew install node` before you continue. If you don't have Homebrew installed...go to `https://docs.brew.sh/Installation` to install then run the `$brew install node` command and follow the steps accordingly...)

### AXE-CORE

Axe is an accessibility testing engine for websites and other HTML-based user interfaces. It's fast, secure, lightweight, and was built to seamlessly integrate with any existing test environment so you can automate accessibility testing alongside your regular functional testing. To get more info, go to `https://github.com/dequelabs/axe-core`

### Cypress

Cypress is a next generation front end testing tool built for the modern web. We address the key pain points developers and QA engineers face when testing modern applications. To learn more, go to: `https://docs.cypress.io/guides/overview/why-cypress.html#In-a-nutshell`

We make it possible to:

```
Set up tests
Write tests
Run tests
Debug Tests
```

Cypress is most often compared to Selenium; however Cypress is both fundamentally and architecturally different. Cypress is not constrained by the same restrictions as Selenium. This enables you to write faster, easier and more reliable tests.

## Steps to get up and running

You will need to be granted access to the repo. You will need to be given access to the `Organization` and to the `Member Access`.
Contact Mike Mclaughlin through:

```
personal email: michaelmclaughlindesigns@gmail.com
work email: mclaughlin@indeed.com
work slack: @mclaughlin
```

to receive access to the `Organization` and to receive your `Member Access`.

Clone the repo...then, save it somewhere on your computer where you'll remember its location. (I use my Documents folder):

```
git clone https://github.com/Mclaughlin-repos/cypress-playground.git
```

After cloning the repo, you will be asked for your username and password when running the `npm install`

```
username = the username you used to be granted access to the repo
password = the password for the username you used to be invited to the repo
```

Open your editor/IDE and bring the whole project into your editor.
After that, use these commands (in order they are listed) to change directories into the project folder and install the node_modules with NPM.
These 2 commands will provide you with all the necessary dependencies .etc that are needed to run the project. (See the `package.json` at the root level of the application to learn what packages are being used for this projects. See more about `npm install` here: `https://docs.npmjs.com/cli/v6/commands/npm-install`)

```
cd <directory where you stored the repo>/cypress-playground
```

```
sudo npm install      (tempororary...will update)
```

## NPM script Commands - (After following the above steps...)

To start your the application and see within the browser run:

```
npm run start
```

After starting the application, you should see logs that look similar to this:

```

> cypress-playground@1.0.0 start /Users/<your user name goes here>/indeed/cypress-playground
> webpack serve --config ./webpack.config.js --mode development

ℹ ｢wds｣: Project is running at http://localhost:8080/
ℹ ｢wds｣: webpack output is served from undefined
ℹ ｢wds｣: Content not from webpack is served from /Users/nmarshall/indeed/cypress-playground/dist
ℹ ｢atl｣: Using typescript@4.1.2 from typescript
ℹ ｢atl｣: Using tsconfig.json from /Users/nmarshall/indeed/cypress-playground/tsconfig.json
ℹ ｢atl｣: Checking started in a separate process...
ℹ ｢atl｣: Time: 27ms

```

-   The project will run on `http://localhost:8080`
-   Open a new browser window and copy and paste the above URL into the browser then, hit the enter to see the project load.

You should see this message on the screen with the below text:

```
Hi Ya'll! Welcome to the Cypress Playground now using Cypress, AXE-CORE, PA11Y, Typescript and React!
This is where you will learn how to use AXE-CORE and PA11Y to work with components.
```

Now you are ready to start playing with Cypress/ AXE-Core/ PA11Y!
The next commands show you how to play with each on your own. Happy Learning!

## Cypress/AXE-Core/Pa11y commands

### All commands below must be run when you are within the `cypress` folder within a terminal window
`pa11y errors will show within the terminal window so user needs to scroll up within the terminal window to see errors from pa11y`
`cypress errors will show within the GUI`
#### Command to run all tests (Pa11y, Cypress, Axe-core) all together at once `(PREFERRED METHOD)`: 
This command: `starts the application` running in localhost, opens a `new browser window` and renders the application, `opens and runs the cypress tests with axe core` AND `runs the pa11y tests` all concurrently. (user needs to go to browser window and type `http://localhost:8080` to see app)
```

npm run start:test


```

### Cypress Individual commands
To open the cypress gui:

```
npm run cy:open
```

To run the cypress gui in DEBUG mode run:

```
npm run cy:debug
```

To run the cypress with AXE in the gui run:

```
npm run cy:axe
```

To run the cypress with AXE on a specific page:

```
npm run cy:axe:webpage
```

### PA11Y Individual commands

#### PA11Y is browser based so results will present in the terminal/console

To run PA11Y on the app:

```
npm run pa11y
```

To run PA11Y with section 508 rules (fallback...not preferred):

```
npm run pa11y:508
```

To run PA11Y with AXE rules (wcag and 508 rules - preferred):

```
npm run pa11y:axe
```

To run PA11Y with AXE rules and report it to a .json file:

```
npm run pa11y:reporter:json
```

### If you need some help:

```
Mike Mclaughlin
michaelmclaughlindesigns@gmail.com
mclaughlin@indeed.com
```
