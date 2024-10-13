const d = new Date(20240729043116)
console.log(d)

const date = new Date(d);
let milliseconds = date.getTime();

console.log(milliseconds);
milliseconds += 13;

console.log(milliseconds);
