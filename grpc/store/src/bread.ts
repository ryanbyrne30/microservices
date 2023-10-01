import { ServerUnaryCall, sendUnaryData, status } from "@grpc/grpc-js";

const BREADS = [
  {
    sku: "brd_rye",
    name: "rye",
    price: 415,
    stock: 1,
  },
  {
    sku: "brd_whi",
    name: "white",
    price: 145,
    stock: 2,
  },
  {
    sku: "brd_whw",
    name: "whole wheat",
    price: 317,
    stock: 3,
  },
];

function convertToBread(b: (typeof BREADS)[number]): proto.Bread {
  return new proto.Bread([b.sku, b.name, b.price, b.stock]);
}

export function getAllBreads(
  _call: ServerUnaryCall<proto.Empty, proto.BreadList>,
  callback: sendUnaryData<proto.BreadList>
) {
  console.log("Received request for bread...");
  const breads = BREADS.map(convertToBread);

  const response = new proto.BreadList();
  response.setBreadList(breads);

  callback(null, response);
}

export function buyBread(
  call: ServerUnaryCall<proto.BuyBreadRequest, proto.BuyBreadResponse>,
  callback: sendUnaryData<proto.BuyBreadResponse>
) {
  const sku = call.request.getSku();
  const bread = BREADS.filter((b) => b.sku === sku)[0];
  if (!bread) {
    return callback({
      message: "Not found",
      name: "Not found",
      code: status.NOT_FOUND,
    });
  }
  if (bread.stock <= 0) {
    return callback({
      message: "None left",
      name: "Out of stock",
      code: status.RESOURCE_EXHAUSTED,
    });
  }
  bread.stock -= 1;

  const response = new proto.BuyBreadResponse();
  response.setBread(convertToBread(bread));

  return callback(null, response);
}
