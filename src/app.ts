import {findHeroById} from "./services/heroes.service.ts";

const hero = findHeroById(1);

console.log(hero?.name ?? 'no hay hiro');