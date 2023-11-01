# Bio time clock - Nodejs app

A Nodejs express Application with mongoDB for Bio timing clock management 

<!-- Table of contents -->
<details open="open" >
  <summary><h2 style="display: inline-block">Table of Contents</h2></summary>

  <ol>
    <li>
        <a href="#techStack">Tech Stack</a>
    </li>
    <li>
      <a href="#env-vars">Environment Variables</a>
    </li>
    <li>
      <a href="#add-env-vars">Add Environment Variables</a>
    </li>
    <li>
      <a href="#run-locally">Run Locally</a>
    </li>
    <li>
      <a href="#gen-prod">Run on prod</a>
    </li>
    <li>
      <a href="#swagger-docs">API Docs</a>
    </li>
    <li>
      <ul>
      <li> <a href="#linting">Linting</a></li>
      <li> <a href="#husky">Git Hooks: Husky</a></li>
      <ul>
    </li>
  </ol>
</details>
  
<!-- Tech Stack -->
## Tech Stack <a id=techStack></a>

**Client:**

- NodeJs
- Express TypeScript
- Mongoose (MongoDB)

**_Description_**

```
"node": ">=21.1.0"
"express": "4.18.2"
```

<!-- Env Variables -->

## Environment Variables <a id=env-vars></a>

We have 2 .env files

- .env.example
- .env To run this project, you will need to add the following environment variables to your .env file

`DB_URL` `PORT`

## Run Locally <a id=run-locally></a>

Clone the project

```bash
  git clone https://github.com/ibrahimkhennouf/Bio-time-clock
```

Go to the project directory

```bash
  cd Bio-time-clock
```

Install dependencies

```bash
  yarn install //or just yarn
```

1- First step

```bash
  yarn dev
```

## Generate build file <a id=gen-locally></a>

```bash
  yarn build
```

## Run on prod <a id=run-prod></a>

```bash
  yarn start
```

## API Docs <a id=swagger-docs></a>

To access API Docs please check https://{yourURL}/docs

### Linting: Eslint && prettier <a id=linting></a>

Prettier takes care of your code formatting, ESLint takes care of your code style.  
To lint your document run `yarn lint` and to format it run `yarn format`, and you can go further by configuring your IDE (VsCode, WebStorm, ...) to lint and format on save. [Further details about Eslint and prettier in here](https://prettier.io/docs/en/integrating-with-linters.html)

### Git Hooks: Husky <a id=husky></a>

After installing the project, a command will be executed automatically `yarn prepare` which will set up husky to run its hooks. a pre-commit hook will be there which will help on linting, formatting and checking the branch name before the commit. to add other hooks (pre-commit, ...) enter `yarn husky add .husky/pre-commit` and configure your shell script as wanted. [Further details about Husky in here](https://typicode.github.io/husky)

[Custom Hooks](/src/hooks/README.md)

## Authors

- [@JOL4G](https://www.github.com/jol4g) Copyleft
