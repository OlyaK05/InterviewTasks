// Написать функцияю, которая смотрит, написана строка в верхнем регистре или нижнем и возвращает True либо False

function checkRegister(string) {
    const upperCaseString = string.toUpperCase();
    if (upperCaseString === string) {
         return true;
    }
    return false;
}

console.log(checkRegister("Hello"));
console.log(checkRegister("HELLOW"));