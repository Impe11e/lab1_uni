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
mas = [true, 'hello', 5, 12, -200, false, false, 'word', 100, true, 'bye', 10, 5, 1, 'lalal', 'Ukraine', true]
hash1 = { number: 0, string: 0, boolean: 0 }
for (const item of mas) {
    hash1[typeof item] += 1
}
console.log(hash1)

//Exercise 2.2
mas = [true, 'hello', 5, 12, -200, false, false, 'word', 100, true, 'bye', 10, 5, 1, 'lalal', 'Ukraine', true, null, undefined]
hash2 = {}
for (const item of mas) {
    const type = typeof item
    if (!hash2[type]) {
        hash2[type] = 0;
    }
    hash2[type] += 1;
}
console.log(hash2)