// GENERATED CODE -- DO NOT EDIT!

'use strict';
var protos_bread_pb = require('../protos/bread_pb.js');

function serialize_BreadList(arg) {
  if (!(arg instanceof protos_bread_pb.BreadList)) {
    throw new Error('Expected argument of type BreadList');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_BreadList(buffer_arg) {
  return protos_bread_pb.BreadList.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_BuyBreadRequest(arg) {
  if (!(arg instanceof protos_bread_pb.BuyBreadRequest)) {
    throw new Error('Expected argument of type BuyBreadRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_BuyBreadRequest(buffer_arg) {
  return protos_bread_pb.BuyBreadRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_BuyBreadResponse(arg) {
  if (!(arg instanceof protos_bread_pb.BuyBreadResponse)) {
    throw new Error('Expected argument of type BuyBreadResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_BuyBreadResponse(buffer_arg) {
  return protos_bread_pb.BuyBreadResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_Empty(arg) {
  if (!(arg instanceof protos_bread_pb.Empty)) {
    throw new Error('Expected argument of type Empty');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_Empty(buffer_arg) {
  return protos_bread_pb.Empty.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_StockBreadRequest(arg) {
  if (!(arg instanceof protos_bread_pb.StockBreadRequest)) {
    throw new Error('Expected argument of type StockBreadRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_StockBreadRequest(buffer_arg) {
  return protos_bread_pb.StockBreadRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_StockBreadResponse(arg) {
  if (!(arg instanceof protos_bread_pb.StockBreadResponse)) {
    throw new Error('Expected argument of type StockBreadResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_StockBreadResponse(buffer_arg) {
  return protos_bread_pb.StockBreadResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var BreadServiceService = exports['BreadService'] = {
  getAllBreads: {
    path: '/BreadService/GetAllBreads',
    requestStream: false,
    responseStream: false,
    requestType: protos_bread_pb.Empty,
    responseType: protos_bread_pb.BreadList,
    requestSerialize: serialize_Empty,
    requestDeserialize: deserialize_Empty,
    responseSerialize: serialize_BreadList,
    responseDeserialize: deserialize_BreadList,
  },
  buyBread: {
    path: '/BreadService/BuyBread',
    requestStream: false,
    responseStream: false,
    requestType: protos_bread_pb.BuyBreadRequest,
    responseType: protos_bread_pb.BuyBreadResponse,
    requestSerialize: serialize_BuyBreadRequest,
    requestDeserialize: deserialize_BuyBreadRequest,
    responseSerialize: serialize_BuyBreadResponse,
    responseDeserialize: deserialize_BuyBreadResponse,
  },
  stockBread: {
    path: '/BreadService/StockBread',
    requestStream: false,
    responseStream: false,
    requestType: protos_bread_pb.StockBreadRequest,
    responseType: protos_bread_pb.StockBreadResponse,
    requestSerialize: serialize_StockBreadRequest,
    requestDeserialize: deserialize_StockBreadRequest,
    responseSerialize: serialize_StockBreadResponse,
    responseDeserialize: deserialize_StockBreadResponse,
  },
};

