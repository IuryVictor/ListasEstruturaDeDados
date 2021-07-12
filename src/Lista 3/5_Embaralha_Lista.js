class Embaralha{
    embaralhar(lista){
        let aux  = [];
        let tam = lista.size();

        for(let i = 0; i < tam; i++){
            aux[i] = lista.removeEnd();
        }

        for(let i = tam - 1; i > 0; i--){
            const j = Math.floor(Math.random() * (i + 1));
            [aux[i], aux[j]] = [aux[j], aux[i]];
        }

        lista.clear();

        for(let i = 0; i < tam; i++){
            lista.add(aux[i]);
        }

        return lista;
    }
}

export default Embaralha;