#!/bin/bash

if [[ $# != "2" ]]; then
	echo "Usage: $0 <input.proto> <outdir>"
	exit 1
fi

IFILE=$1
OUTDIR=$(pwd)/$2

protoc --js_out=import_style=commonjs,binary:$OUTDIR --grpc_out=$OUTDIR --plugin=protoc-gen-grpc=`which grpc_tools_node_protoc_plugin` $IFILE
