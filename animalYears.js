// Model classes (they're modeling something from the real world, or from our business environment)
class Animal {
    // properties
    multiplier = 1

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

    displayDetails() {
        console.log("I am an animal")
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

    displayDetails() {
        console.log("I am a dog I like bones 🦴")
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

// Now let's create a factory class
// It should have a method that creates animals for us
// And we don't have to manually create animals ourself, like we did before

// This is our factory class
class AnimalFactory {
    constructor() {}

    // This is our factory method
    createAnimal(type, name, age) {

        /*
        if (type === "human") {
            // create a human
            return new Human(name, age)
        } else if (type === "cat") {
            // create a cat
            return new Cat(name, age)
        } else if (type === "dog") {
            // create a dog
            return new Dog(name, age)
        } else {
            // create a mutant (Animal)
            return new Animal(name, age)
        }
        */

        switch (type) {
            case "human": return new Human(name, age); break; // break; statement is unnecessary because return already breaks us out of the switch
            case "cat": return new Cat(name, age)
            case "dog": return new Dog(name, age)

            default: return new Animal(name, age)
        }
    }
}

// create instances of the Person class:

// const warren = new Human("Warren", 32)
// const mads = new Human("Mads", 30)
// const yoda = new Cat("Yoda", 5) // 5 * 6 = 30
// const ella = new Dog("Ella", 3)
// const lily = new Human("Lily", 28)

// Redo the above implementation using the factory pattern:
const factory = new AnimalFactory()
const warren = factory.createAnimal("human", "Warren", 32)
const mads = factory.createAnimal("human", "Mads", 30)
const yoda = factory.createAnimal("cat", "Yoda", 4)
const ella = factory.createAnimal("dog", "Ella", 3)
const lily = factory.createAnimal("human", "Lily", 28)
const mutant = factory.createAnimal("zombie", "George", 115)

console.log(warren)
console.log(mads)
console.log(yoda)
console.log(ella)
console.log(lily)
console.log(mutant)


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


const myAnimals = [ warren, mads, yoda, ella, lily ]

// mads.compareAge(yoda)
// yoda.compareAge(lily)
// ella.compareAge(lily)
// ella.compareAge(yoda)

// Polymorphism, one of the core pillars of OOP
// states that we can treat child objects as their parent type:
for (let i = 0; i < myAnimals.length - 1; i++) {
    myAnimals[i].compareAge(myAnimals[i + 1])
}

let count = 1
for (const animal of myAnimals) {
    // console.log(animal.name + ": " + animal.age)
}

yoda.meow()
ella.bark()
warren.existAsHuman()

