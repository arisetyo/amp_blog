# Static typing with Flow in React

In my React/JavaScript applications, there are three layers of development "safety" that I always add:

1. ESLint, to make sure the code follows a certain standard
2. Unit testing, to make sure the codes are testable
3. Static typing, to add clarity and reduce confusion

In [this article](https://arie-m-prasetyo.medium.com/static-typing-with-flow-in-react-981e131230af), I'll be discussing on how to start using static typing with [Flow](https://flow.org/) on React applications.

## Setup Flow on VSCode

Install the plugin "Flow Language Support" by [flowtype](https://github.com/flowtype/flow-for-vscode).

**Note**

> If you're using VSCode, you need disable its built-in TypeScript support, because might clashes with Flow's plugin. You can search it by typing `@builtin TypeScript` in the extensions tab of VSCode and then disable it. Check [here](https://github.com/flowtype/flow-for-vscode#setup) for more information.

Any static-typing errors/warnings will be shown by VSCode.

## How-to use the example

### Prepare the app
After you clone the repository, go to the directory `002-react-flow`.

Install the required libraries:
```
$ npm install
```

On the article you need to initialise Flow by using this command:
```
$ npm run flow init
```
This command will create the `.flowconfig` file. You don't have to do that with the example on `002-react-flow` because the configuration file already exists.

### Run the servers

I've included the script for running Flow in `package.json`. To run Flow's server and see any static typing related errors, simply type:

```
$ npm run flow
```

Run the front-end development server, to see the app in action.

```
npm run dev
```

Open the web app on `http://localhost:8000/`
