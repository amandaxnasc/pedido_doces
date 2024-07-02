import PedidosModel from "../Models/PedidosModel.js";

class PedidosController{
    constructor(){

    }
    create(req,res){
        const id_pedido = req.body.id_pedido
        const descricao_pedido = req.body.descricao_pedido
        const valor_total = req.body.valor_total
        PedidosModel.create(id_pedido,descricao_pedido,valor_total).then(
            resposta =>{
                console.debug("Cadastrando um pedido")
                res.status(resposta[0]).json(resposta[1])                
            }
        ).catch(
            resposta =>{
                console.debug(resposta)
                console.debug("Erro cadastrando um pedido")
                res.status(resposta[0]).json(resposta[1])                
            }
        )

    }
    read(req,res){
        PedidosModel.read().then(
           resposta =>{
               console.debug("Exibindo pedidos")
               res.status(resposta[0]).json(resposta[1])                
           }
       ).catch(
           resposta =>{
               console.debug(resposta)
               console.debug("Erro ao exibir pedidos")
               res.status(resposta[0]).json(resposta[1])                
           }
       )

   }
   update(req,res){
    const id_pedido = req.params.id_pedido
    const descricao_pedido = req.body.descricao_pedido
    const id_cliente = req.body.id_cliente
    PedidosModel.update(id_pedido,descricao_pedido,valor_total,id_cliente).then(
       resposta =>{
           console.debug("Atualizando pedido")
           res.status(resposta[0]).json(resposta[1])                
       }
   ).catch(
       resposta =>{
           console.debug(resposta)
           console.debug("Erro Atualizando pedido")
           res.status(resposta[0]).json(resposta[1])                
       }
   )

}
delete(req,res){
    const id_pedido= req.params.id_pedido
   PedidosModel.delete(id_doce).then(
       resposta =>{
           console.debug("Deletando pedido")
           res.status(resposta[0]).json(resposta[1])                
       }
   ).catch(
       resposta =>{
           console.debug(resposta)
           console.debug("Erro Deletando um pedido")
           res.status(resposta[0]).json(resposta[1])                
       }
   )

}
}

export default new PedidosController();