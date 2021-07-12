import Pilha from "../../src/Lista 3/1_Pilha_com_Lista";

let p;

beforeEach(
    () => {
        p = new Pilha();
    }
);

test("Pilha vazia", () => {
    expect(p.isEmpty()).toBe(true);
})

test("Topo da pilha", () => {
    p.push(1);
    p.push(2);
    p.push(3);
    p.push(2);
    p.push(3);
    p.push(2);
    p.push(7);
    expect(p.top()).toBe(7);
})

test("Retirar da pilha", () => {
    p.push(1);
    p.push(2);
    p.push(3);
    p.push(2);
    p.push(4);
    p.push(8);
    p.push(9);
    p.pop();
    p.pop();
    expect(p.top()).toBe(4);
})

test("Stack underflow", () => {
    expect(() => {
        p.pop()
    }).toThrowError("Stack underflow");
})

test("Tamanho da pilha", () => {
    p.push(1);
    p.push(2);
    p.push(1);
    p.push(2);
    p.push(1);
    p.push(2);
    p.push(1);
    p.push(2);
    p.pop();
    p.pop();
    p.pop();
    expect(p.size()).toBe(5);
})

test("Limpar pilha", () => {
    p.push(1);
    p.push(2);
    p.push(1);
    p.push(2);
    p.clear();
    expect(p.isEmpty()).toBe(true);
})

test("toString", () => {
    p.push(1);
    p.push(2);
    p.push(3);
    p.pop();
    p.pop();
    p.push(7);
    expect(p.toString()).toBe("1->7");
})