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
__NOTE:__ Keeping linting rules in separate configuration files (such as .eslintrc.json & .soliumrc.json), outside of IDEs, make it easier for developers to share and follow agreed upon code styles.

#### JavaScript
ESLint is included as a local npm package devDependency, for linting project JavaScript files.
* ESLint configuration settings and rules are stored in `.eslintrc.json`
* Run npm script 'lint-js' to lint JavaScript files,  `npm run lint-js`

#### Solidity
The current solidity linting package chosen for this project is 'solhint'. This package is popular in the development community, provides good [documention](https://protofire.github.io/solhint/), and support for popular IDEs (Atom, VS Code, Sublime, JetBrains, VIM, ...).

Configuration and rule settings are maintained in project files `.solhint.json` and `.solhintingore`. This is done so linting can be managed and used independent of an IDE. An NPM script, `lint-sol`, was created so linting can be run from the command line, as well as be configured to work with IDEs.

To run the solidity linter from the command line, type `npm run lint-sol`

> NOTE: Another popular linter was considered, ['solium'](http://solium.readthedocs.io/en/latest/). This has many of the same features as `solhint`, but did not support external file rule configuration in its latest version when configured for use in VS Code. If down the road we wish to re-evaluate this package, it is a well received and supported package to be considered.
