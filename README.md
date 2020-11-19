# CYPRESS-PLAYGROUND

This is a playground to become familiar with the automation possibilities using AXE/ AXE-Core/ Cypress-AXE/ PA11Y/ PA11Y-AXE

## Webapp Automation using Cypress

Cypress is a JavaScript-based end-to-end testing framework that uses Mocha, Chai, Chai-signon, jQuery-signon within the JavaScript testing framework.

Running cypress spins up a browser and executes the tests defined in the cypress/integration/ folder

More documentation [here.](https://docs.cypress.io/guides/overview/why-cypress.html#In-a-nutshell)

## NPM script Commands

To start your the application run:

```
npm run start
```

To build the dist folder run (not necessary for users to do this but if you HAVE to...):

```
npm run build
```

## Cypress/AXE-Core/Cypress AXE commands

### All cy commands must be run when you are within the cypress folder

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
