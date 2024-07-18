export default class Persona {
    constructor(n, ed, s) {
        this.nombre = n;
        this.edad = ed;
        this.sexo = s;
    }

    set nombre(n) {
        this._nombre = n;
    }

    get nombre() {
        return this._n;
    }

    set edad(ed) {
        this._edad = ed;
    }

    get edad() {
        return this._edad;
    }

    set sexo(s) {
        this._sexo = s;
    }

    get sexo() {
        return this._sexo;
    }
}