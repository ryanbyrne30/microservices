# store

To install dependencies:

```bash
bun install
```

To run:

```bash
bun run index.ts
```

This project was created using `bun init` in bun v1.0.3. [Bun](https://bun.sh) is a fast all-in-one JavaScript runtime.

# Generate protos

```
protoc --js_output=library=store_proto,binary:src/protos protos/*.proto
```

Generate services using `grpc_tools_node_protoc`

```
./node_modules/.bin/grpc_tools_node_protoc --js_out=import_style=commonjs,binary:src/ --grpc_out=generate_package_definition:src/ protos/bread.proto
```

# References

- https://dev.to/devaddict/use-grpc-with-node-js-and-typescript-3c58
- https://medium.com/@ahmadb/google-protocol-buffers-with-websockets-over-https-in-node-js-express-7ea78157394e
