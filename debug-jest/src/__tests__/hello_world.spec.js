const getHelloWorld = require('../hello_world');

describe('Hello World', () => {
  test('should be a function', () => {
    expect(typeof getHelloWorld).toEqual('function');
  });

  test('should return Hello World', () => {
    expect(getHelloWorld()).toEqual('Hello World');
  });
});
