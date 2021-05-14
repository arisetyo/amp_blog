# Static typing with Flow

In my JavaScript applications, there are three layers of code "safety" that I like to add:

1. ESLint, to make sure the code follows a certain standard
2. Unit testing, to make sure the codes are testable
3. Static typing, to add clarity and reduce confusion

In this article, I'd like to discuss static typing using Flow.

## How-to

* Install the required libraries, run `npm install`
* Initialise Flow `npm run flow init`
* Run Flow `npm run flow`
* Run the front-end development server, `npm run dev`
* Open the web app on `http://localhost:8000/`

## Using Flow

* Initialize your project with `flow init`.

Do this to enable Flow on your project. It is common to have an empty .flowconfig file for your project. However, you can [configure and customize Flow](https://flow.org/en/docs/config/) in many ways through options available to be added to `.flowconfig`.

* Start the Flow background process with `flow`.

* Determine which files Flow will monitor with `// @flow`.

You can also adopt Flow incrementally and easily remove it at anytime, so you can try Flow out on any codebase and see how you like it.

---

## Note

If you're using VSCode, disable its built-in TypeScript support that might clashes with Flow.

Search `@builtin TypeScript` in the extensions tab.

Check [here](https://github.com/flowtype/flow-for-vscode#setup) for more information.