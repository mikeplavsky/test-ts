let a = [1,2,3,4];
const b = [...a];

b.map(x => {
    console.log(x);
});

let z = {a:2,b:3};
let z1 = {...z};

type Foo<T> = {
    item: T,
    item1: T[]
};

let f: Foo<String> = {
    item:"", 
    item1: []};

f.item = "";
f.item1 = ["1","2","3"];

type FooKeys = keyof Foo<String>;
let keys: FooKeys;

keys = "item1";

type FooTypes = Foo<String>[keyof Foo<String>];
let types: FooTypes;

types = [];
types[0] = "";

function getProp<T, K extends keyof T>(obj: T, k: K){
    return obj[k];
};

let x = getProp(f, "item1");
console.log(x);

function makeRecord<K extends string, T>(keys: K[], v: T): 
    {[P in K]: T} {

    let acc = <{[P in K]: T}>{};

    return keys.reduce((a,k) => {
        a[k]=v; return a}, 
        acc);

}

let ks = ['a','b'];
let r = makeRecord(ks, 7);

console.log(r);

import {retry} from "./retry.ts"
retry()
