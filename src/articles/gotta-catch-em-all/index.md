---
tags: ["posts"]
title: Gotta Catch 'Em All
subtitle: Automating accessibility testing is a convenient way to catch low hanging accessibility vulnerabilities. Using pa11y and GitHub actions means syntactic accessibility issues can be identified consistently.
showDate: true
date: 2021-12-20
dateFormat: 20 December 2021
customImage: true
customImageURL: "pa11y.png"
---

Automating accessibility testing is a convenient way to catch low hanging accessibility vulnerabilities. It can't find all accessibility problems though and [conservative estimates indicates less than 30% of the total WCAG failures are identified](https://accessibility.blog.gov.uk/2017/02/24/what-we-found-when-we-tested-tools-on-the-worlds-least-accessible-webpage/). But when automated testing is introduced into your workflow some issues can be identified in a consistent way quickly.

When solutions are hosted on GitHub, GitHub actions can be leveraged to run every time a commit is made, or a Pull Request accepted. Cursory accessibility checks can be automatically carried out ensuring many straightforward accessibility issues haven’t crept and deployment is halted if accessibility problems are found.

## Setting it up
Within a project create the folder `.github/workflows` in the root directory. This is where the GitHub action will reside. We're using the pa11y accessibility engine, and create the file `pa11y.yml`. 

The name of the action is set to pa11y and specifies which Continuous Integration events the tests are run against. In this instance the test will run against push and pull requests to the main branch.

```yml
name: pa11y
on:
  push:
    branches: [main]
  pull_request:
    branches: [main]
```
Generic boilerplate configuration exists for the virtual machine workflow, this pulls down dependencies and specifies the version of node.

There are several steps which run the build command within the projects `package.json` outputting the compiled solution to the `/dist/` folder. This is followed by the start command which creates a http-server using the `/dist/` folder as the source directory. 

```yml
- run: npm run build --if-present
- run: npm start & npx wait-on http://localhost:8080
```

Pa11y is installed on the virtual machine runner and the pa11y accessibility engine is run against the localhost created from the compiled solution in the `/dist/` folder.

```yml
run: |
    npm install -g pa11y
    pa11y http://localhost:8080
```

The Actions tab within GitHub lists this workflow, the branch it's run against and whether it has run successfully. 

<div class="image image--border">
<figure>
<img src="github-actions.png" alt="" width="100%">
<figcaption>GitHub actions listing all actions created</figcaption>
</figure>
</div>

Clicking through to the jobs output lists in the console or steps that been run. For this demo a deliberate accessibility error has been introduced. The boilerplate HTML the Action runs is missing title text and this is shown in the pa11y output.

<div class="image image--border">
<figure>
<img src="pa11y-output.png" alt="" width="100%">
<figcaption>pa11y error output</figcaption>
</figure>
</div>

## The panacea for time consuming audits?
Just before you think this solves accessibility in your project, it's time to be realistic. It doesn't. At best it finds low hanging accessibility issues in a consistent way which may have been missed. 

It lacks the ability to identify accessibility failings with complex functionality or even WCAG issues that require a nuanced understanding. 
Pa11y, in fact any automated testing tool won't uncover whether appropriate ALT text exists on descriptive images, an expert reviewer is still required.

But if your accessibility maturity is low, this can be a good initial addition to the development lifecycle as the effort to implement a rudimentary accessibility check is modest. 

Think of this as a layered defence towards inaccessible code reaching the production environment. 

When this is used in combination with many other accessibility efforts including manual auditing, browser, and AT compatibility testing, and testing with users it results in a consistent way to reduce syntactic accessibility issues from creeping into production.

## Resources

* Check out the [Repository](https://github.com/canaxess/a11y-github-actions)
* [Automating the accessibility tests of your source code with GitHub Actions](https://www.adrianbolonio.com/en/accessibility-github-actions/)
