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
var Carro = /** @class */ (function () {
    function Carro(modelo, vidroeletrico, ABS, tracao4rodas, tipodecombustivel) {
        this.modelo = modelo;
        this.vidroeletrico = vidroeletrico;
        this.ABS = ABS;
        this.tracao4rodas = tracao4rodas;
        this.tipodecombustivel = tipodecombustivel;
    }
    Carro.prototype.activateTracao4rodas = function () {
        this.tracao4rodas = true;
        console.log("Tração nas 4 rodas ativada.");
    };
    Carro.prototype.deactivateTracao4rodas = function () {
        this.tracao4rodas = false;
        console.log("Tração nas 4 rodas desativada.");
    };
    Carro.prototype.switchTipodecombustivel = function (novotipocombustivel) {
        this.tipodecombustivel = novotipocombustivel;
        console.log("Tipo de combustivel mudou para ".concat(novotipocombustivel, "."));
    };
    Carro.prototype.activateABS = function () {
        this.ABS = true;
        console.log("Freio ABS ativado.");
    };
    return Carro;
}());
var Ford = /** @class */ (function (_super) {
    __extends(Ford, _super);
    function Ford(modelo, vidroeletrico, ABS, tracao4rodas, tipodecombustivel) {
        return _super.call(this, modelo, vidroeletrico, ABS, tracao4rodas, tipodecombustivel) || this;
    }
    return Ford;
}(Carro));
var mustangGT = new Ford("Mustang GT", true, true, false, "Gasolina");
mustangGT.activateTracao4rodas();
mustangGT.switchTipodecombustivel("GNV");
mustangGT.activateABS();
