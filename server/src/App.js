import express from "express";
import ClienteController from "./Controllers/ClienteController.js";
import PedidosController from "./Controllers/PedidosController.js";

const server = express()
server.use(express.json())

server.get("/",(req,res)=>{
    res.status(200).json("Servidor Funcionando")
})


server.post("/clientes", ClienteController.create)
server.get("/clientes", ClienteController.read)
server.put("/clientes/:id_cliente",ClienteController.update)
server.delete("/clientes/:id_cliente",ClienteController.delete)

server.post("/pedidos",PedidosController.create)
server.get("/pedidos",PedidosController.read)
server.put("/pedidos/:id_pedido",PedidosController.update)
server.delete("/pedidos/:id_pedido",PedidosController.delete)

server.listen(5000)