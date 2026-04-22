//1.1 Types simples

const name = 'Jacques';
let age = 80;
let useless = 'something';

// 2 - var permet de définir une variable globale ou locale à une function sans distinction des blocs

// 2 - let per de déclarer des variables dont la portée est limitée à celle du bloc dans lequel elles sont déclarées.

// 4 -  const permet de créer une constante nommée accessible uniquement en lecture. L'identifiant ne peut pas être réafecté.
//la valeur d'une constant ne peut pas être modifiée par des réaffectations ultérieures.

console.log(name, age, useless);

age += 1;
useless = 14;

console.log(name, age, useless);

//----------------------//
//1.2 Tableaux

const fruits = ['apple', 'pear', 'cherry'];
const vegetables = ['potato', 'curlyflower', 'tomato'];

// const interdit la réassignation d'une variable, mais pas la mutation de son contenu.
// ici .push() et .pop() modifient le tableau existant sans en créer un nouveau

console.log(fruits, vegetables);

fruits.push('banana');
vegetables.pop();

console.log(fruits, vegetables);


//----------------------//
//1.3 Objets

const settings = {
    sound: true,
    music: false,
    graphics: 'high',
    resolution: [1920, 1080]
};
// settings n'est jamais réassigné donc const ok

let savedGame = {
    time: 384,
    score: 47,
    opponent: 'Lolo'
};

// en revanche la ligne saveGame = {} remplace la variable saveGame par un nouvel objet. donc const n'est pas permis ici

console.log(settings, savedGame);

savedGame = {};
settings.music = true;
settings.resolution = [3840, 2160];

console.log(settings, savedGame);
