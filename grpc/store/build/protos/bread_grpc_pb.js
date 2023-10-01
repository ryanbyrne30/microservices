// GENERATED CODE -- DO NOT EDIT!
"use strict";
var protos_bread_pb = require("./bread_pb.js");
function serialize_BreadList(arg) {
    if (!(arg instanceof protos_bread_pb.BreadList)) {
        throw new Error("Expected argument of type BreadList");
    }
    return Buffer.from(arg.serializeBinary());
}
function deserialize_BreadList(buffer_arg) {
    return protos_bread_pb.BreadList.deserializeBinary(new Uint8Array(buffer_arg));
}
function serialize_Empty(arg) {
    if (!(arg instanceof protos_bread_pb.Empty)) {
        throw new Error("Expected argument of type Empty");
    }
    return Buffer.from(arg.serializeBinary());
}
function deserialize_Empty(buffer_arg) {
    return protos_bread_pb.Empty.deserializeBinary(new Uint8Array(buffer_arg));
}
var BreadServiceService = (exports["BreadService"] = {
    getAllBreads: {
        path: "/BreadService/GetAllBreads",
        requestStream: false,
        responseStream: false,
        requestType: protos_bread_pb.Empty,
        responseType: protos_bread_pb.BreadList,
        requestSerialize: serialize_Empty,
        requestDeserialize: deserialize_Empty,
        responseSerialize: serialize_BreadList,
        responseDeserialize: deserialize_BreadList,
    },
});
