CMD=./node_modules/.bin/grpc_tools_node_protoc
SRC=protos/
DST=src/

$CMD --js_out=import_style=commonjs,binary:$DST \
  --grpc_out=generate_package_definition:$DST \
  $(find $SRC -iname "*.proto")
