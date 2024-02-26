// Написать функцию,которая возвращает суму всех неповторающихся элеметов массива

function sumNoRepeat(array) {
    const obj = {};
    let result = 0;
    for (let elem of array) {
        if (obj[elem]) {
            obj[elem] += 1;
        } else {
            obj[elem] = 1;
        }
    }

    for (let key in obj) {
        if (obj[key] === 1) result += Number(key);
    }

    return result;
}

console.log(sumNoRepeat([1, 3, 1, 5, 5, 5, 5, 6, 6, 8, 9, 0, 0,-1]));
// console.log(sumNoRepeat([1, 0, 0, 1, -1, 4]));