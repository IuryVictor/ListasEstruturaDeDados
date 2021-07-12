import Embaralha from "../../src/Lista 3/5_Embaralha_Lista";
import Lista from "../../src/Lista";

let l, e;

beforeEach(
    () => {
        l = new Lista();
        e = new Embaralha();
    }
);

test("Embaralhar Lista", () => {
    l.append(1);
    l.append(2);
    l.append(3);
    l.append(4);
    l.append(5);
    l.append(6);
    l.append(7);
    l.append(8);
    l.append(9);
    l.append(10);
    l = e.embaralhar(l);
    expect(l.isEmpty()).toBe(false);
})