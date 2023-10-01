import grpc from "@grpc/grpc-js";
import { BreadService } from "./protos/bread_grpc_pb";
import { getAllBreads } from "./bread";

const server = new grpc.Server();
server.addService(BreadService, {
  getAllBreads,
});

const address = "0.0.0.0:4500";
server.bindAsync(address, grpc.ServerCredentials.createInsecure(), () => {
  console.log("Server started @", address);
  server.start();
});
