import express,{Request,Response} from "npm:express@4.18.2";
import mongoose from "npm:mongoose@7.6.3"
import { load } from "https://deno.land/std@0.204.0/dotenv/mod.ts";
import addPersonaje from "./resolvers/addPersonaje.ts";
import getallPJ from "./resolvers/getallPJ.ts";
import getpjid from "./resolvers/getpjid.ts";

const env=await load()
const MONGO_URL=env.MONGO_URL||Deno.env.get("MONGO_URL")
const PORT=env.PORT||Deno.env.get("PORT")||8000

if (!MONGO_URL) {
  console.log("No mongo URL found");
  Deno.exit(1);

}

try {
  await mongoose.connect(MONGO_URL);
  console.info("Mongo Concectado")
  const app= express();
  app.use(express.json())
  app.post("/api/tierramedia/personajes",addPersonaje)
  app.get("/api/tierramedia/personajes",getallPJ)
  app.get("/api/tierramedia/personajes/:id",getpjid)


  app.listen(PORT,()=> console.info ((`Te estoy escuchando desde ${PORT}`)));

} catch (error) {
  console.error(error)

}
