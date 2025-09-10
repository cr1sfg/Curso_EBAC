class Carro {
    constructor(modelo, anoDeFabricacao, valorCarroZero) {
        this.modelo = modelo;
        this.anoDeFabricacao = anoDeFabricacao;
        this.valorCarroZero = valorCarroZero;
    }
}

class Peugeot extends Carro {
    constructor(modelo, anoDeFabricacao, valorCarroZero, marca){
        super(modelo, anoDeFabricacao, valorCarroZero);

        this.marca = marca;
    }
}

class valorCarro extends Carro {
    constructor(modelo, anoDeFabricacao, valorCarroZero, valorCarroUsado){
        super(modelo, anoDeFabricacao, valorCarroZero);

        this.valorCarroUsado = valorCarroUsado;
    }
}

const carro1 = new Carro ("208", 2021, 80000);
const peugeot1 = new Peugeot("208", 2021, 80000, "Peugeot");
const valorCarro1 = new valorCarro("3008", 2024, 100000, 90000);