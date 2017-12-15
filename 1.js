let a = 0;
var b = 0;
let o = {a: 1, b: 2, c: 3};
let arr = [1, 2, 3, 4, 5];
for (let i in o) {
    console.log(o[i]);
}

for(let i in arr) {
    console.log(arr[i]);
}

for(let i = 0; i < 5; i++) {
    console.log(i);
}

