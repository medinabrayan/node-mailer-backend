import express from "express";
import EnvioCorreoController from "../controllers/HolaMundoController";

const route = express.Router();

const holaMundoController = new EnvioCorreoController();

route.post("/envio-correo", holaMundoController.enviarCorreo);

export default route;
