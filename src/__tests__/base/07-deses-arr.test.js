import { returnArray } from "../../base/07-deses-arr";

describe('07-deses-arr',()=>{
  test("1. Should return an Array: ['ABC', 123]",()=>{
    const arrayTest = ['ABC', 123];
    const arr = returnArray();
    expect(arr).toEqual(arrayTest);
  });

  test("2. Should return an Array with Characters & Numbers: 'ABC', 123 ",()=>{
    const [chars, numbers] = returnArray();
    
    expect(chars).toEqual('ABC');
    expect( typeof chars).toEqual('string');

    expect(numbers).toEqual(123);
    expect(typeof numbers).toEqual('number');
  });

})