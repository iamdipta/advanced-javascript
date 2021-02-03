// double equal check the normal way to check value
const first = 2;
const second = '3';
if (first == second) {
    console.log("condition is true")
} else {
    console.log("false");
}

//but triple equal check carefully value and value type
const first = 0;
const second = false;
if (first === second) {
    console.log("true");
} else {
    console.log("false");
}