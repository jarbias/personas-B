export default class Programa {
    constructor() {

    this.acumEd = 0;
    this.contPersonas = 0;
    this.Mayored= 0;    
    }

    procesarPersonas(per) {

        this.contPersonas ++;
        this.acumEd += per.edad;

        if(per.sexo == 'F' && per.edad > this.Mayored){
            this.Mayored = per.edad;
        }
 

    }

    promedioEd() {
        return this.acumEd / this.contPersonas;
    }

    mayorf() {
        return this.Mayored;
    }
}