import Lista from "../Lista";

class Substring{
    constructor(palavra){
        this.lista = new Lista();
        this.listar(palavra);
    }

    listar(palavra){
        for(let i = 0; i < palavra.length; i++){
            this.lista.append(palavra.charAt(i));
        }
    }

    substring(posA, posB){
        let aux = new Lista();

        for(let i = 0; i < posA; i++){
            this.lista.removeBeginning();
        }

        for(let i = posA; i <= posB; i++){
            aux.append(this.lista.removeBeginning());
        }

        return aux;
    }
}

export default Substring;