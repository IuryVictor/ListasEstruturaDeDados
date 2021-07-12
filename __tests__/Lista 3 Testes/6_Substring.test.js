import Substring from "../../src/Lista 3/6_Substring";

test("Substring", () => {
    let s = new Substring("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
    let l = s.substring(8, 9);
    expect(l.toString()).toBe("I->J");
})