import { Request, Response } from "express";
import sendEmail from "../utils/sendEmail";

class EnvioCorreoController {
	enviarCorreo(req: Request, res: Response) {
		try {
			const { nombre, correo, mensaje } = req.body;
			sendEmail(correo, "Gracias por contactarnos", `Hola ${nombre}, gracias por contactarnos. Nos pondremos en contacto contigo lo más pronto posible. Tu mensaje fue: ${mensaje}`);
			res.status(200).json({ message: "Correo enviado" });
		} catch (error) {
			res.status(500).json({ message: "Error al enviar el correo" });
		}
	}
}

export default EnvioCorreoController;
