let a = [1, 2, 3, 4];
const b = [...a];
b.map(x => {
    console.log(x);
});
let z = { a: 2, b: 3 };
let z1 = { ...z };
let f = {
    item: "",
    item1: []
};
f.item = "";
f.item1 = ["1", "2", "3"];
let keys;
keys = "item1";
let types;
types = [];
types[0] = "";
function getProp(obj, k) {
    return obj[k];
}
;
let x = getProp(f, "item1");
console.log(x);
function makeRecord(keys, v) {
    let acc = {};
    return keys.reduce((a, k) => {
        a[k] = v;
        return a;
    }, acc);
}
let ks = ['a', 'b'];
let r = makeRecord(ks, 7);
console.log(r);
import { retry } from "./retry";
retry();
