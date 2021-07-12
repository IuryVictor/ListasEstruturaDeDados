import Lista from "../../src/Lista";
import Inverte from "../../src/Lista 3/4_Inverte_Lista";

let l, i;

beforeEach(
    () => {
        l = new Lista();
        i = new Inverte();
    }
);

test("Inverter Lista", () => {
    l.append(1);
    l.append(2);
    l.append(3);
    l.append(4);
    l.append(5);
    l = i.inverter(l);
    expect(l.toString()).toBe("5->4->3->2->1");
})