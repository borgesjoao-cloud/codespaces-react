/*Questão 1 — Média de notas e filtro de aprovados
Contexto
Você recebeu uma lista de alunos. Cada aluno possui um nome e um array de notas.
Considere que a média mínima para aprovação é 7.

Desafio
Crie uma solução que:

Use map() e reduce() para gerar um novo array de objetos no formato:
{ nome: "Ana", media: 8 }
Use filter() para manter apenas os alunos com média maior ou igual a 7.
Use sort() para ordenar os alunos aprovados da maior média para a menor.
Regras
Não modifique o array alunos original.
Use obrigatoriamente map(), reduce(), filter() e sort().
Resultado esperado
Ao final, a saída deve ser uma lista ordenada apenas com os alunos aprovados e suas médias.

Dicas
reduce() pode ser usado para somar os valores do array de notas e gerar um único resultado.
map() pode transformar cada aluno em um novo objeto com a média calculada.
filter() retorna apenas os elementos que atendem a uma condição.
sort() pode ordenar em ordem decrescente comparando b.media - a.media.
Exemplo de estrutura esperada da saída
[
  { nome: "Carla", media: 9.33 },
  { nome: "Ana", media: 8 },
  { nome: "Diego", media: 7 },
];   */


//Questão 1 

const alunos = [
  { nome: "Ana", notas: [8, 7, 9] },
  { nome: "Bruno", notas: [5, 6, 5] },
  { nome: "Carla", notas: [9, 9, 10] },
  { nome: "Diego", notas: [6, 7, 8] },
];

const aprovados =alunos
    .map(aluno => ({nome: aluno.nome, media: aluno.notas.reduce((soma, nota) => soma+nota, 0
    )/ aluno.notas.length})) 
    .filter((aluno) => aluno.media >= 7)
    .sort((a, b) => b.media - a.media);

console.log(aprovados);
console.log('\n');

/*Questão 2 — Catálogo de filmes com busca e ordenação
Contexto
Você recebeu um catálogo de filmes. Cada filme possui título, ano e gênero.

const filmes = [
  { titulo: "O Senhor dos Anéis", ano: 2001, genero: "fantasia" },
  { titulo: "Matrix", ano: 1999, genero: "ficção" },
  { titulo: "Interestelar", ano: 2014, genero: "ficção" },
  { titulo: "Divertida Mente", ano: 2015, genero: "animação" },
];
Desafio
Crie uma função que:

Receba um gênero como parâmetro e use filter() para retornar apenas os filmes daquele gênero.
Receba também um critério de ordenação e use sort() para ordenar:
por ano, do mais recente para o mais antigo; ou
por título, em ordem alfabética.
Use map() para transformar o resultado em um array de strings com o formato:
"Interestelar (2014) - ficção";
Regras
A função não deve modificar o array original.
Use obrigatoriamente filter(), sort() e map().
Resultado esperado
A função deve permitir consultar o catálogo de maneira organizada, retornando apenas os filmes desejados no formato textual definido.

Dicas
filter() é ideal para selecionar apenas os filmes de um gênero específico.
sort() pode mudar o array original; por isso, vale trabalhar com uma cópia antes de ordenar.
map() ajuda a formatar os objetos em strings mais amigáveis para exibição.
Exemplo de chamada esperada
buscarFilmes("ficção", "ano");
Exemplo de saída esperada
["Interestelar (2014) - ficção", "Matrix (1999) - ficção"]; */


//Questão 2 

const filmes = [
  { titulo: "O Senhor dos Anéis", ano: 2001, genero: "fantasia" },
  { titulo: "Matrix", ano: 1999, genero: "ficção" },
  { titulo: "Interestelar", ano: 2014, genero: "ficção" },
  { titulo: "Divertida Mente", ano: 2015, genero: "animação" },
];

function buscarFilmes(genero, ano) {
    return filmes
        .filter(filme => filme.genero === genero)
        .sort((a,b) => b.ano - a.ano)
        .map(filme => `${filme.titulo} (${filme.ano}) - ${filme.genero}`)
    }

    console.log(buscarFilmes("ficção","ano"));
    console.log('\n');


