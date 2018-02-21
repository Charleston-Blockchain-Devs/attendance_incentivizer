# Attendance Incentivizer

## Project Description
A group project by the Charleston [Blockchain Programming](https://www.meetup.com/Blockchain-Programming/) meetup, for Ethereum Blockchain development practice.
   
The goal for this project is to create an Ethereum app to allow meeting organizers to incentivize people to attend the meetings by collecting funds into a pool, and rewarding jackpots to either a random meeting attendee or set of attendees.

## Installation
1. `git clone https://github.com/Charleston-Blockchain-Devs/attendance_incentivizer.git`
2. `npm install`  (installs all required local npm packages)
3. [Truffle Installation](http://truffleframework.com/docs/getting_started/installation) (globally install the truffle npm package for compiling, testing, building smart contracts)

## Coding Standards
### Linting
Linting project source code helps ensure common styling, security guidelines, and best practices. Thus, making the code more reliable, maintainable, and easier to work with on a team project.
  
This project contains both JavaScript and Solidity source code files. Linting can and should be performed on both, __before committing__.

> NOTE: For this project, linting rules and configurations are kept in project configuration files (such as .eslintrc.json & .solhint.json), instead of embedding them in the IDE, making it easier for developers to be consistant across various development environments.
  
Typically the default rules from selected linters are used. To adjust any lint rule, seek group consensus, and create a pull request with rule change in the appropriate linter configuration file.
  
#### JavaScript
ESLint is included as a local npm package devDependency, for linting project JavaScript files.
* ESLint configuration settings and rules are stored in `.eslintrc.json`
* To run lint on JavaScript files from the command line, run: `npm run lint-js`
* Most popular IDEs can be configured to use reference `.eslintrc.json`, so that linting can occur within the IDE

##### Rules
ESLint rules cover Possible Errors, Style, and Best Practices (and more), and can be reviewed [here](https://eslint.org/docs/rules/).

#### Solidity
The current solidity linting package chosen for this project is 'solhint'. This package is popular in the development community, provides good [documention](https://protofire.github.io/solhint/), and is supported by popular IDEs (Atom, VS Code, Sublime, JetBrains, VIM, ...).
  
> NOTE: Another popular linter was considered, ['solium'](http://solium.readthedocs.io/en/latest/). This has many of the same features as `solhint`, but a popular IDE (VS Code) did not support reading the solium configuration file, at this time. If down the road we wish to re-evaluate this package, it is a popular and well supported package, worth considering.

Solhint is included as a local npm package devDependency, for linting project Solidity files.
* Solhint configuration settings and rules are stored in `.solhint.json` and `.solhintingore`
* To run lint on Solidity files from the command line, run: `npm run lint-sol`
* Most popular IDEs can be configured to reference `.solhint.json` and `.solhintingore`, so that linting can occur within the IDE
   
##### Rules
Solhint linting rules cover Security, Style, and Best Practices, and can be reviewed [here](https://protofire.github.io/solhint/rules.html).
* Security Rules are implemented according to the [ConSensys Guide for Smart Contracts](https://consensys.github.io/smart-contract-best-practices/recommendations/)
* Style Guide Rules are implemented according to the [Solidity Style Guide](http://solidity.readthedocs.io/en/develop/style-guide.html)

### New Comments
## _I am making my first pull request_
