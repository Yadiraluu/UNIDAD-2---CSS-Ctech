class Person {
    #cellphone; 
    constructor(firstName, lastName, age, weight, height, hobbies, cellphone) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.weight = weight; 
        this.height = height;
        this.hobbies = hobbies;
        this.#cellphone = cellphone;
    }

    showCellphone() {
        return this.#cellphone; 
    }

    // método //
    sayhello() {
        console.log(`Hola, mi nombre es ${this.firstName} ${this.lastName}`);
    }

    introduce() {
        console.log(`tengo ${this.age} años, mido ${this.height} metros, peso ${this.weight} kg y me gusta ${this.hobbies}`);
    }
}

let person1 = new Person("Yadira", "Luna", 16, 63, 1.63, ["pintar", "Leer", "Programar"], "123-456-7890");
console.log(person1.showCellphone());
console.log(person1);
console.log(person1.firstName);

class Chef extends Person {
    constructor(firstName, lastName, age, weight, height, hobbies, cellphone, specialty, yearsOfExperience) {
        super(firstName, lastName, age, weight, height, hobbies, cellphone);
        this.specialty = specialty;
        this.yearsOfExperience = yearsOfExperience;
    }

    cook() {
        console.log(
            `Soy ${this.firstName} y estoy cocinando, mis años de experiencia son ${this.yearsOfExperience} y mi especialidad es ${this.specialty}`
        );
    }
}

let chef1 = new Chef("Gordon", "Ramsay", 54, 80, 1.89, ["Cocinar", "Ver TV"], "987-654-3210", "Cocina Británica", 30);
console.log(chef1.firstName);
console.log(chef1.specialty);
chef1.sayhello();
chef1.cook();
//  polimorfismo = sobreescribir un método de la clase padre //
chef1.introduce();
person1.introduce();