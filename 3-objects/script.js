//3.1 Object.keys

const bus = {
    vehicle: 'Urbanway CNG 12',
    id: 3221,
    line: 'C6',
    paint: 'chrono',
    garage: {
        name: 'Sassenage',
        place: '47'
    },
    equipments: ['sae', 'tft', 'speech']
};



//Object.keys(bus).forEach(key => {
//   console.log(key + " : " + bus[key]);
//});

function afficherClesValeurs(obj, prefixe = '') {
    Object.keys(obj).forEach(cle => {
        const valeur = obj[cle];
        const chemin = prefixe ? `${prefixe}.${cle}` : cle;

        if (typeof valeur === 'object' && valeur !== null) {
            afficherClesValeurs(valeur, chemin);
        } else {
            console.log(`${chemin} : ${valeur}`);
        }
    });
}




//3.2 Object.values

console.log(bus);

Object.values(data).forEach(perturbation => {
    console.log(perturbation.texte);
});
