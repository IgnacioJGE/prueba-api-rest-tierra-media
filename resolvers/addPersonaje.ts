import {Request,Response} from "npm:express@4.18.2"
import { Modelopersonaje } from "../db/personajes.ts"
import { personaje } from '../types.ts';
import { razas } from '../types.ts';



export default async function addPersonaje(req:Request,res:Response){

    const {nombre,
        raza,
        descripcion,
        habilidades}=req.body
    if(!nombre||!raza||!descripcion||!habilidades){
        return res.status(500).send("Error datos incompletos")
    }
    if(!Object.values(razas).includes(raza)){
        return res.status(500).send("Error raza no comprendida")

    }
    const alreadyexists= await Modelopersonaje.findOne({nombre,raza})
    if(alreadyexists){
        return res.status(500).send("Personaje ya existente")

    }
    const nuevopj= new Modelopersonaje({
        nombre:nombre,
        raza:raza,
        descripcion:descripcion,
        habilidades:habilidades
    })
    await nuevopj.save()
    return res.status(200).send({
        nombre:nuevopj.nombre,
        raza:nuevopj.raza,
        descripcion:nuevopj.descripcion,
        habilidades:nuevopj.habilidades  
    })


}