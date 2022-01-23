import { getUserActive, getUser } from "../../base/05-funciones";

describe("05-functions: getUser()",()=>{
  test("1. Should return a Object",()=>{
    const objTest = {
      uid: 'ABC123',
      username: 'El_Papa1502',
    }
    const user = getUser();
    expect(user).toEqual(objTest);
  });
});

describe("05-functions: getUserActive()",()=>{
  test("1. Without args should return a Object and attribute username: Carlos ",()=>{
    const objTest = {
      uid: 'ABC567',
      username: 'Carlos',
    }
    const userActive = getUserActive();
    // console.log(userActive)
    expect(userActive).toEqual(objTest);
  });

  test("2. Should return a Object and attribute username: Jorge ",()=>{
    const name = "Jorge";
    const objTest = {
      uid: 'ABC567',
      username: name,
    }    
    const userActive = getUserActive(name);
    // console.log(userActive)
    expect(userActive).toEqual(objTest);
  });
});