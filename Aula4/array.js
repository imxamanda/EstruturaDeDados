//array
const averageTemp = [];
averageTemp[0] = 31.9;
averageTemp[1] = 30.7;
averageTemp[2] = 28.5;
averageTemp[3] = 27.8;
averageTemp[4] = 25.6;

console.log('Conteúdo do array: ', averageTemp);
console.log('Média de temperatura de março: ', averageTemp[2]);
console.log('Média de temperatura de janeiro: ', averageTemp[0]);

//tbm podemos iniciar um array do seguinte modo
let daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

//percorrendo os elementos do array
for (let i = 0; i < daysOfWeek.length; i++){
    console.log(daysOfWeek[i]);
}

//armazenando a série fibonacci no array com 20 elementos
const fibonacci = [];
fibonacci[0] = 1;
fibonacci[1] = 1;
for (let i = 2; i < 20; i++) {
    fibonacci[i] = fibonacci[i - 1] + fibonacci [i - 2];
}
//imprimir no console, um elemento ao lado  do outro
console.log(fibonacci.join(' '));
// percorrendo o array e mostrando no console cada elemento fibonacci
for (let i = 0; i < fibonacci.length; i++) {
    console.log(fibonacci[i]);
}

