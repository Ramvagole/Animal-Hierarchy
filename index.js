class Animal{
    #type;
    constructor(name){
        this.#type=name;
    }
    get Type(){
        return this.#type;
    }
}

class Mammal extends Animal{
    constructor(){
        super("Mammal")
    }
}

class Bird extends Animal{
    constructor(){
        super("Bird")
    }
}

class Lion extends Mammal{
    #maneColor;
    constructor(color="Brown"){
        super()
        this.#maneColor=color;
    }
    get maneColor(){
        return this.#maneColor;
    }
    set maneColor(v){
        this.#maneColor=v;
    }
}

class Cow extends Mammal{
    #milkProduction;
    constructor(milkProduction="High"){
        super()
        this.#milkProduction=milkProduction;

    }
    get milkProduction(){
        return this.#milkProduction;
    }
    set milkProduction(v){
        this.#milkProduction=v;
    }
}

class Eagle extends Bird{
    #wingspan;
    constructor(wingspan="Large"){
        super()
        this.#wingspan=wingspan
    }
    get wingspan(){
        return this.#wingspan;
    }
    set wingspan(v){
        this.#wingspan=v
    }
}

class Sparrow extends Bird{
    #wingspan;
    constructor(wingspan="Small") {
        super()
        this.#wingspan=wingspan;
    }
    get wingspan(){
        return this.#wingspan;
    }
    set wingspan(v){
        this.#wingspan=v;
    }
}