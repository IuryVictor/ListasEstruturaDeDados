import Lista from "../Lista";

class Inverte {
    inverter(lista){
        let aux = new Lista();
        let tam = lista.size();

        for(let i = 0; i < tam; i++){
            aux.add(lista.removeBeginning())
        }

        return aux;
    }
}

export default Inverte;