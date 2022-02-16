import "@testing-library/jest-dom";
import { getHeroByIdAsync } from "../../base/09-promesas";
import { heroes } from "../../data/heroes";



describe('Promises tests', () => {
  test("1. Should return Hero by ID",(done)=>{
    const id = 1;
    getHeroByIdAsync(id)
      .then(hero => {
        expect(hero).toBe(heroes[0])
        done()
      })
  });

  test("2. Should return: No get hero",(done)=>{
    const msg = 'No get hero';
    const id = 20;
    getHeroByIdAsync(id)
      .catch(error=>{
        expect(error).toBe(msg)
        done()
      })
  })

});
