
describe("demo.test.js",()=> {

  test('1. tow string should be equal ', () => {
    // 1. Initialization
    const msg = "Hello World";

    // 2. Stimulus
    const msg2 = "Hello World";

    // 3. Observe the behavior
    expect(msg).toBe(msg2); 
});

})
