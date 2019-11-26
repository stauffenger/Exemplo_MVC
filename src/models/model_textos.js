const bancoDeDados = require('./model_acesso_ao_banco')

async function getTextos() {
    let clientBancoDeDados = bancoDeDados.novoClient()
    let retorno
    await clientBancoDeDados.connect()
    .then(() => console.log("Conexão bem sucedida com o banco de dados!"))
    .then(() => clientBancoDeDados.query("SELECT titulo, descricao, usuario as autor, edicao FROM projetos, usuarios WHERE id_autor = id_usuario ORDER BY data_criacao DESC"))
    .then(resultados => retorno = resultados.rows)
    .catch(erro => console.error("Erro ao tentar conectar com o banco de dados.", erro))
    .finally(() => {
        clientBancoDeDados.end()
    })
    return retorno
}

async function postTextos(titulo, texto) {
    let clientBancoDeDados = bancoDeDados.novoClient()
    await clientBancoDeDados.connect()
    .then(() => console.log("Conexão bem sucedida com o banco de dados!"))
    .then(async () => {
        await clientBancoDeDados.query("INSERT INTO textos(titulo, texto) VALUES('$1', '$2')", [titulo, texto])
        .then(() => retorno = { "query" : true })
        .catch(erro => {
            console.error("Erro ao tentar cadastrar texto no banco de dados.", erro)
            retorno = { "query" : false }
        })
    })
    .catch(erro => {
        console.error("Erro ao tentar cadastrar texto no banco de dados.", erro)
        retorno = { "query" : false }
    })
    .finally(() => clientBancoDeDados.end())
    return retorno
}

module.exports.getTextos = getTextos
module.exports.postTextos = postTextos