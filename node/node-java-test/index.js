const util = require('util');
const exec = util.promisify(require('child_process').exec);

async function execute_java(command){
  const { stdout, stderr } = await exec(command);
  console.log('command output: ', stdout, 'command error: ', stderr);
  return { stdout, stderr }
};

async function main() {
  console.log('running java tast');
  const run_java = await execute_java('java helloWorld');
  console.log('java output: ', run_java);
}

main();
