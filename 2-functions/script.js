//2.1 Fonctions simples
const sayHello = () => {
    console.log('Hello')
};

const sayMyName = (first, last) => {
    console.log(first, last)
};

const sayMyAge = (age) => {
    console.log('You are ' + age + ' years old')
};

sayHello();
sayMyName('Odile', 'Crok');
sayMyAge(23);

//----------------------//
//2.2 this

const object = {
    color: 'red',
    shape: 'circle',
    threeDimensions: false,
    showThis: function() {
        console.log(this)
    }
};

// La conversion est faisable syntaxiquement, mais casse la logique du code (car this ne pointera pas vers l'object).

object.showThis() ;

//----------------------//
//2.3 Application

const odile = {
    name: {
        first: 'Odile',
        last: 'Crok'
    },
    age: 23,
    sayHello: () => console.log( 'Hello'),  // ici pas de this donc arrow function possible

    sayMyName: function() {                       // ici présence on a besoin de this donc pas de arrow function possible
        console.log(this.name.first, this.name.last)
    },
    sayMyAge: function () {                      //// ici présence on a besoin de this donc pas de arrow function possible
        console.log(this.age + ' ans')
    }
};

odile.sayHello()
odile.sayMyName()
odile.sayMyAge()
