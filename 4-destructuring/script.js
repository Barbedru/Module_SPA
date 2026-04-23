//4.1 Découverte

const [a, b, c] = [1, 2, 3, 4];
console.log(a);
console.log(b);
console.log(c);

const {first, last, age} = {first: 'Paul', last: 'Henta', age: 35};
console.log(first);
console.log(last);
console.log(age);

//4.2 Application

console.log(data);

//for (const perturbation of Object.values(data)) {
//    const {texte, dateDebut, dateFin} = perturbation;

//    console.log(texte);
//    console.log(dateDebut);
//    console.log(dateFin);
//}



function newPerturbation({
                             dateDebut,
                             dateFin,
                             texte,
                             plan,
                             type ='restriction_ltc',
                             heureDebut='00:00:00',
                             heureFin='00:00:00',
                             latitude=-1,
                             longitude=-1,
                             weekEnd='2',
                             listeLigneArret="SEM_B",
                             visibleTC=true,
                             visibleVoiture=false}
){

    data['SEM'+Date.now()]= {
        dateDebut:dateDebut,
        type: type,
        dateFin:dateFin,
        texte:texte,
        plan:plan,
        heureDebut:heureDebut,
        heureFin:heureFin,
        latitude:latitude,
        longitude:longitude,
        weekEnd:weekEnd,
        listeLigneArret:listeLigneArret,
        visibleTC:visibleTC,
        visibleVoiture:visibleVoiture,
    }
}
newPerturbation({
    dateDebut:"23/04/2026 16:00",
    dateFin:"23/04/2026 10:00",
    texte:"Nouvelle perturbation signalée",
    plan:"blabla"})