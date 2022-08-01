const user = {
    name: "Aziz", // string
    surname: 'Adams',
    age: 15, // number
    isMarried: true, // boolean
    girls: ['nargiza', 'malika', 'karina', 'aziza'],
    girls1: ['nargiza1', 'malika1', 'karina1', 'aziza1'],
    passport: {
        serries: 'AC',
        number: 213123213
    },
   
    fullName: () => {
        return user.name + ' ' + user.surname
    }
}
let wallet = {
    cash: 19000,
    card: {
        password: 7777,
        cash: 13532
    }
}
// let newObj = Object.assign(user, addInfo)
// Object.freeze(user)
// Object.keys(user)
// Object.values(user)
// Object.entries(user)
let types = {
    number: [],
    string: [],
    object: [],
    boolean: []
}


// ТЗ
// Седенить два объекта в один новый
// достать все значения в один массив и все ключи тоже в один но отдельный массив
// соеденить два массива в один целый
// отфильтровать данные по их типам данных в соответствующие переменные 
let arr = Object.assign(user, wallet)
console.log(arr);
let key = Object.keys(user)
let value = Object.values(user)
console.log(key);
console.log(value);
let newArr = ''
console.log(newArr.concat(user.girls, ' ', user.girls1));
console.log(typeof user.name);
console.log(typeof user.surname);
console.log(typeof user.age);
console.log(typeof user.isMarried);
console.log(typeof user.girls);
console.log(typeof user.passport);
console.log(typeof user.passport.serries);
console.log(typeof user.passport.number);