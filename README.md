The grass is always greener
=======

Styla new project boilerplate 0.0.3
----

this project includes:

+ [React](#react)
+ [Babel](#babel)
+ [Webpack](#webpack)
+ [Istanbul](#istanbul)
+ [Mocha](#mocha)
+ [Backstop](#backstop)
+ [Enzyme](#enzyme)
+ [Sinon](#sinon)
+ [Coveralls](#coveralls)
+ [eslint](#eslint)
+ [StyleLint](#stylelint)


Everyone loves to start new projects.  This repo is a blank, new project just for you!

Getting Started
----

dev work is intended for node `6.2.2`+ and npm `3.9.3`+.


To initialize the project

+ `git clone https://github.com/styladev/testable-reactions.git`
+ `cd testable-reactions` to go into the project folder
+ `npm i`
+ in `backstop.json` change testSuiteName
+ in `package.json` change package, name, and author
+ `npm run test:visual:baseline`

The entry point on your new app is `./app/main.js`, which is called by `./index.html`.  Once built, the project is run from `./dist/`


Scripts
----

Scripts, standardized across repos, makes it easier for people to jump from one project to another.

available scripts:

| `script` | description |
|----------|-------------|
| `npm run build` | builds the dist files |
| `npm run serve` | starts the dev server on whatever port is defined in `./variables` |
| `npm run lint` | checks the js and jsx files for js and code style error |
| `npm run lintFix` | checks the js and jsx files for js and code style error and fixes them if able |
| `npm run stylelint` | checks the css files for style errors |
| `npm test` | runs unit and visual tests |
| `npm run test:unit` | runs a quick unit test |
| `npm run test:unit:coverage` | runs a unit test that determines test coverage and opens the report in a browser |
| `npm run test:unit:coverage:cli` | runs a unit test that determines test coverage and reports in the command line |
| `npm run test:visual` | runs visual regression tests and opens the report in a browser |
| `npm run test:visual:baseline` | generates baseline comparison images |
| `npm run test:visual:clean` | removes old visual test images |
| `npm run test:visual:cli` | runs visual regression tests and reports in the command line |
| `npm run test:visual:report` | opens the visual regression test report in the browser |


Contributing
----

This project adheres to the [Contributor Covenant](http://contributor-covenant.org/). By participating, you are expected to honor this code.

[Testable-Reactions - Code of Conduct](https://github.com/styladev/testable-reactions/blob/master/CODE_OF_CONDUCT.md)


Issues
----

[Please report issues here.](https://github.com/styladev/testable-reactions/issues)

+ add any specific information that can help to reproduce and resolve the bug.
    + What did you do, when the bug appeared.
    + Node, NPM, + version number
    + OS, Browser + version, resolution
+ Add a label to the issue, if possible.
    + critical -> needs fix right away (like broken build, blocks development)
    + bug -> needs fix
    + issue -> small bug, does not affect anything (small bug in UI, design issue)
    + feature -> feature request
    + question -> needs discussion
    + docs -> needs documentation
    + help wanted -> need help with implementation or fixing bug


Included package details
---

# React

React is a JavaScript library for building user interfaces.

[https://facebook.github.io/react/](https://facebook.github.io/react/)


# Babel


Babel transforms your JavaScript

ES2015 and beyond
Babel has support for the latest version of JavaScript through syntax transformers. These plugins allow you to use new syntax, right now without waiting for browser support.

[https://babeljs.io/](https://babeljs.io/)


# Webpack

Packs CommonJs/AMD modules for the browser. Allows to split your codebase into multiple bundles, which can be loaded on demand. Support loaders to preprocess files, i.e. json, jade, coffee, css, less, ... and your custom stuff.

[https://webpack.github.io/](https://webpack.github.io/)


# Istanbul

Yet another JS code coverage tool that computes statement, line, function and branch coverage with module loader hooks to transparently add coverage when running tests. Supports all JS coverage use cases including unit tests, server side functional tests

[https://www.npmjs.com/package/istanbul](https://www.npmjs.com/package/istanbul)


# Mocha

Mocha is a feature-rich JavaScript test framework running on Node.js and in the browser, making asynchronous testing simple and fun. Mocha tests run serially, allowing for flexible and accurate reporting, while mapping uncaught exceptions to the correct test cases. Hosted on GitHub.

[http://mochajs.org/](http://mochajs.org/)


# Backstop

BackstopJS automates CSS regression testing of your responsive web UI by comparing DOM screenshots at various viewport sizes.

[http://backstopjs.org/](http://backstopjs.org/)


# Enzyme

Enzyme is a JavaScript Testing utility for React that makes it easier to assert, manipulate, and traverse your React Components' output.

Enzyme's API is meant to be intuitive and flexible by mimicking jQuery's API for DOM manipulation and traversal.

[http://airbnb.io/enzyme/](http://airbnb.io/enzyme/)


# Sinon

Standalone test spies, stubs and mocks for JavaScript.
No dependencies, works with any unit testing framework.

[http://sinonjs.org/](http://sinonjs.org/)


# Coveralls


Coveralls works with your CI server and sifts through your coverage data to find issues you didn’t even know you had before they become a problem.

[https://coveralls.io/](https://coveralls.io/)

# eslint

ESLint is an open source project originally created by Nicholas C. Zakas in June 2013. Its goal is to provide a pluggable linting utility for JavaScript.

[http://eslint.org/](http://eslint.org/)


# StyleLint

A mighty, modern CSS linter that helps you enforce consistent conventions and avoid errors in your stylesheets.

[http://stylelint.io/](http://stylelint.io/)



## change log
--------

# 0.0.3

+ updated structure
+ added a fish


# 0.0.2

+ eslint added
