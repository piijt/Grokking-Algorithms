const fs = require('fs');

const binary_search = (list, item) => {
    let mid, guess
    let low = 0
    let high = list.length-1;
    while(low <= high) {
        mid = low + high;
        guess = list[mid];
        if(guess === item) {
            return mid
        }
        if(guess > item) {
            high = mid - 1
        } 
        else {
            low = mid + 1
        }
    }
}

// const my_list = [1, 3, 5, 7, 9, 11]

// const g0 = binary_search(my_list, 1);
// const g1 = binary_search(my_list, 2);
// const g2 = binary_search(my_list, 11);

// console.log({
//     guess_0: {pos: g0, val: my_list[g0]},
//     guess_1: {pos: g1, val: my_list[g1]},
//     guess_2: {pos: g2, val: my_list[g2]},
// });

const names_list = fs.readFileSync('./names.json');
const n_list = JSON.parse(names_list).sort();
const gn0 = binary_search(n_list, 'Peter');
console.log({pos: gn0, val: n_list[gn0]});