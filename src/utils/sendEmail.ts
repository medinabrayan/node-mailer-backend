import nodemailer from "nodemailer";

const sendEmail = async (email: string, subject: string, text: string) => {
	try {
		const transporter = nodemailer.createTransport({
			host: "smtp.gmail.com",
			port: 587,
			auth: {
				user: "juanlov4321@gmail.com",
				pass: "gsrz jjsb zdnh ihwh",
			},
		});
		await transporter.sendMail({
			from: "juanlov4321@gmail.com",
			to: email,
			subject: subject,
			text: text,
		});
	} catch (error) {
		console.log(error);
	}
};

export default sendEmail;
