// Importando o módulo fs (File System) do Node.js para lidar com operações de arquivo
const fs = require("fs");

// Lendo o conteúdo do arquivo JSON "livros.json" de forma síncrona e convertendo-o em um objeto JavaScript
const dadosAtuais = JSON.parse(fs.readFileSync("livros.json"));

// Criando um novo objeto de dado a ser adicionado ao arquivo JSON
const novoDado = { id: '3', nome: 'Livro mais que demais' };

// Escrevendo no arquivo JSON "livros.json" de forma síncrona, combinando os dados atuais com o novo dado
fs.writeFileSync("livros.json", JSON.stringify([...dadosAtuais, novoDado]));

// Lendo novamente o conteúdo do arquivo JSON atualizado e imprimindo-o no console
console.log(JSON.parse(fs.readFileSync("livros.json")));
