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

/* DESAFIO 1

  a) Valor total de todos os produtos em estoque
  b) Ordene os produtos por nome (crescente/descrescente)
  c) Ordene os produtos por preço (crescente/descrescente)
  d) Filtre produtos de acordo uma categoria

*/
/*   a) Valor total de todos os produtos em estoque 
*/

const total =
  estoque.reduce((soma, product) => soma + product.price * product.qty, 0);
console.log("R$", total);
console.log('\n');


/*   b) Ordene os produtos por nome (crescente/descrescente)
*/

const crescente = estoque
  .toSorted((a, b) => a.name.localeCompare(b.name)) // Ordem crescente
  .map(product => product.name);
console.log(("Produtos por nome crecente"), crescente);
console.log('\n');


const decrescente = estoque
  .toSorted((a, b) => b.name.localeCompare(a.name)) // Ordem decrescente
  .map(product => product.name);
console.log(("Produtos por nome decrescente"), decrescente);
console.log('\n');


/*   c) Ordene os produtos por preço (crescente/descrescente)
*/

const menorPreço = estoque
  .toSorted((a, b) => a.price - b.price) // Ordem crescente
  .map(product => product.price);
console.log("Produtos por preço crescente", menorPreço);
console.log('\n');



const maiorPreço = estoque
  .toSorted((a, b) => b.price - a.price) // Ordem decrescente
  .map(product => product.price);
console.log("Produtos por preço decrescente", maiorPreço);
console.log('\n');



/* d) Filtre produtos de acordo com uma categoria
*/

let celular = estoque.filter(
  (product) => product.category === 'Celular'
)

console.log("Celulares: ", celular);
console.log('\n');



let tablet = estoque.filter(
  (product) => product.category === 'Tablet');

console.log("Tablets: ", tablet);
console.log('\n');



let notebook = estoque.filter(
  (product) => product.category === 'Notebook'
);

console.log("Notebooks: ", notebook);
console.log('\n');

