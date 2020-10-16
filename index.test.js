const { testfunc } = require('./');

test('pass test', () => {
  expect(testfunc('passed!')).toBe('passed!');
});

test('fail test', () => {
  expect(testfunc()).toBe('failed');
});
