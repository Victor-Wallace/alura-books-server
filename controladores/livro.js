const getLivros = (req, res) => {
    try{
        // A LINHA ABAIXO SERVE PARA FORÇAR UM ERRO
        // throw new Error("Teste")
        res.send("Olá mundo! Eu serei Bilionario porra!!")
    }catch(error) {
        res.status(500)
        res.send(error.message)
    }

}

module.exports = {
    getLivros
}