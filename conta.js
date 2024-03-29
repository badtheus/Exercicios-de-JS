class Contabancaria {
    constructor(agencia, numero, tipo ) {
        this.agencia = agencia;
        this.numero = numero;
        this.tipo = tipo;
        this._saldo = 0
    }

    get saldo() {
        return this._saldo;
    }


    set saldo(valor) {
        this._saldo = valor;
    }

    sacar(valor){
        if (valor > this._saldo){
          return "Operação Negada";  
        }
        this._saldo = this._saldo - valor;

        return this.saldo;
    }
    
    depositar(valor){
        this._saldo = this._saldo + valor
        
        return this._saldo;
    }
}

    class ContaCorrente extends Contabancaria {
        constructor(agencia, numero, cartaoCredito) {
            super(agencia, numero );
            this.tipo = 'corrente';
            this.cartaoCredito = cartaoCredito;
        }

        get cartaoCredito() {
            return this._cartaoCredito;
        }

        set cartaoCredito(valor) {
            this._cartaoCredito = valor

    }
}

class contaPoupanca extends Contabancaria {
    constructor(agencia, numero){
        super(agencia, numero);
        this.tipo = 'poupança';
    }
}

class contaUniversitaria extends Contabancaria {
    constructor(agencia, numero ){
        super(agencia, numero );
        this.tipo = 'universitária';
    }

    sacar(valor){
        if(valor > 500){
            return "Operação Negada!"
        }

        this._saldo = this._saldo - valor;
    }
}