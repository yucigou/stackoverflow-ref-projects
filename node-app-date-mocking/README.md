Refrence project for answer https://stackoverflow.com/a/57599680/2700356

Run the test:

```
npm install
npm run test
```

Test result:

```
> jest

 PASS  src/test.js
  ✓ mocks a constructor like new Date() (8ms)

  console.log src/test.js:2
    Normal:    1585479028641

  console.log src/test.js:7
    Mocked:    1466424490000

  console.log src/test.js:10
    Restored:  1585479028647

Test Suites: 1 passed, 1 total
Tests:       1 passed, 1 total
Snapshots:   0 total
Time:        1.793s
Ran all test suites.
```