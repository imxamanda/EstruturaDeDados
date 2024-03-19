///  if...else

var num = 0;
if(num === 1){
    console.log('num is egual to 1');
}

/// if...else

var month = 5;
if  (month === 1) {
    console.log('January');
} else  if (month === 2 ) {
    console.log ('February');
} else if (month === 3) {
    console.log('March');
} else {
    console.log('Month is not January, Febuary or March');
}

///switch

var month = 5;
switch (month) {
    case 1:
        console.log('January');
        break;
    case 2:
        console.log('February');
        break;
    case 3:
        console.log('March');
        break;
    default:
        console.log('Month is not January, February or March!');
}

///for

for (var i = 0; i < 10; i++){
    console.log(i);
}

///while

var i = 0;
while (i < 10){
    console.log(i);
    i++;
}

///do...while

var i = 0;
do {
    console.log(i);
    i++
} while (i < 10);

/// function

function sayHello(){
    console.log("Hello!");
}

sayHello();

// dois argumentos p/ uma função

function output(text) {
    console.log(text);
}

output('Boa noite!', 'Olá, tudo bem?');

// soma de dois numeros

function sum(num1, num2){
    return  num1 + num2;
}

// chamando a execução da função
var result = sum(2, 3);
output(result);

//declarando uma classe (construtor) quee representa um livro:
function Book (title, pages, isbn) {
    this.title = title;
    this.pages = pages;
    this.isbn = isbn;
    this.printIsbn = function() {
        console.log('ISBN: ' + this.isbn);
    }
}

// para instanciar essa classe
var book = new Book('Estrutura de Dados', 406, '978-85-7522-553-0');

//Acessando suas propriedades 
console.log(book.title); //exibe o título do livro
book.title = 'Estrutura de Dados e algoritmos em JavaScript'// atualiza o valor do título
console.log(book.title); //exibe o valor atualizado
console.log('Este livro possui: ' + book.pages + ' páginas'); 

Book.prototype.printTitle = function() {
    console.log(this.title);
};

book.printTitle(); //chamada
book.printIsbn();



