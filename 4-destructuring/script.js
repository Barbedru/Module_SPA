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



function ajouterPerturbation({
  id,
  type = "restriction_ltc",
  dateDebut,
  dateFin,
  heureDebut = "00:00:00",
  heureFin = "00:00:00",
  latitude = -1,
  longitude = -1,
  texte = "",
  visibleTC = true
}) {
  const cle = "SEM_" + id;

  data[cle] = {
    id,
    type,
    dateDebut,
    dateFin,
    heureDebut,
    heureFin,
    latitude,
    longitude,
    texte,
    visibleTC
  };

    ajouterPerturbation({
        id: 200000,
        type: "restriction_ltc",
        dateDebut: "01/01/2025",
        dateFin: "02/01/2025",
        heureDebut: "08:00:00",
        latitude: 45.18,
        longitude: 5.72,
        texte: "Test perturbation"
    });

}

console.log(data["SEM_200000"]);