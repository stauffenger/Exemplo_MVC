const bancoDeDados = require('./model_acesso_ao_banco')

async function getTextos() {
    let clientBancoDeDados = bancoDeDados.novoClient()
    let retorno
    await clientBancoDeDados.connect()
    .then(() => console.log("Conexão bem sucedida com o banco de dados!"))
    .then(() => clientBancoDeDados.query("SELECT titulo, texto FROM textos"))
    .then(resultados => retorno = resultados.rows)
    .catch(erro => console.error("Erro ao tentar conectar com o banco de dados.", erro))
    .finally(() => clientBancoDeDados.end())
    return retorno
}

async function postTextos(titulo, texto) {
    let clientBancoDeDados = bancoDeDados.novoClient()
    let retorno
    await clientBancoDeDados.connect()
    .then(() => console.log("Conexão bem sucedida com o banco de dados!"))
    .then(async () => {
        await clientBancoDeDados.query("INSERT INTO textos(titulo, texto) VALUES('$1', '$2')", [titulo, texto])
        .then(() => retorno = [{ "Sucesso" : "Texto Inserido." }])
        .catch(erro => {
            console.error("Erro ao tentar inserir texto no banco de dados.", erro)
            retorno = [{ "Erro" : "Falha ao tentar inserir texto!" }]
        })
    })
    .catch(erro => {
        console.error("Erro ao tentar inserir texto no banco de dados.", erro)
        retorno = [{ "Erro" : "Falha ao tentar inserir texto!" }]
    })
    .finally(() => clientBancoDeDados.end())
    return retorno
}

module.exports.getTextos = getTextos
module.exports.postTextos = postTextos