// Написать функцию, которая будет на вход принимать массив из чисел и возвращает сумму всех положительных элементов этого массива

function sumPosElem(m) {
    let result= 0;
    for (let elem of m) {
        if (elem > 0) {
            result += elem;
        }
    }

    return result;
}


arr = [1, 2, -3, 4, -7, -9];
arr1 = [-1, -2, -3, 4, -7, -9];
console.log(sumPosElem(arr));
console.log(sumPosElem(arr1));