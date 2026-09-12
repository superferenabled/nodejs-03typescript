import {type Hero, heroes} from "../data/heroes.ts";

export const findHeroById = (id: number) => {
    return heroes.find ((hero: Hero) => hero.id === id);
};


