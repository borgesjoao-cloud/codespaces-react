console.log("Bm vindo a PPI!");

// Variáveis
let name = "João";
let age = 17;
let isStudent = true;

const PI = 3.14; //NÃO PODE MUDAR DE VALOR

console.log(PI);

//Operadores Aritméticos + - * / (modulo=resto)

let x = 5 + 5;
let y = "5" + 5; //concatenção de texto
let z = "Hello" + 5;

console.log(x, y, z);
console.log(typeof x);

//ativar o formartador Pretier  Alt Shift F

//Operadores relacionais
console.log("5 != 5"); // Diferença
console.log("5" == 5); // compara tipo OU valor
console.log("5" === 5); // compara tipo E valor

//Operadores de incremento 
console.log(x++); //incremento apos o retorno valor
console.log(x);
console.log(++x); //incremento antes do retorno do valor

// X==;
// ++x;
// x += 1;
// x = x +1;


//operadores lógicos - (&& AND) (|| OR) (! NOT)
let isExpression = (true && 5 + 2 * 3 < 10) || false;
console.log(isExpression);

//if ... else
// if (condition) {
// condition === true
// }
// else {
// condition === false
// }

// Template Strings 
let text = `React é tudo de bom
programar é minha vida
eu amo o ifrn`;

console.log(text);

// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
    
// }

// Array

let fruits = ['Banana', 'Orange', 'Apple', "Mango"];

console.log(fruits.length); // Tamanho

console.log(fruits[0]);

//Insere um elemento no final do array;
fruits.push('Kiwi'); 
console.log(fruits);

//Remove e retorna o ultimo elemento;
console.log(fruits.pop());
console. log(fruits);

//Remove e retorna o primeiro elemento do array;
console.log(fruits.shift());
console. log(fruits);

//Insere elemento no começo da lista
fruits.unshift('Lemon');
console.log(fruits);

//Argumento 1 - posição
//Argumento 2 - qnts elementos serão removidos
//Argumento 3 - lista de elementos que serão inseridos
fruits.splice(2,0,'Kiwi','Blueberry')
console.log(fruits);

fruits.splice(2,1,)
console.log(fruits);

//Desafio - substituir apple por kiwi 
fruits.splice(3, 1, 'Kiwi')
console.log(fruits);

let index = fruits.indexOf('Kiwi');
console.log(index);

fruits.splice(index, 1,  'apple'); // Remove o elemento 'Kiwi' do array
console.log(fruits);

// Altera o array original
// Ordem Crescente
fruits.sort(); //toSorted ()
console.log(fruits);

// Ordem decescente
fruits.reverse();
console.log(fruits);

//Não altera o ARRAY original
let fruitsOrdenadas = fruits.toSorted();
console.log(fruits);
console.log(fruitsOrdenadas);

let fruitsReversas = fruits.toReversed();
console.log(fruits);
console.log(fruitsReversas);

const numbers = [45, 4, 9, 16, 25];
console.log(numbers);

// Desafio - criar um array 'numbers2' que dupliquem os valores de 'numbers'
// Output: [90, 8, 18, 32, 50]
const numbers2 = [];
for (let i = 0; i < numbers.length; i++) {
    numbers2.push(numbers[i]*2);    
}
console.log(numbers);
console.log(numbers2);

function myFunction(value, index, array) {
    return value * 2;
}

const numberMap = numbers.map(myFunction);
console.log(numberMap);

console.log(numbers.map( (number) => number*2 ));

console.log(numbers.toSorted((a, b) => a - b)); // Ordem crescente
console.log(numbers.toSorted((a, b) => b - a)); // Ordem decrescente


numbers.sort((a,b) => a - b);
//Maior valor 
console.log('Maior =', numbers[numbers.length-1]);

//Menor valor
console.log('Menor =', numbers[0]);

// **********************************
// Aula 13/05 - Funções, array destructuring, spread operator
console.log(fruits);

const fruits2 = ["Kiwi", "Avocado"];
console.log([...fruits2, "Grape"]);

// Spread - ...
const fruits3 = [...fruits, ...fruits2];
console.log(fruits3);

// DESAFIO - Exibir todas as frutas que comecem
// com a letra A
const out = [];
const letra = "a";

// for (let i = 0; i < fruits3.length; i++) {
//   const fruit = fruits3[i];
//   //toLowerCase - minúscula, toUpperCase - maiúscula
//   if (fruit[0].toLowerCase() === letra) {
//     out.push(fruit);
//   }
// }

// fruits3.map((fruit) => {
//   if (fruit[0].toLowerCase() === letra) {
//     out.push(fruit);
//   }
// });

// find - retorna a primeira ocorrência,
// de acordo com a condição
let outFind = fruits3.find(
  (fruit) => fruit[0].toLowerCase() === letra
);
console.log(outFind);

// filter - retorna TODAS as ocorrências,
// de acordo com a condição
let outFilter = fruits3.filter(
  (fruit) => fruit[0].toLowerCase() === letra
);
console.log(outFilter);

// DESAFIO - Exibir o valor da soma de todos os
// números do array 'numbers'

console.log(numbers);

// map
let soma = 0;
numbers.map((number) => {
  soma += number;
});
console.log(soma);

// reduce
console.log(
  numbers.reduce((soma, number) => soma + number)
);

// Object
const pessoa = {
  nome: 'Zé Vaqueiro',
  idade: 25,
  profissao: 'Cantor/Compositor'
};

console.log(pessoa.nome);
console.log(pessoa['nome']);
console.log(Object.keys(pessoa));
console.log(Object.values(pessoa));

const pessoa2 = { ...pessoa, hobby: 'Vaquejada'};
console.log(pessoa2);

// Atribuição por desestruturação
const { nome, idade } = pessoa2;
console.log(nome, idade);

// Construtor - Protótipo de Objeto
function Product(name, sto, ram, price, qty, category){
  this.name = name;
  this.sto = sto;
  this.ram = ram;
  this.price = price;
  this.qty = qty;
  this.category = category;
}

const p1 = new Product('iPhone', 256, 16, 5000, 10, 'Celular');
const p2 = new Product('iPad', 512, 16, 8000, 20, 'Tablet');
const p3 = new Product('Macbook', 1024, 24, 15000, 30, 'Notebook');
const p4 = new Product('iPhone Pro Max', 256, 16, 7000, 15, 'Celular');
const p5 = new Product('iPad Pro', 512, 16, 10000, 25, 'Tablet');
const p6 = new Product('Macbook Pro', 1024, 24, 25000, 35, 'Notebook');

const estoque = 
[ {...p1 },
  {...p2 },
  { ...p3 },
  { ...p4 },
  { ...p5 },
  { ...p6 }];
console.log(estoque);

/* DESAFIO 1

  a) Valor total de todos os produtos em estoque
  b) Ordene os produtos por nome (crescente/descrescente)
  c) Ordene os produtos por preço (crescente/descrescente)
  d) Filtre produtos de acordo uma categoria

  */