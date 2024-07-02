import mysql from "mysql2"
import config from "../Config.js"

class PedidosModel{
    constructor(){
        this.conexao = mysql.createConnection(config.db)
        console.debug("Conectado")
    }
    create(id_pedido,nome_descricao){
        let sql = `insert into pedidos values("${id_pedido}","${descricao_pedido}", "${valor_total}", "${id_cliente}");`

        return new Promise((resolve, reject)=>{
            this.conexao.query(sql,(erro,retorno)=>{
                if(erro){
                    console.debug(erro)
                    reject([400,erro])
                }
                resolve([201,"Pedido inserido"])
            }) 
        });
    }
    read(){
        let sql = `select * from pedidos;`
        return new Promise((resolve,reject)=>{
            this.conexao.query(sql,(erro,retorno)=>{
                if(erro){
                    console.debug(erro)
                    reject([400,erro])
                }
                resolve([200,retorno])
            })
        });
         
    }
    update(id_pedido,descricao_pedido,id_cliente){
        let sql =`update pedidos set descricao_pedido="${descricao_pedido}", id_cliente="${id_cliente}" where id_pedido="${id_pedido}";`
        return new Promise ((resolve, reject)=>{
            this.conexao.query(sql,(erro,retorno)=>{
                if(erro){
                    console.debug(erro)
                    reject([400,erro])
                }
                resolve([200,"Pedido Atualizado"])
            })
        });       
    }
     delete(id_pedido){
        let sql = `delete from pedidos where id_pedido="${id_pedido}";`
        return new Promise((resolve,reject)=>{
            this.conexao.query(sql,(erro,retorno)=>{
                if(erro){
                    console.debug(erro)
                    reject([400,erro])
                }
                resolve([200,"Pedido deletado"])
            })
        });
     }
}




export default new PedidosModel();