import { getHeroById, getHeroesByOwner } from "../../base/08-imp-exp";
import { heroes } from "../../data/heroes";


describe("08-imp-exp: hetHeroByID()", ()=>{

    // id not exist
    // ID right but no exist a hero
    // id right and hero exist

  test("1. Should return a hero by ID", ()=>{
    const id = 1;
    const hero = getHeroById(id);
    const heroData = heroes.find(he => he.id === id);
    expect(hero).toEqual(heroData);
  });

  test("2. Should return a undefined by ID non-existent", ()=>{
    const id = 10;
    const hero = getHeroById(id);
    expect(hero).toBeUndefined();
  });

})

describe("08-imp-exp: getHeroesByOwner()",()=>{
  test("1. Should return a Marvel heroes Array",()=>{
    const owner = "Marvel";
    const heroesData = heroes.filter( (hero) => hero.owner === owner );
    const hero = getHeroesByOwner(owner)
    expect(hero).toEqual(heroesData)
  })

  test("2. Should return a Marvel heroes Array length = 2",()=>{
    const owner = "Marvel";
    const hero = getHeroesByOwner(owner)
    expect(hero.length).toBe(2)
  })

  test("3. Should return [] with Owner non-exist",()=>{
    const owner = "Pokemon";
    const hero = getHeroesByOwner(owner);
    expect(hero).toEqual([]);
  })
})