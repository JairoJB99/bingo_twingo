const core = require("@actions/core");

const SYNTAX_STATUS = core.getInput('SYNTAX_STATUS');
const EXECUTION_STATUS = core.getInput('EXECUTION_STATUS');
const BUILD_STATUS = core.getInput('BUILD_STATUS');
const DEPLOY_STATUS = core.getInput('DEPLOY_STATUS');

console.log(SYNTAX_STATUS);
console.log(EXECUTION_STATUS);
console.log(BUILD_STATUS);
console.log(DEPLOY_STATUS);