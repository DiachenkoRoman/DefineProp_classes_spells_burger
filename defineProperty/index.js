class Dog {
    constructor(name, breed, weight, good) {
        this.name = name
        this.breed = breed
        this.weight = weight
        this.isGoodBoy = good
    }
}

let Sebek = new Dog("Sebek", "Husky", "25", false);

Object.defineProperties(Sebek, {
    name: {
        configurable: false
    },
    breed: {
        configurable: false,
        writable: false
    },
    isGoodBoy: {
        enumerable: false
    }
})

console.log(Sebek)
