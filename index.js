function testfunc(message) {
  if ( !message ) {
    return 'failed';
  }

  return 'passed';
}

module.exports.testfunc = testfunc;
