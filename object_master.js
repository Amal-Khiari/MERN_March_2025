const pokemon = Object.freeze([
    { "id": 1,   "name": "Bulbasaur",  "types": ["poison", "grass"] },
    { "id": 5,   "name": "Charmeleon", "types": ["fire"] },
    { "id": 9,   "name": "Blastoise",  "types": ["water"] },
    { "id": 12,  "name": "Butterfree", "types": ["bug", "flying"] },
    { "id": 16,  "name": "Pidgey",     "types": ["normal", "flying"] },
    { "id": 23,  "name": "Ekans",      "types": ["poison"] },
    { "id": 24,  "name": "Arbok",      "types": ["poison"] },
    { "id": 25,  "name": "Pikachu",    "types": ["electric"] },
    { "id": 35,  "name": "Clefairy",   "types": ["normal"] },
    { "id": 37,  "name": "Vulpix",     "types": ["fire"] },
    { "id": 52,  "name": "Meowth",     "types": ["normal"] },
    { "id": 63,  "name": "Abra",       "types": ["psychic"] },
    { "id": 67,  "name": "Machamp",    "types": ["fighting"] },
    { "id": 72,  "name": "Tentacool",  "types": ["water", "poison"] },
    { "id": 74,  "name": "Geodude",    "types": ["rock", "ground"] },
    { "id": 87,  "name": "Dewgong",    "types": ["water", "ice"] },
    { "id": 98,  "name": "Krabby",     "types": ["water"] },
    { "id": 115, "name": "Kangaskhan", "types": ["normal"] },
    { "id": 122, "name": "Mr. Mime",   "types": ["psychic"] },
    { "id": 133, "name": "Eevee",      "types": ["normal"] },
    { "id": 144, "name": "Articuno",   "types": ["ice", "flying"] },
    { "id": 145, "name": "Zapdos",     "types": ["electric", "flying"] },
    { "id": 146, "name": "Moltres",    "types": ["fire", "flying"] },
    { "id": 148, "name": "Dragonair",  "types": ["dragon"] }
]);

// 1. Pokémon with id divisible by 3
const divBy3 = pokemon.filter(p => p.id % 3 === 0);
console.log("All pokimon with id divible by 3 are : ")
console.log(divBy3)


// 2. Fire-type Pokémon
const fireTypes = pokemon.filter(p => p.types.includes('fire'));
console.log("All Fire-type Pokémon are : ")
console.log(divBy3)


// 3. Pokémon with more than one type
const multiTypes = pokemon.filter(p => p.types.length > 1);
console.log("All Pokémon with more than one type are : ")
console.log(multiTypes)

// 4. Names of all Pokémon
const names = pokemon.map(p => p.name);
console.log("Names of all Pokémon are : ")
console.log(names)

// 5. Names of Pokémon with id > 99
const namesOver99 = pokemon.filter(p => p.id > 99).map(p => p.name);
console.log("Names of Pokémon with id > 99 are : ")
console.log(namesOver99)


// 6. Names of Pokémon with only poison type
const poisonOnly = pokemon.filter(p => p.types.length === 1 && p.types[0] === 'poison').map(p => p.name);
console.log("Names of Pokémon with only poison type are : ")
console.log(poisonOnly)

// 7. First type of Pokémon with second type flying
const flyingSecond = pokemon.filter(p => p.types[1] === 'flying').map(p => p.types[0]);
console.log("First type of Pokémon with second type flying are : ")
console.log(flyingSecond)

// 8. Count of normal-type Pokémon
const normalCount = pokemon.filter(p => p.types.includes('normal')).length;
console.log(" All normal-type Pokémon are : ")
console.log(normalCount)

// 9. All Pokémon except id 148
const exclude148 = pokemon.filter(p => p.id !== 148);
console.log("All Pokémon except id 148 are : ")
console.log(exclude148)

// 10. All Pokémon with type replacement for id 35
const replacedNormal = pokemon.map(p => {
    if (p.id === 35) {
        return { ...p, types: p.types.map(t => t === 'normal' ? 'fairy' : t) };
    }
    return p;
});
console.log("All Pokémon with type replacement for id 35 are : ")
console.log(replacedNormal)