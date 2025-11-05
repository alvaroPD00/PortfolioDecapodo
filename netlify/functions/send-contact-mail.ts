import type { Handler } from "@netlify/functions";
import nodemailer from "nodemailer";

const headers = {
  "Access-Control-Allow-Origin": "*", // ⚠️ En producción, reemplaza "*" por tu dominio
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type",
};

export const handler: Handler = async (event) => {
  // Manejar preflight OPTIONS
  if (event.httpMethod === "OPTIONS") {
    return {
      statusCode: 200,
      headers,
      body: "",
    };
  }

  if (!event.body) {
    return {
      statusCode: 400,
      headers,
      body: JSON.stringify({ message: "Missing body" }),
    };
  }

  const { nombre, email, tipoProyecto, mensaje } = JSON.parse(event.body);

  if (!nombre || !email || !tipoProyecto || !mensaje) {
    return {
      statusCode: 400,
      headers,
      body: JSON.stringify({ message: "Missing fields" }),
    };
  }

  const transporter = nodemailer.createTransport({
    host: process.env.MAIL_HOST,
    port: Number(process.env.MAIL_PORT) || 465,
    secure: true,
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASSWORD,
    },
  });

  try {
    await transporter.sendMail({
      from: `"${nombre}" <${process.env.MAIL_USER}>`,
      to: process.env.MAIL_USER,
      replyTo: email,
      subject: `Nuevo contacto: ${tipoProyecto}`,
      text: `
        Nombre: ${nombre}
        Email: ${email}
        Tipo de proyecto: ${tipoProyecto}
        Mensaje: ${mensaje}
      `,
    });

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({ message: "Success" }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ message: String(error) }),
    };
  }
};
