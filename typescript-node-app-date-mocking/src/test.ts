const MockDate = require('mockdate');

test('Mock Date to change when "now" is', () => {
  console.log('Normal:   ', new Date().getTime());

  MockDate.set(new Date(1466424490000));

  console.log('Mocked:   ', new Date().getTime());

  MockDate.reset();

  console.log('Restored: ', new Date().getTime());
});
