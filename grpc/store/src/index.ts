import { Server, ServerCredentials } from "@grpc/grpc-js";
import { getAllBreads } from "./bread";
import { BreadService } from "./protos/bread_grpc_pb";

const server = new Server();
server.addService(BreadService, {
  getAllBreads,
});

const address = "0.0.0.0:4500";
server.bindAsync(address, ServerCredentials.createInsecure(), () => {
  console.log("Server started @", address);
  server.start();
});
