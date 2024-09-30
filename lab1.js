//Exercise 1.1
const inc1 = (n) => ++n;

const a = 5;
const b = inc1(a);
console.dir({ a, b });

//Exercise 1.2
const inc2 = (num) => {
    num.n =+ 1
}
const obj = { n: 5 };
inc2(obj);
console.dir(obj);

//Exercise 2.1
const mas1 = [true, 'hello', 5, 12, -200, false, false, 'word', 100, true, 'bye', 10, 5, 1, 'lalal', 'Ukraine', true]
const hash1 = { number: 0, string: 0, boolean: 0 }
for (const item of mas1) {
    hash1[typeof item] += 1
}
console.log(hash1)

//Exercise 2.2
const mas2 = [true, 'hello', undefined, 5, 12, -200, false, false,  null,  'word', 100, true, 'bye', 10, 5, 1, null, 'lalal', 'Ukraine', true, undefined]
const hash2 = {}
for (const item of mas2) {
    const type = typeof item
    if (!hash2[type]) {
        hash2[type] = 0;
    }
    hash2[type] += 1;
}
console.log(hash2)