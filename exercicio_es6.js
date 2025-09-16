//Cria um array de objetos, onde teremos como atributos do objeto: o nome e a nota de alunos;
//Criar uma função que irá retornar apenas os alunos que tiveram a nota maior ou igual à 6;

const alunos = [
    { nome: "Diego", nota: 5 },
    { nome: "Alessandra", nota: 10 },
    { nome: "Gian", nota: 7 },
    { nome: "Luana", nota: 4 },
    { nome: "Maria", nota: 8 }
];

// Função que retorna apenas alunos com nota >= 6
const alunosAprovados = alunos.filter(aluno => aluno.nota >= 6);

console.log(alunosAprovados);