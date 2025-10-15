// let arr = [true,false,"cat"];
// console.log(arr);
// arr.push("dog");
// console.log(arr);
// arr.pop();
// console.log(arr);
// let spliced = arr.splice(1,1);
// //console.log(arr);
// console.log(spliced);
// arr.forEach(val => {
//     console.log(val);
// });
// for (let val of arr) {
//     console.log(val);
// }





let randNumber = [];
for (let i = 0; i < 100; i++) {
    randNumber.push(Math.random());
}

randNumber.sort( (a, b) => a - b );
console.log(randNumber);

//remove .push
//add = .pop
//removing or replacing existing elements and/or adding new elements in place .splice