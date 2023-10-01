CMD=./node_modules/.bin/grpc_tools_node_protoc
SRC=../store/protos/
DST=src/

# $CMD --proto_path=.. \
#   --js_out=library=store/protos/definitions,binary:$DST \
#   --grpc_out=library=generate_package_definition:$DST \
#   $(find $SRC -iname "*.proto")


$CMD --proto_path=.. \
  --js_out=import_style=commonjs,binary:$DST \
  --grpc_out=library=generate_package_definition:$DST \
  $(find $SRC -iname "*.proto")
