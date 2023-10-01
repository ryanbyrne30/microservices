"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const grpc_js_1 = __importDefault(require("@grpc/grpc-js"));
const bread_1 = require("./bread");
const bread_grpc_pb_1 = require("./protos/bread_grpc_pb");
const server = new grpc_js_1.default.Server();
server.addService(bread_grpc_pb_1.BreadService, {
    getAllBreads: bread_1.getAllBreads,
});
const address = "0.0.0.0:4500";
server.bindAsync(address, grpc_js_1.default.ServerCredentials.createInsecure(), () => {
    console.log("Server started @", address);
    server.start();
});
