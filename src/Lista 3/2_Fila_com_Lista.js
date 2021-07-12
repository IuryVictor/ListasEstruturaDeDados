import Lista from "../Lista";

class Fila {
    constructor(){
        this.l = new Lista();
    }

    enqueue(dado){
        this.l.add(dado);
    }

    dequeue(){
        if(this.isEmpty()){
            throw new Error("Fila vazia");
        }

        this.l.removeEnd();
    }

    isEmpty(){
        return this.l.isEmpty();
    }

    front(){
        if(this.isEmpty()){
            throw new Error("Fila vazia");
        }

        return this.l.last();
    }

    size(){
        return this.l.size();
    }

    clear(){
        this.l.clear();
    }

    toString(){
        return this.l.toString();
    }
}

export default Fila;