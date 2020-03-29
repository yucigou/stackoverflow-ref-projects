test('mocks a constructor like new Date()', () => {
  console.log('Normal:   ', new Date().getTime());

  const mockDate = new Date(1466424490000);
  const spy = jest.spyOn(global, 'Date').mockImplementation(() => mockDate);

  console.log('Mocked:   ', new Date().getTime());
  spy.mockRestore();

  console.log('Restored: ', new Date().getTime());
});
