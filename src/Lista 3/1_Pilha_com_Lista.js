import Lista from "../Lista";

class Pilha {
    constructor(){
        this.l = new Lista();
    }

    push(dado){
        this.l.append(dado);
    }

    pop(){
        if(this.isEmpty()){
            throw new Error("Stack underflow");
        }

        this.l.removeEnd();
    }

    top(){
        if(this.isEmpty()){
            throw new Error("Pilha vazia");
        }

        return this.l.last();
    }

    isEmpty(){
        return this.l.isEmpty();
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

export default Pilha;