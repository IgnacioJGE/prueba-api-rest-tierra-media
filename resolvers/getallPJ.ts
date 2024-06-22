import { Request, Response } from "npm:express@4.18.2"
import { Modelopersonaje } from "../db/personajes.ts"
export default async function getallPJ(req: Request, res: Response) {

    const persons = await Modelopersonaje.find();
    if (!persons) {
        return res.status(500).send("No hay personajes");


    }
    const personajemostrar= persons.map(person => ({
        id:person._id,
        nombre: person.nombre,
        raza: person.raza,
        descripcion: person.descripcion,
        habilidades: person.habilidades,
    }));
return res.status(200).send(personajemostrar)
}