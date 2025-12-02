import fastify from "fastify";
import cors from "@fastify/cors";

const server = fastify({logger:true});

const teams = [
    {id:1,name:"ferrari", base:"Portugal"},
    {id:2,name:"mercedes",base:"Angola"}
];

const drivers = [
        {id:1,name:"Esteves Júnior",team:"Ferrari"},
        {id:2,name:"Estefania",team:"Mercedes"}
];

server.register(cors,{
    origin:["*"],
});

server.get("/teams", async (request, response)=>{
    response.type("application/json").code(200);
    return {teams};
});

server.get("/drivers", async(request,response)=>{
    response.type("application/json").code(200);
    return {drivers};
});

interface DriverParams{
    id: string;
}

server.get<{Params: DriverParams}>("/driver/:id", async(request,response)=>{

    const id = parseInt(request.params.id);
    const driver = drivers.find((driv) => driv.id === id);

    if(!driver){
       response.type("application/json").code(404); 
       return { message: "Driver Not Found"};
    }else{
        response.type("application/json").code(200);
        return {driver};
    }
});

server.listen({port:3333}, ()=>{
    console.log("Server init");
});

/*server.listen({port:3333,host:"10.24.115.176"}, ()=>{
    console.log("Server init");
});*/
