
class SuperDude {

    constructor( name, spells ){
        this.name = name
        this.spells = spells
    }
}

let superPowers = [
    { name:'Invisibility', spell: function(){ return `${this.name} hide from you`} },
    { name:'superSpeed', spell: function(){ return `${this.name} running from you`} },
    { name:'superSight', spell: function(){ return `${this.name} see you`} },
    { name:'superFroze', spell: function(){ return `${this.name} will froze you`} },
    { name:'superSkin',  spell: function(){ return `${this.name} skin is unbreakable`} },
];

let Luther = new SuperDude('Luther', superPowers);

Object.defineProperty(Luther, "name", {
    writable: false,
    configurable: false
})

Luther.spells.map(elem => {
    Object.defineProperty(Luther, elem.name, {value: elem.spell, writable: false, configurable: false})
})


Luther.superSight();
Luther.superSpeed();
Luther.superFroze();
Luther.Invisibility();
Luther.superSkin();
//------------------------------TASK 1---------------------------------------------



class SuperPower {

    constructor(name, spellFunc) {
        this.name = name
        this.spell = spellFunc
    }

}

let PowerArmor = new SuperPower("PowerArmor", function () {
    return `${this.name} максимум защиты!`
})

Object.defineProperty(PowerArmor, "cast", {value: PowerArmor.spell})
console.log(PowerArmor.cast())


//--------------------------TASK 2
