function testfunc(message) {
  if ( !message ) {
    return 'Test Failed';
  }

  return 'Test passed';
}

module.exports.testfunc = testfunc;
