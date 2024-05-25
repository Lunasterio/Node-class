
const express = require("express");
const app = express();
const port = 3001;

const { getEquipos , getEquipoById } = require("./controllers/equipos.controlador")


app.get("/" , getEquipos);

app.get("/:id" , getEquipoById);


app.listen(port, ()=> {
    console.log(`Servidor corriendo exitosamente en el puerto: ${port}`);
    console.log("aaa");
})