var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var shopping = /** @class */ (function () {
    function shopping(nome, local) {
        this.nome = nome;
        this.local = local;
    }
    return shopping;
}());
var tipo = /** @class */ (function (_super) {
    __extends(tipo, _super);
    function tipo(nome, local, tipo) {
        var _this = _super.call(this, nome, local) || this;
        _this.tipo = tipo;
        return _this;
    }
    return tipo;
}(shopping));
var loja = /** @class */ (function (_super) {
    __extends(loja, _super);
    function loja(nome, local, tipo, tamanho, produtomaisvendido, aberto24hrs) {
        var _this = _super.call(this, nome, local, tipo) || this;
        _this.tamanho = tamanho;
        _this.produtomaisvendido = produtomaisvendido;
        _this.aberto24hrs = aberto24hrs;
        return _this;
    }
    loja.prototype.displayLojaAtributos = function () {
        console.log("Nome: ".concat(this.nome));
        console.log("Localidade: ".concat(this.local));
        console.log("Tipo de Loja: ".concat(this.tipo));
        console.log("Tamanho de Loja: ".concat(this.tamanho, " metros quadrados"));
        console.log("Produto mais vendido: ".concat(this.produtomaisvendido));
        console.log("Aberta 24 horas: ".concat(this.aberto24hrs));
    };
    return loja;
}(tipo));
var barraShopping = new loja("Barra Shopping", "Rio de Janeiro", "Alimentação", 10000, "Hamburger", true);
barraShopping.displayLojaAtributos();
