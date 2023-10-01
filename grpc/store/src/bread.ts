import { ServerUnaryCall, sendUnaryData } from "@grpc/grpc-js";

export function getAllBreads(
  _call: ServerUnaryCall<proto.Empty, proto.BreadList>,
  callback: sendUnaryData<proto.BreadList>
) {
  const response = new proto.BreadList();

  const breads = [
    new proto.Bread(["brd_rye", "rye", 415, 6]),
    new proto.Bread(["brd_whi", "white", 145, 22]),
    new proto.Bread(["brd_whw", "whole_wheat", 317, 17]),
  ];

  response.setBreadList(breads);

  callback(null, response);
}
