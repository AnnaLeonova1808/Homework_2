//1
//const value = +prompt('Укажите число');

//if (value % 2 === 0){
    //console.log(`${value} Четное число`);
//}else{
    //console.log('Нечетное число')
//}

//2
//const value_1 = +prompt('Укажите число');
//const value_2 = +prompt('Укажите число');

//if (value_1 % value_2 === 0){
    //console.log( 'Делится');
//}else{
    //console.log('Не делится');
//}

//3
//const_a = +prompt('Укажите длину катета');
//const_b = +prompt('Укажите длину катета');

//console.log(const_a * const_b / 2)

//4
//const_a = +prompt('Укажите длину катета');
//const_b = +prompt('Укажите длину катета');

//console.log(`${const_a ** 2}) + ${const_b ** 2} **0.5 = ${(const_a ** 2 + const_b ** 2) ** 0.5}`)

//5
const value = +prompt('Укажите число');

if(value % 3 === 0 && value % 7 === 0 || value % 10 !== 0){
    console.log ('YES')
}else{
    console.log('NO')
}
