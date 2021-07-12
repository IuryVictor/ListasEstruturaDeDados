import Lista from "../../src/Lista 3/3_Lista_com_Array";

let l;

beforeEach(
    () => {
        l = new Lista();
    }
);

test("Lista vazia", () => {
    expect(l.isEmpty()).toBe(true);
})

test("Tamanho da lista", () => {
    l.add(1);
    l.add(2);
    l.add(3);
    expect(l.size()).toBe(3);
})

test("Adicionar no inicio", () => {
    l.add(1);
    l.add(2);
    l.add(3);
    expect(l.toString()).toBe("[ 3 2 1 ]");
})

test("Adicionar no fim", () => {
    l.append(1);
    l.append(2);
    l.append(3);
    expect(l.toString()).toBe("[ 1 2 3 ]");
})

test("Last", () => {
    l.append(1);
    l.append(2);
    l.append(3);
    expect(l.last()).toBe(3);
})

test("Remover do inicio", () => {
    l.append(1);
    l.append(2);
    l.append(3);
    l.removeBeginning();
    expect(l.toString()).toBe("[ 2 3 ]");
})

test("Remover do fim", () => {
    l.append(1);
    l.append(2);
    l.append(3);
    l.removeEnd();
    expect(l.last()).toBe(2);
})

test("Clear", () => {
    l.append(1);
    l.append(2);
    l.append(3);
    l.clear();
    expect(l.isEmpty()).toBe(true);
})

test("Procurar elemento", () => {
    l.append(1);
    l.append(2);
    l.append(3);
    l.append(1);
    l.append(6);
    l.append(3);
    expect(l.search(6)).toBe(true);
})

test("Adicionar no meio", () => {
    l.append(1);
    l.append(2);
    l.append(3);
    l.append(4);
    l.append(5);
    l.append(6);
    l.addAt(3, 26)
    expect(l.toString()).toBe("[ 1 2 3 26 4 5 6 ]");
})