import { ServerErrorResponse, credentials, status } from "@grpc/grpc-js";
import { BreadServiceClient } from "./store/protos/bread_grpc_pb";
import { Status } from "@grpc/grpc-js/build/src/constants";

const client = new BreadServiceClient(
  "localhost:4500",
  credentials.createInsecure()
);

function getBreads() {
  const request = new proto.Empty();
  client.getAllBreads(request, (error: any, response: proto.BreadList) => {
    if (error) throw error;
    const breads = response.getBreadList();
    console.log("Breads...");
    breads.forEach((b) => {
      console.log(b.toObject());
    });
  });
}

function buyBread(sku: string) {
  const request = new proto.BuyBreadRequest();
  request.setSku(sku);

  client.buyBread(
    request,
    (error: ServerErrorResponse | null, response: proto.BuyBreadResponse) => {
      if (error) {
        console.log(error.message);
      } else console.log("Found bread", response.getBread()?.toObject());
    }
  );
}

function main() {
  getBreads();
  buyBread("brd_whi");
  console.log("\n\nBuying breadk...\n");
  buyBread("brd_whw");
  buyBread("brd_rye");
  buyBread("brd_whi");
  buyBread("brd_whw");
  buyBread("else");
  console.log("\nDone\n");
  getBreads();
}

main();
