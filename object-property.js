const students = [
    { id: 21, name: 'dipta roy' },
    { id: 22, name: 'Rajesh' },
    { id: 25, name: 'akash' },
    { id: 24, name: 'mohesh' }
];

// const names = [];
// for (let i = 0; i < students.length; i++) {
//     const elements = students[i];
//     names.push(elements.name);

// }
// console.log(names)

// advanced way
const names = students.map(s => s.name);
const id = students.filter(s => s.id > 22);
// const names = students.map(s => s.name);

console.log(names, id);