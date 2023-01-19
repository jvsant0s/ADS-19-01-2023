class shopping {
    nome: string;
    local: string;

    constructor(nome: string, local: string) {
        this.nome = nome;
        this.local = local;
    }
}

class tipo extends shopping {
    tipo: string;

    constructor(nome: string, local: string, tipo: string) {
        super(nome, local);
        this.tipo = tipo;
    }
}

class loja extends tipo {
    tamanho: number;
    produtomaisvendido: string;
    aberto24hrs: boolean;

    constructor(nome: string, local: string, tipo: string, tamanho: number, produtomaisvendido: string, aberto24hrs: boolean) {
        super(nome, local, tipo);
        this.tamanho = tamanho;
        this.produtomaisvendido = produtomaisvendido;
        this.aberto24hrs = aberto24hrs;
    }

    displayLojaAtributos() {
        console.log(`Nome: ${this.nome}`);
        console.log(`Localidade: ${this.local}`);
        console.log(`Tipo de Loja: ${this.tipo}`);
        console.log(`Tamanho de Loja: ${this.tamanho} metros quadrados`);
        console.log(`Produto mais vendido: ${this.produtomaisvendido}`);
        console.log(`Aberta 24 horas: ${this.aberto24hrs}`);
    }
}

const barraShopping = new loja("Barra Shopping", "Rio de Janeiro", "Alimentação", 10000, "Hamburger", true);
barraShopping.displayLojaAtributos();
