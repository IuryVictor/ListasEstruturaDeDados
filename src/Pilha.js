class Pilha {
    constructor(size = 10){
        this.maxSize = size;
        this.dados = [];
        this.topo = -1;
    }

    push(dado){
        if(this.isFull()){
            throw new Error("Stack overflow");
        }

        this.topo++;
        this.dados[this.topo] = dado;
    }

    pop(){
        if(this.isEmpty()){
            throw new Error("Stack underflow");
        }

        this.topo--;
    }

    top(){
        if(this.isEmpty()){
            throw new Error("Pilha vazia");
        }

        return this.dados[this.topo];
    }

    isFull(){
        if(this.size() === this.maxSize){
            return true;
        }

        return false;
    }

    isEmpty(){
        if(this.size() === 0){
            return true;
        }

        return false;
    }

    size(){
        return this.topo + 1;
    }

    clear(){
        this.topo = -1;
    }

    toString(){
        let texto = "[ ";

        for(let i = 0; i < this.size(); i++){
            texto += this.dados[i] + " ";
        }

        texto += "]";
        
        return texto;
    }
}

export default Pilha;