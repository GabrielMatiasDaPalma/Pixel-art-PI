var database = require("../database/config");

function cadastrar(arquivo , descricao, fkUsuario) {
  var instrucaoSql = `INSERT INTO imagem(arquivo, descricao, fkUsuario) VALUES'${arquivo}','${descricao}',${fkUsuario}`;

  return database.executar(instrucaoSql); 
}

function listar() {
  var instrucaoSql = `SELECT i.idImagem, i.arquivo, i.descricao, u.idUsuario, u.nomeUsuario FROM imagem i INNER JOIN usuario u ON i.fkUsuario = u.idUsuario`;

//   return database.executar(instrucaoSql);
// }

// function buscarPorCnpj(cnpj) {
//   var instrucaoSql = `SELECT * FROM empresa WHERE cnpj = '${cnpj}'`;

//   return database.executar(instrucaoSql);
// }

// function cadastrar(razaoSocial, cnpj) {
//   var instrucaoSql = `INSERT INTO empresa (razao_social, cnpj) VALUES ('${razaoSocial}', '${cnpj}')`;

  return database.executar(instrucaoSql);
}

module.exports = {cadastrar, listar };
