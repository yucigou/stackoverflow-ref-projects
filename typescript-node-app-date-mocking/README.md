Refrence project for question https://stackoverflow.com/questions/60912023/jest-typescript-mock-date-constructor

Run the test:

```
npm install
npm run test
```

Test result:

```
> jest

 PASS  src/test.ts
  ✓ Mock Date to change when "now" is (8ms)

  console.log src/test.ts:4
    Normal:    1585505136315

  console.log src/test.ts:8
    Mocked:    1466424490000

  console.log src/test.ts:12
    Restored:  1585505136322

Test Suites: 1 passed, 1 total
Tests:       1 passed, 1 total
Snapshots:   0 total
Time:        1.804s
```
