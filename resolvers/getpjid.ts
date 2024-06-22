import { Request, Response } from "npm:express@4.18.2"
import { Modelopersonaje } from "../db/personajes.ts"


export default async function getpjid(req: Request, res: Response) {
    const id = req.params.id
    const person = await Modelopersonaje.findById(id);
    if (!person) {
        return res.status(500).send("Eror no existe personaje con ese id");


    }
    const personajemostrar = {
        nombre: person.nombre,
        raza: person.raza,
        descripcion: person.descripcion,
        habilidades: person.habilidades,
    };
    return res.status(200).send(personajemostrar)
}