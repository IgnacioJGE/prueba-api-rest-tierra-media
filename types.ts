
export type personaje={
    nombre:string,
    raza:razas,
    descripcion:string,
    habilidades:string[],
}

export enum razas{
   "Hobbits",
   "Humanos",
   "Elfos",
   "Enanos",
   "Ents"
}