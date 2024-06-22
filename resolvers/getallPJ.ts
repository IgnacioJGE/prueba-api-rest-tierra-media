import { Request, Response } from "npm:express@4.18.2"
import { Modelopersonaje } from "../db/personajes.ts"
import { personaje } from "../types.ts";
export default async function getallPJ(req: Request, res: Response) {

    const persons = await Modelopersonaje.find();
    if (!persons) {
        return res.status(500).send("No hay personajes");


    }
    console.log(persons.at(0)?.nombre)
    const personajemostrar:personaje[]=[];
    for (let index = 0; index < persons.length; index++) {
       personajemostrar.push({
        nombre:persons.at(index)?.nombre,
        raza:persons.at(index)?.raza,
        descripcion:persons.at(index)?.descripcion,
        habilidades:persons.at(index)?.habilidades,
       })
        
    }
return res.status(200).send(personajemostrar)
}