import grpc from "@grpc/grpc-js";
import protoLoader from "@grpc/proto-loader";
// import { breads } from "./data.js";

const breads = [
  {
    sku: "brd_rye",
    type: "rye",
    price: 415,
    stock: 6,
  },
  {
    sku: "brd_whi",
    type: "white",
    price: 145,
    stock: 22,
  },
  {
    sku: "brd_whw",
    type: "whole wheat",
    price: 317,
    stock: 17,
  },
];

const options = {
  keepCase: true,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true,
};

const protos = {
  bread: "protos/bread.proto",
};

const packageDefinition = protoLoader.loadSync(protos.bread, options);
const protoDescriptor = grpc.loadPackageDefinition(packageDefinition);
const breadProto = protoDescriptor;

// type Bread = {
//   sku: string;
//   type: string;
//   price: number;
//   stock: number;
// };

function getAllBreadsHelper() {
  console.log("Received request for breads");
  console.log("Breads", breads);
  return {
    bread: breads,
  };
}

function getAllBreads(call, callback) {
  callback(null, getAllBreadsHelper());
}

const server = new grpc.Server();
server.addService(breadProto.BreadService.service, {
  getAllBreads,
});

const address = "0.0.0.0:4500";
server.bindAsync(address, grpc.ServerCredentials.createInsecure(), () => {
  console.log("Server started @", address);
  server.start();
});
