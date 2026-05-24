var database = require("../database/config");

function curtida(fkUser, fkImg) {
  var instrucaoSql = `INSERT INTO curtida(fkUser, fkImg) VALUES'${fkUser}','${fkImg}'`;

  return database.executar(instrucaoSql); 
}

function contar(fkImg) {
  var instrucaoSql = `SELECT COUNT(*) AS totalCurtidas FROM curtida WHERE fkImg = ${fkImg}`;

//   return database.executar(instrucaoSql);
// }
// função que vai chamar um valor de uma tabela o varinstrução é quase um comando que vai até o sql inserindo no banco 
// function buscarPorCnpj(cnpj) {
//   var instrucaoSql = `SELECT * FROM empresa WHERE cnpj = '${cnpj}'`;

//   return database.executar(instrucaoSql);
// }

// function cadastrar(razaoSocial, cnpj) {
//   var instrucaoSql = `INSERT INTO empresa (razao_social, cnpj) VALUES ('${razaoSocial}', '${cnpj}')`;

  return database.executar(instrucaoSql);
}

module.exports = {curtida, contar};
