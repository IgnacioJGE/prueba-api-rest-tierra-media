import mongoose from "npm:mongoose@7.6.3"

import { personaje } from "../types.ts"
import { razas } from "../types.ts";
const Schema= mongoose.Schema;


const schemapersonaje= new Schema({
nombre:{type:String,required:true},
raza:{type:String,enum:razas,required:true},
descripcion:{type:String,required:true},
habilidades:{type:[String],required:true},



},
{timestamps:true})


export type tipopersonaje= mongoose.Document &(personaje)

export const Modelopersonaje= mongoose.model<tipopersonaje>("Personajes",schemapersonaje)