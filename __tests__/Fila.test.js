import Fila from "../src/Fila";

let f;

beforeEach(
    () => {
        f = new Fila(5);
    }
);

test("Fila vazia", () => {
    expect(f.isEmpty()).toBe(true);
})

test("Fila cheia", () => {
    f.enqueue(1);
    f.enqueue(2);
    f.enqueue(3);
    f.enqueue(4);
    f.enqueue(5);
    expect(f.isFull()).toBe(true);
})

test("Frente da fila", () => {
    f.enqueue(1);
    f.enqueue(2);
    f.enqueue(3);
    expect(f.front()).toBe(1);
})

test("Retirar da fila", () => {
    f.enqueue(1);
    f.enqueue(2);
    f.enqueue(3);
    f.dequeue();
    expect(f.front()).toBe(2);
})

test("Queue overflow", () => {
    f.enqueue(1);
    f.enqueue(2);
    f.enqueue(3);
    f.enqueue(4);
    f.enqueue(5);
    expect(() => {
        f.enqueue(6)
    }).toThrowError("Fila cheia");
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
    f.dequeue();
    f.dequeue();
    expect(f.size()).toBe(3);
})

test("Limpar fila", () => {
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
    f.enqueue(3);
    f.enqueue(4);
    f.dequeue();
    f.dequeue();
    f.enqueue(9);
    f.enqueue(8);
    f.enqueue(7);
    expect(f.toString()).toBe("[ 3 4 9 8 7 ]")
})