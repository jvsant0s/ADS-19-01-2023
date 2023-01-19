class Carro {
    private modelo: string;
    private vidroeletrico: boolean;
    private ABS: boolean;
    private tracao4rodas: boolean;
    private tipodecombustivel: string;

    constructor(modelo: string, vidroeletrico: boolean, ABS: boolean, tracao4rodas: boolean, tipodecombustivel: string) {
        this.modelo = modelo;
        this.vidroeletrico = vidroeletrico;
        this.ABS = ABS;
        this.tracao4rodas = tracao4rodas;
        this.tipodecombustivel = tipodecombustivel;
    }

    activateTracao4rodas() {
        this.tracao4rodas = true;
        console.log("Tração nas 4 rodas ativada.");
    }

    deactivateTracao4rodas() {
        this.tracao4rodas = false;
        console.log("Tração nas 4 rodas desativada.");
    }

    switchTipodecombustivel(novotipocombustivel: string) {
        this.tipodecombustivel = novotipocombustivel;
        console.log(`Tipo de combustivel mudou para ${novotipocombustivel}.`);
    }

    activateABS() {
        this.ABS = true;
        console.log("Freio ABS ativado.");
    }
}

class Ford extends Carro {
    constructor(modelo: string, vidroeletrico: boolean, ABS: boolean, tracao4rodas: boolean, tipodecombustivel: string) {
        super(modelo, vidroeletrico, ABS, tracao4rodas, tipodecombustivel);
    }
}

const mustangGT = new Ford("Mustang GT", true, true, false, "Gasolina");
mustangGT.activateTracao4rodas();
mustangGT.switchTipodecombustivel("GNV");
mustangGT.activateABS();