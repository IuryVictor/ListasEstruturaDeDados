import Fila from "../../src/Lista 3/2_Fila_com_Lista";

let f;

beforeEach(
    () => {
        f = new Fila();
    }
);

test("Fila vazia", () => {
    expect(f.isEmpty()).toBe(true);
})

test("Frente da fila", () => {
    f.enqueue(12);
    f.enqueue(2);
    f.enqueue(3);
    f.enqueue(1);
    f.enqueue(2);
    f.enqueue(3);
    f.enqueue(1);
    f.enqueue(2);
    f.enqueue(2);
    expect(f.front()).toBe(12);
})

test("Retirar da fila", () => {
    f.enqueue(1);
    f.enqueue(2);
    f.enqueue(55);
    f.enqueue(1);
    f.enqueue(2);
    f.enqueue(3);
    f.enqueue(5);
    f.enqueue(7);
    f.enqueue(6);
    f.dequeue();
    f.dequeue();
    expect(f.front()).toBe(55);
})

test("Queue underflow", () => {
    expect(() => {
        f.dequeue()
    }).toThrowError("Fila vazia");
})

test("Tamanho da fila", () => {
    f.enqueue(1);
    f.enqueue(2);
    f.enqueue(3);
    f.enqueue(4);
    f.enqueue(5);
    f.enqueue(1);
    f.enqueue(2);
    f.enqueue(3);
    f.enqueue(4);
    f.enqueue(5);
    f.dequeue();
    f.dequeue();
    expect(f.size()).toBe(8);
})

test("Limpar fila", () => {
    f.enqueue(1);
    f.enqueue(2);
    f.enqueue(3);
    f.enqueue(1);
    f.enqueue(2);
    f.enqueue(3);
    f.clear();
    expect(f.isEmpty()).toBe(true);
})

test("Frente da fila vazia", () => {
    expect(() => {
        f.front()
    }).toThrowError("Fila vazia");
})

test("toString", () => {
    f.enqueue(1);
    f.enqueue(2);
    f.dequeue();
    f.enqueue(9);
    f.enqueue(8);
    f.enqueue(7);
    expect(f.toString()).toBe("7->8->9->2")
})