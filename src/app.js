function processUserInput(input) {
  eval(input); // risco de segurança proposital
}

processUserInput("console.log('testing security')");


// pipeline test execution
