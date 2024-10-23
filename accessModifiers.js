/*
On our class diagram, access modifiers are denoted with a + (public) or - (private).
Most of the time our properties and methods will be public.
But sometimes, we have a property or method that is private. Why?
- The property / method contains some sensitive data / formula. For example, a cost price, markup percentage, or secret algorithm.
- The property / method never needs to be used outside of the class it's declared within. These are often helper methods that are unnecessary to expose.
- We have a property whose value we don't want to be directly modified. We can make the property private, and create public getter and setter methods that strictly control how that property can be modified.

To create a private property or method in a JavaScript class, we can prefix the name with a #.
*/

class BankAccount {
    #balance // private

    constructor() {
        this.#balance = 0 // initialize balance to 0
    }

    // getters
    displayBalance() {
        console.log(`Your balance: ${this.#balance} kr.`)
    }

    // setters
    deposit(amount) {
        this.#balance += amount
    }

    withdraw(amount) {
        this.#balance -= amount
    }
}

const savingsAccount = new BankAccount()

savingsAccount.displayBalance()
savingsAccount.deposit(150)
savingsAccount.displayBalance()
savingsAccount.withdraw(50)
savingsAccount.displayBalance()