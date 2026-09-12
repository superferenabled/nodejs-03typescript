"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const heroes = [
    {
        id: 1,
        name: 'spiderman',
        owner: 'marvel',
    },
    {
        id: 2,
        name: 'ironman',
        owner: 'marvel',
    },
    {
        id: 3,
        name: 'batman',
        owner: 'dc',
    },
];
const findHeroById = (id) => {
    return heroes.find(hero => hero.id === id);
};
const hero = findHeroById(1);
console.log(hero?.name ?? 'no hay hiro');
//# sourceMappingURL=app.js.map