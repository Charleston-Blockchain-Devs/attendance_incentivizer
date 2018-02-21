# Attendance Incentivizer

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

### New Comments
* comment 1
