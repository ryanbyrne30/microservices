import grpc from "@grpc/grpc-js";
import protoLoader from "@grpc/proto-loader";

const PROTO_PATH = "../store/protos/bread.proto"

const options = {
  keepCase: true,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true,
};

const packageDefinition = protoLoader.loadSync(PROTO_PATH, options);
const BreadService = grpc.loadPackageDefinition(packageDefinition).BreadService;

const client = new BreadService(
	"localhost:4500",
	grpc.credentials.createInsecure()
);

client.getAllBreads({}, (error, breads) => {
	if (error) throw error;
	console.log(breads);
})

