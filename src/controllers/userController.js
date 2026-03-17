import { PrismaClient } from "../../generated/prisma/client.js";
import { adapter } from "../../prisma/adapter.js";

const prisma = new PrismaClient({ adapter });

export async function createUser(req, res) {
  const { lastName, firstName, surname, mail, password, confirmPassword } =
    req.body;
  try {
    if (password === confirmPassword) {
      await prisma.user.create({
        data: {
          lastName: lastName,
          firstName: firstName,
          surname: surname !== "" ? surname : null,
          mail: mail,
          password: password,
        },
      });
      res.json({ message: "Votre compte a été créé avec succès." });
    } else {
        throw new Error("Les mots de passe ne correspondent pas.")
    }
  } catch (error) {
    console.error(error);
    res.json({ message: "La création du compte a échoué." });
  }
}