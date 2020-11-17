# CYPRESS-PLAYGROUND
# Run commands for Cypress Playground
"cy:open": "cypress open",
"cy:gui": "start-server-and-test start http://localhost:8080 cy:open",
"cy:gui:debug": "DEBUG=cypress:* cypress open",
# Run axe-cli to check for errors in live web page
https://medium.com/accessibility-a11y/using-axe-command-line-to-evaluate-a-web-page-for-accessibility-1cc4be4aacc9

"cy:axe:webpage": "axe http://localhost:8080 --timeout=120 --save results.json  --tags wcag2a",
