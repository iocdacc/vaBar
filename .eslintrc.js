module.exports = {
  extends: [
    'alloy',
    'eslint:recommended',
  ],
  env: {
      // Your environments (which contains several predefined global variables)
      //
      // browser: true,
      // node: true,
      // mocha: true,
      // jest: true,
      // jquery: true
      es6: true
  },
  globals: {
      // Your global variables (setting to false means it's not allowed to be reassigned)
      //
      // myGlobal: false
  },
  rules: {
      // Customize your rules
  }
};