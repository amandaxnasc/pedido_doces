import mysql from "mysql2"
import config from "../Config.js"

class ClienteModel{
    constructor(){
        this.conexao = mysql.createConnection(config.db);
        console.debug("Conectado")
    }
    create(nome_cliente,endereco){
        let sql = `insert into clientes values(${null},"${nome_cliente}","${endereco}");`;
        
        return new Promise((resolve, reject)=>{
            this.conexao.query(sql,(erro, retorno)=>{
                if(erro){
                    reject([400, erro])
                }
                resolve([201, "Cliente Adicionado!"])
            })
        });
    }
    read(req,res){
        let sql = `select * from clientes;`
        
        return new Promise((resolve,reject)=>{
            this.conexao.query(sql,(erro,retorno)=>{
                if(erro){
                    console.debug(erro)
                    reject([400, erro])
                }
                resolve([200,retorno])
            })
        });
    }
    update(id_cliente,nome_cliente,endereco){
        let sql = `update clientes set nome_cliente=("${nome_cliente}"),endereco=("${endereco}") where id_cliente="${id_cliente}"`

        return new Promise((resolve,reject)=>{
            this.conexao.query(sql,(erro,retorno)=>{
                if(erro){
                    console.debug(erro)
                    reject([400, erro])
                }
                resolve([200, "Atualizado"])
            })
        });
        
    }
    delete(id_cliente){
        let sql = `delete from clientes where id_cliente="${id_cliente}";`
        return new Promise((resolve, reject)=>{
            this.conexao.query(sql,(erro,retorno) => {
                if(erro){
                    console.debug(erro)
                    reject([400,erro])
                }
                resolve([200,"Deletado"])
            });
        });
    }
}

export default new ClienteModel();