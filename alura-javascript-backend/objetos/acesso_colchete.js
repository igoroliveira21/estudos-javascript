const cliente = {
    nome: "André",
    idade: 32,
    cpf: "1234456778",
    email: "andre@dominio.com",

};

console.log(`O nome do cliente é ${cliente["nome"]} e essa pessoa tem ${cliente["idade"]} anos.`);

const chaves = ["nome", "idade", "cpf", "email", "altura"];

chaves.forEach((chave) => {
    console.log(`a chave ${chave} tem valor ${cliente[chave]}`)
});
