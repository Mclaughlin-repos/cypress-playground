# CYPRESS-PLAYGROUND

This is a playground to become familiar with the automation possibilities using AXE/ AXE-Core/ Cypress-AXE/ PA11Y/ PA11Y-AXE.

## Webapp Automation using Cypress

Cypress is a JavaScript-based end-to-end testing framework that uses Mocha, Chai, Chai-signon, jQuery-signon within the JavaScript testing framework.

Running cypress spins up a browser and executes the tests defined in the cypress/integration/ folder

More documentation [here.](https://docs.cypress.io/guides/overview/why-cypress.html#In-a-nutshell)

## What you need to do before you start...

You will need to be granted access to the repo. You will need to be given access to the `Organization` and to the `Member Access` with an `ACCESS TOKEN`.
Contact Mike Mclaughlin through: 
```
personal email: michaelmclaughlindesigns@gmail.com
work email: mclaughlin@indeed.com
work slack: @mclaughlin
```
to receive access to the `Organization` and to receive your `ACCESS_TOKEN`.  Follow the steps below...

Install PA11Y globally onto your computer. 
Pa11y is your automated accessibility testing pal. 
It runs accessibility tests on your pages via the command line or Node.js, so you can automate your testing process:
Go to `https://pa11y.org/` to get more info, go to the GitHub `https://github.com/pa11y/pa11y` to learn more about the repo itself (You will need node.js so if you don't have node...run this command to install node `$brew install node` before you continue. If you don't have Homebrew installed...go to `https://docs.brew.sh/Installation` to install then run the `$brew install node` command and follow the steps accordingly...) Then run this command in terminal/console

```
npm install -g pa11y
```

You will need an `ACCESS_TOKEN` before you can do anything with the repo. Contact Mike Mclaughlin through:

```
Indeed's slack account:  @mclaughlin
Work email - mclaughlin@indeed.com
Personal email - michaelmclaughlindesigns@gmail.com
```

Save that access token somewhere that is safely secure. Once the access token is used, you'll never see it again. (If you would like a `NEW` access token then contact `Mike Mclaughlin` through the channels listed above.)

Clone the repo...then, save it somewhere on your computer where you'll remember its location. (I use my Documents folder):

```
git clone https://github.com/Mclaughlin-repos/cypress-playground.git
```

After cloning the repo, you will be asked for your username and password (If you are not asked for the `username and password` after you run the `git clone...`, you will be asked when you run your `npm install` command):

```
username = the username you used to be granted access to the repo
password = the ACCESS_TOKEN that was given to you
```

After you input the `ACCESS_TOKEN` into the password of your terminal, the install of the the `node_modules` folder with assets will complete. (If you don't see the node_modules within your editor that's okay. You can open the project folder through your computer file folder structure and see that the `node_modules` folder and contents are there at the root level of the project.)

Open your editor/IDE and bring the whole project into your editor.
After that, use these commands (in order they are listed) to change directories into the project folder and install the node_modules with NPM.
These 2 commands will provide you with all the necessary dependencies .etc that are needed to run the project. (See the `package.json` at the root level of the application to learn what packages are being used for this projects. See more about `npm install` here: `https://docs.npmjs.com/cli/v6/commands/npm-install`)

```

cd <directory where you stored the repo>/cypress-playground

```

```

npm install

```

## NPM script Commands - (After following the above steps...)

To start your the application run:

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

You should see this message on the screen with a white background and Black text:

```

Hi Ya'll! Welcome to the Cypress Playground now using Cypress, AXE-CORE, PA11Y, Typescript and React!
This is where you will learn how to use AXE-CORE and PA11Y to work with components.

```

Run this last setup command (below)...to build the `dist` folder

```

npm run build

```

Now you are ready to start playing with Cypress/ AXE-Core/ PA11Y!
The next commands show you how to play with each on your own. Happy Learning!

## Cypress/AXE-Core/Cypress AXE commands

### All cy commands must be run when you are within the `Cypress` folder

### The app MUST be loaded into a browser window before running cy commands

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

## PA11Y commands

### PA11Y is browser based so results will present in the terminal/console

### The app MUST be loaded into a browser window before running PA11Y commands

To run PA11Y on the app:

```

npm run pa11y

```

To run PA11Y with section 508 rules (fallback...not preferred):

```

npm run pa11y:508

```

To run PA11Y with AXE rules (preferred):

```

npm run pa11y:axe

```

To run PA11Y with AXE rules and report it to a .json file:

```

npm run pa11y:reporter:json

```

### If you need some help:

Mike Mclaughlin
michaelmclaughlindesigns@gmail.com

```

```
