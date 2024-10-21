class Animal {
    // properties
    multiplier

    // constructor
    constructor(name, age) {
        this.name = name
        this.age = age
    }

    // methods
    compareAge(anotherAnimal) {
        let thisHumanYears = this.convertToHumanYears()
        let otherHumanYears = anotherAnimal.convertToHumanYears()

        if (thisHumanYears === otherHumanYears)
            console.log(`${this.name} and ${anotherAnimal.name} are both ${thisHumanYears} in human years`)
        else if (thisHumanYears > otherHumanYears)
            console.log(`${this.name} is older than ${anotherAnimal.name}`)
        else
            console.log(`${anotherAnimal.name} is older than ${this.name}`)
    }

    convertToHumanYears() {
        return this.age * this.multiplier
    }
}

class Dog extends Animal {
    constructor(name, age) {
        super(name, age)
        this.multiplier = 7
    }

    bark() {
        console.log(`${this.name} barks! 🐶`)
    }
}

class Cat extends Animal {
    constructor(name, age) {
        super(name, age)
        this.multiplier = 6
    }

    meow() {
        console.log(`${this.name} meows! 😺`)
    }
}

// class representing a person
class Human extends Animal {
    constructor(name, age) {
        super(name, age)
        this.multiplier = 1
    }

    existAsHuman() {
        console.log(`${this.name} is trying to survive life 🧟`)
    }
}

// create instances of the Person class:

const warren = new Human("Warren", 32)
const mads = new Human("Mads", 30)

warren.compareAge(mads)
mads.compareAge(warren)
// warren.compareAge({ name: "David", age: 32}) // using an object literal

// Let's also create two new classes: Cat and Dog
// Converting a cat's age to human age is *6
// Converting a dog's age to human age is *7
// Converting a human's age to human age is *1

// You should be able to compare:
// Cats and Dogs
// Dogs and Humans
// Humans and Cats

// All comparisons will be in human years

const yoda = new Cat("Yoda", 5) // 5 * 6 = 30
const ella = new Dog("Ella", 3)
const lily = new Human("Lily", 28)

const myAnimals = [ warren, mads, yoda, ella, lily ]

// mads.compareAge(yoda)
// yoda.compareAge(lily)
// ella.compareAge(lily)
// ella.compareAge(yoda)

for (let i = 0; i < myAnimals.length - 1; i++) {
    myAnimals[i].compareAge(myAnimals[i + 1])
}

let count = 1
for (const animal of myAnimals) {
    console.log(animal.name + ": " + animal.age)
}

yoda.meow()
ella.bark()
warren.existAsHuman()

