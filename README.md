![Daily Routine - Daily Scrum Absurd Answers](https://user-images.githubusercontent.com/20565536/59495052-d1ed4980-8e8e-11e9-9dc9-e8fe0d037469.png)

> An artificial intelligence dedicated to generating absurd and useful daily meeting quotes for endless enrichment of pointless developers existence.

Check the [live version of Daily Routine](https://dailyroutine.blurbyte.com/) app!

# Getting started

A few easy steps to set up a project:

* Make sure you've got **Node 24** installed
* Run `npm install` from project root
* Run `npx playwright install chromium` to get a browser for e2e tests

Most useful scripts for development:

* `npm start` - starts the project in a development mode at `http://localhost:3000`
* `npm test` - fires up Vitest unit test runner

Other scripts which could be helpful:

* `npm run start:build` - builds the app and starts its production server locally
* `npm run test:update` - updates all tests' snapshots from scratch
* `npm run e2e` - runs all Playwright e2e tests
* `npm run e2e:ui` - opens Playwright e2e tests in UI mode
* `npm run lint` - checks whole codebase with ESLint
* `npm run format` - formats whole codebase with prettier

# Deployment

The app is a static build served by a small Express server (`server.js`) on [Fly.io](https://fly.io/).

Every push to the `master` branch runs format check, linter, unit and e2e tests on GitHub Actions. Once all of them pass, the app is deployed automatically.

# Coding style

Few simple rules (prettier and linter takes care of the rest):

* use regular **function()** instead of **arrow functions** at the top level (applies for functional components as well)
* use **arrow functions** for anonymous functions
* use **.jsx** extension for files containing JSX
* for targeting components directly in tests (e2e and unit) use **data-testid** property, for example: `<button data-testid="frontend-button">Front End Developer</button>`
* follow TODO comments with @ symbol and your GitHub handle, for instance: `// TODO Implement something important @myhandle`
