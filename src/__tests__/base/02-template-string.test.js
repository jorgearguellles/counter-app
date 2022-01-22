import "@testing-library/jest-dom";
import getHi from "../../base/02-template-string";

describe("02-template-string.js",()=>{

  test("1. Without argument getHi() by default should return: Hello Carlos",()=>{
    const hi = getHi();
    // console.log(hi);
    expect(hi).toBe(`Hello Carlos`)
  });

  test("2. getHi(Jorge) should return: Hello Jorge",()=>{
    const name = "Jorge";
    const hi = getHi(name);
    // console.log(hi);
    expect(hi).toBe(`Hello ${name}`)
  });

});