class Fila {
    constructor(size = 10){
        this.maxSize = size;
        this.dados = [];
        this.inicio = 0;
        this.fim = 0;
    }

    enqueue(dado){
        if(this.isFull()){
            throw new Error("Fila cheia");
        }

        this.dados[this.fim] = dado;
        this.fim++;
    }

    dequeue(){
        if(this.isEmpty()){
            throw new Error("Fila vazia");
        }

        this.inicio++;
    }

    front(){
        if(this.isEmpty()){
            throw new Error("Fila vazia");
        }

        return this.dados[this.inicio];
    }

    size(){
        return this.fim - this.inicio;
    }

    isEmpty(){
        return this.fim - this.inicio === 0;
    }

    isFull(){
        return this.fim - this.inicio === this.maxSize;
    }

    clear(){
        this.fim = this.inicio;
    }

    toString(){
        let texto = "[ ";

        for(let i = this.inicio; i < this.fim; i++){
            texto += this.dados[i] + " ";
        }

        texto += "]";

        return texto;
    }
}

export default Fila;