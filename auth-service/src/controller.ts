import { Request, Response } from "express";

export const sayHello = (req: Request, res: Response) => {
  res.send("Hello World!");
};

export const createUser = (req: Request, res: Response) => {
  const { name, email } = req.body;
  // Aquí iría el código para crear un nuevo usuario en la base de datos
  res.send(`User ${name} with email ${email} created successfully`);
};
