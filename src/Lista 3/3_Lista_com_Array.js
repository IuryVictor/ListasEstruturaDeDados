class Node {
	constructor(dado) {
		this.dado = dado;
	}
}

class Lista {
    constructor(){
        this.dados = [];
    }

    add(dado){
        this.dados.unshift(new Node(dado));
    }

    append(dado){
        this.dados.push(new Node(dado));
    }

    removeBeginning(){
        this.dados.shift();
    }

    removeEnd(){
        this.dados.pop();
    }

    isEmpty(){
        return this.size() === 0;
    }

    last(){
        if(this.isEmpty()){
            throw new Error("Lista vazia");
        }

        return this.dados[this.size() - 1].dado;
    }

    size(){
        return this.dados.length;
    }

    addAt(posicao, dado){
        if(posicao >= this.size()){
            this.append(dado);
        } else {
            if(posicao <= 0){
                this.add(dado);
            } else {
                let no_aux = this.dados[posicao];
                this.dados[posicao] = new Node(dado);

                for(let i = posicao + 1; i < this.size(); i++){
                    let no_aux2 = this.dados[i];
                    this.dados[i] = no_aux;
                    no_aux = no_aux2;
                }

                this.append(no_aux.dado);
            }
        }
    }

    search(dado){
        if(this.isEmpty()){
            return false;
        } else {
            for(let i = 0; i < this.size(); i++){
                if(this.dados[i].dado === dado){
                    return true;
                }
            }

            return false;
        }
    }

    clear(){
        this.dados = [];
    }

    toString(){
        let texto = "[ ";

        for(let i = 0; i < this.size(); i++){
            texto += this.dados[i].dado + " ";
        }

        texto += "]";

        return texto;
    }
}

export default Lista;