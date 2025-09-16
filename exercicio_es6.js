//Cria um array de objetos, onde teremos como atributos do objeto: o nome e a nota de alunos;
//Criar uma função que irá retornar apenas os alunos que tiveram a nota maior ou igual à 6;

class Notas {
    constructor(nomeAluno, notaAluno) {
        this.aluno = nomeAluno;
        this.nota = notaAluno;
    }

    mediaAluno() {
        if (this.nota >= 6) {
            return console.log(`${this.aluno} sua nota foi ${this.nota}`)
        } else {
            console.log(`${this.aluno} sua nota foi abaixo de 6`)
        }
    }
}


const notaDiego = new Notas("Diego", 5);
notaDiego.mediaAluno();

const notaAlessandra = new Notas("Alessandra", 10);
notaAlessandra.mediaAluno();