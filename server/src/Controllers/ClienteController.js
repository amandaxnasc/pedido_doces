import ClienteModel from "../Models/ClienteModel.js";

class ClienteController{
    constructor(){

    }
    create(req,res){
        const nome_cliente = req.body.nome_cliente
        const endereco = req.body.endereco
        ClienteModel.create(nome_cliente,endereco).then(
            resposta =>{
                console.debug("Cadastrando clinte")
                res.status(resposta[0]).json(resposta[1])
            }
        ).catch(
            resposta =>{
                console.debug(resposta)
                console>debug("Erro cadastrando cliente")
                res.satus(resposta[0]).json(resposta[1])
            }
        )
    }
    read(req,res){
        ClienteModel.read().then(
            resposta =>{
            console.debug("Exibindo cliente")
            res.status(resposta[0]).json(resposta[1])
           } 
        ).catch(
            resposta =>{
                console.debug(resposta)
                console.debug("Erro exibindo um cliente")
                res.status(resposta[0]).json(resposta[0])
            }
        )
    }
    update(req,res){
        const id_cliente = req.params.id_cliente
        const nome_cliente = req.body.nome_cliente
        const endereco = req.body.endereco
        ClienteModel.update(id_cliente,nome_cliente,endereco).then(
            resposta =>{
                console.debug("Atualizando cliente")
                res.status(resposta[0]).json(resposta[1])
            }
        ).catch(
            resposta =>{
                console.debug(resposta)
                console.debug("Erro: atualizando um cliente")
            }
        )
    }
    delete(req,res){
        const id_cliente =req.params.id_cliente
        ClienteModel.delete(id_cliente).then(
            resposta =>{
                console.debug("Deletando cliente")
                res.status(resposta[0]).json(resposta[1])
            }
        ).catch(
            resposta =>{
            console.debug(resposta)
            console.debug("Erro Deletando uma categoria")
            res.status(resposta[0]).json(resposta[1])   
            }
            
        )

    }
}
export default new ClienteController();