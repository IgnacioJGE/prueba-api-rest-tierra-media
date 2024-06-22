
export type personaje={
    nombre:string,
    raza:razas,
    descripcion:string,
    habilidades:string[],
}

export enum razas{
   Hubbits,
   Humanos,
   Elfos,
   Enanos,
   Ents
}