import Pilha from "../src/Pilha";

let p;

beforeEach(
    () => {
        p = new Pilha(3);
    }
);

test("Pilha vazia", () => {
    expect(p.isEmpty()).toBe(true);
})

test("Pilha cheia", () => {
    p.push(1);
    p.push(2);
    p.push(3);
    expect(p.isFull()).toBe(true);
})

test("Topo da pilha", () => {
    p.push(1);
    p.push(2);
    p.push(3);
    expect(p.top()).toBe(3);
})

test("Retirar da pilha", () => {
    p.push(1);
    p.push(2);
    p.push(3);
    p.pop();
    expect(p.top()).toBe(2);
})

test("Stack overflow", () => {
    p.push(1);
    p.push(2);
    p.push(3);
    expect(() => {
        p.push(4)
    }).toThrowError("Stack overflow");
})

test("Stack underflow", () => {
    expect(() => {
        p.pop()
    }).toThrowError("Stack underflow");
})

test("Tamanho da pilha", () => {
    p.push(1);
    p.push(2);
    p.pop();
    expect(p.size()).toBe(1);
})

test("Limpar pilha", () => {
    p.push(1);
    p.push(2);
    p.clear();
    expect(p.isEmpty()).toBe(true);
})

test("Topo da pilha vazia", () => {
    expect(() => {
        p.top()
    }).toThrowError("Pilha vazia");
})

test("toString", () => {
    p.push(1);
    p.push(2);
    p.push(3);
    p.pop();
    p.pop();
    p.push(7);
    expect(p.toString()).toBe("[ 1 7 ]");
})