const chalk = require('chalk');

class test {
  constructor(type) {
    this.type = type;
  }

  assertEquals(res, check) {
    if (res === check) {
      console.log(chalk.green("Test Passed"));
    } else {
      console.log(chalk.red("Test Failed"));
    }
  }

  assertSimilar(arra1, arra2) {
    if (JSON.stringify(arra1) === JSON.stringify(arra2)) {
      console.log(chalk.green("They are similar"));
    } else {
      console.log(chalk.red("They are different"));
    }
  }
}

module.exports = test;
