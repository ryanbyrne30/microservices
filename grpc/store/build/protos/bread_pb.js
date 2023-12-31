"use strict";
// source: protos/bread.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {missingRequire} reports error on implicit type usages.
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck
var jspb = require('google-protobuf');
var goog = jspb;
var global = (function () {
    if (this) {
        return this;
    }
    if (typeof window !== 'undefined') {
        return window;
    }
    if (typeof global !== 'undefined') {
        return global;
    }
    if (typeof self !== 'undefined') {
        return self;
    }
    return Function('return this')();
}.call(null));
goog.exportSymbol('proto.Bread', null, global);
goog.exportSymbol('proto.BreadList', null, global);
goog.exportSymbol('proto.Empty', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.Bread = function (opt_data) {
    jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.Bread, jspb.Message);
if (goog.DEBUG && !COMPILED) {
    /**
     * @public
     * @override
     */
    proto.Bread.displayName = 'proto.Bread';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.Empty = function (opt_data) {
    jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.Empty, jspb.Message);
if (goog.DEBUG && !COMPILED) {
    /**
     * @public
     * @override
     */
    proto.Empty.displayName = 'proto.Empty';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.BreadList = function (opt_data) {
    jspb.Message.initialize(this, opt_data, 0, -1, proto.BreadList.repeatedFields_, null);
};
goog.inherits(proto.BreadList, jspb.Message);
if (goog.DEBUG && !COMPILED) {
    /**
     * @public
     * @override
     */
    proto.BreadList.displayName = 'proto.BreadList';
}
if (jspb.Message.GENERATE_TO_OBJECT) {
    /**
     * Creates an object representation of this proto.
     * Field names that are reserved in JavaScript and will be renamed to pb_name.
     * Optional fields that are not set will be set to undefined.
     * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
     * For the list of reserved names please see:
     *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
     * @param {boolean=} opt_includeInstance Deprecated. whether to include the
     *     JSPB instance for transitional soy proto support:
     *     http://goto/soy-param-migration
     * @return {!Object}
     */
    proto.Bread.prototype.toObject = function (opt_includeInstance) {
        return proto.Bread.toObject(opt_includeInstance, this);
    };
    /**
     * Static version of the {@see toObject} method.
     * @param {boolean|undefined} includeInstance Deprecated. Whether to include
     *     the JSPB instance for transitional soy proto support:
     *     http://goto/soy-param-migration
     * @param {!proto.Bread} msg The msg instance to transform.
     * @return {!Object}
     * @suppress {unusedLocalVariables} f is only used for nested messages
     */
    proto.Bread.toObject = function (includeInstance, msg) {
        var f, obj = {
            sku: jspb.Message.getFieldWithDefault(msg, 1, ""),
            type: jspb.Message.getFieldWithDefault(msg, 2, ""),
            price: jspb.Message.getFieldWithDefault(msg, 3, 0),
            stock: jspb.Message.getFieldWithDefault(msg, 4, 0)
        };
        if (includeInstance) {
            obj.$jspbMessageInstance = msg;
        }
        return obj;
    };
}
/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.Bread}
 */
proto.Bread.deserializeBinary = function (bytes) {
    var reader = new jspb.BinaryReader(bytes);
    var msg = new proto.Bread;
    return proto.Bread.deserializeBinaryFromReader(msg, reader);
};
/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Bread} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Bread}
 */
proto.Bread.deserializeBinaryFromReader = function (msg, reader) {
    while (reader.nextField()) {
        if (reader.isEndGroup()) {
            break;
        }
        var field = reader.getFieldNumber();
        switch (field) {
            case 1:
                var value = /** @type {string} */ (reader.readString());
                msg.setSku(value);
                break;
            case 2:
                var value = /** @type {string} */ (reader.readString());
                msg.setType(value);
                break;
            case 3:
                var value = /** @type {number} */ (reader.readInt64());
                msg.setPrice(value);
                break;
            case 4:
                var value = /** @type {number} */ (reader.readInt64());
                msg.setStock(value);
                break;
            default:
                reader.skipField();
                break;
        }
    }
    return msg;
};
/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.Bread.prototype.serializeBinary = function () {
    var writer = new jspb.BinaryWriter();
    proto.Bread.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
};
/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.Bread} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Bread.serializeBinaryToWriter = function (message, writer) {
    var f = undefined;
    f = message.getSku();
    if (f.length > 0) {
        writer.writeString(1, f);
    }
    f = message.getType();
    if (f.length > 0) {
        writer.writeString(2, f);
    }
    f = message.getPrice();
    if (f !== 0) {
        writer.writeInt64(3, f);
    }
    f = message.getStock();
    if (f !== 0) {
        writer.writeInt64(4, f);
    }
};
/**
 * optional string sku = 1;
 * @return {string}
 */
proto.Bread.prototype.getSku = function () {
    return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};
/**
 * @param {string} value
 * @return {!proto.Bread} returns this
 */
proto.Bread.prototype.setSku = function (value) {
    return jspb.Message.setProto3StringField(this, 1, value);
};
/**
 * optional string type = 2;
 * @return {string}
 */
proto.Bread.prototype.getType = function () {
    return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};
/**
 * @param {string} value
 * @return {!proto.Bread} returns this
 */
proto.Bread.prototype.setType = function (value) {
    return jspb.Message.setProto3StringField(this, 2, value);
};
/**
 * optional int64 price = 3;
 * @return {number}
 */
proto.Bread.prototype.getPrice = function () {
    return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};
/**
 * @param {number} value
 * @return {!proto.Bread} returns this
 */
proto.Bread.prototype.setPrice = function (value) {
    return jspb.Message.setProto3IntField(this, 3, value);
};
/**
 * optional int64 stock = 4;
 * @return {number}
 */
proto.Bread.prototype.getStock = function () {
    return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};
/**
 * @param {number} value
 * @return {!proto.Bread} returns this
 */
proto.Bread.prototype.setStock = function (value) {
    return jspb.Message.setProto3IntField(this, 4, value);
};
if (jspb.Message.GENERATE_TO_OBJECT) {
    /**
     * Creates an object representation of this proto.
     * Field names that are reserved in JavaScript and will be renamed to pb_name.
     * Optional fields that are not set will be set to undefined.
     * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
     * For the list of reserved names please see:
     *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
     * @param {boolean=} opt_includeInstance Deprecated. whether to include the
     *     JSPB instance for transitional soy proto support:
     *     http://goto/soy-param-migration
     * @return {!Object}
     */
    proto.Empty.prototype.toObject = function (opt_includeInstance) {
        return proto.Empty.toObject(opt_includeInstance, this);
    };
    /**
     * Static version of the {@see toObject} method.
     * @param {boolean|undefined} includeInstance Deprecated. Whether to include
     *     the JSPB instance for transitional soy proto support:
     *     http://goto/soy-param-migration
     * @param {!proto.Empty} msg The msg instance to transform.
     * @return {!Object}
     * @suppress {unusedLocalVariables} f is only used for nested messages
     */
    proto.Empty.toObject = function (includeInstance, msg) {
        var f, obj = {};
        if (includeInstance) {
            obj.$jspbMessageInstance = msg;
        }
        return obj;
    };
}
/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.Empty}
 */
proto.Empty.deserializeBinary = function (bytes) {
    var reader = new jspb.BinaryReader(bytes);
    var msg = new proto.Empty;
    return proto.Empty.deserializeBinaryFromReader(msg, reader);
};
/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Empty} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Empty}
 */
proto.Empty.deserializeBinaryFromReader = function (msg, reader) {
    while (reader.nextField()) {
        if (reader.isEndGroup()) {
            break;
        }
        var field = reader.getFieldNumber();
        switch (field) {
            default:
                reader.skipField();
                break;
        }
    }
    return msg;
};
/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.Empty.prototype.serializeBinary = function () {
    var writer = new jspb.BinaryWriter();
    proto.Empty.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
};
/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.Empty} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Empty.serializeBinaryToWriter = function (message, writer) {
    var f = undefined;
};
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.BreadList.repeatedFields_ = [1];
if (jspb.Message.GENERATE_TO_OBJECT) {
    /**
     * Creates an object representation of this proto.
     * Field names that are reserved in JavaScript and will be renamed to pb_name.
     * Optional fields that are not set will be set to undefined.
     * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
     * For the list of reserved names please see:
     *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
     * @param {boolean=} opt_includeInstance Deprecated. whether to include the
     *     JSPB instance for transitional soy proto support:
     *     http://goto/soy-param-migration
     * @return {!Object}
     */
    proto.BreadList.prototype.toObject = function (opt_includeInstance) {
        return proto.BreadList.toObject(opt_includeInstance, this);
    };
    /**
     * Static version of the {@see toObject} method.
     * @param {boolean|undefined} includeInstance Deprecated. Whether to include
     *     the JSPB instance for transitional soy proto support:
     *     http://goto/soy-param-migration
     * @param {!proto.BreadList} msg The msg instance to transform.
     * @return {!Object}
     * @suppress {unusedLocalVariables} f is only used for nested messages
     */
    proto.BreadList.toObject = function (includeInstance, msg) {
        var f, obj = {
            breadList: jspb.Message.toObjectList(msg.getBreadList(), proto.Bread.toObject, includeInstance)
        };
        if (includeInstance) {
            obj.$jspbMessageInstance = msg;
        }
        return obj;
    };
}
/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.BreadList}
 */
proto.BreadList.deserializeBinary = function (bytes) {
    var reader = new jspb.BinaryReader(bytes);
    var msg = new proto.BreadList;
    return proto.BreadList.deserializeBinaryFromReader(msg, reader);
};
/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.BreadList} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.BreadList}
 */
proto.BreadList.deserializeBinaryFromReader = function (msg, reader) {
    while (reader.nextField()) {
        if (reader.isEndGroup()) {
            break;
        }
        var field = reader.getFieldNumber();
        switch (field) {
            case 1:
                var value = new proto.Bread;
                reader.readMessage(value, proto.Bread.deserializeBinaryFromReader);
                msg.addBread(value);
                break;
            default:
                reader.skipField();
                break;
        }
    }
    return msg;
};
/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.BreadList.prototype.serializeBinary = function () {
    var writer = new jspb.BinaryWriter();
    proto.BreadList.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
};
/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.BreadList} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.BreadList.serializeBinaryToWriter = function (message, writer) {
    var f = undefined;
    f = message.getBreadList();
    if (f.length > 0) {
        writer.writeRepeatedMessage(1, f, proto.Bread.serializeBinaryToWriter);
    }
};
/**
 * repeated Bread bread = 1;
 * @return {!Array<!proto.Bread>}
 */
proto.BreadList.prototype.getBreadList = function () {
    return /** @type{!Array<!proto.Bread>} */ (jspb.Message.getRepeatedWrapperField(this, proto.Bread, 1));
};
/**
 * @param {!Array<!proto.Bread>} value
 * @return {!proto.BreadList} returns this
*/
proto.BreadList.prototype.setBreadList = function (value) {
    return jspb.Message.setRepeatedWrapperField(this, 1, value);
};
/**
 * @param {!proto.Bread=} opt_value
 * @param {number=} opt_index
 * @return {!proto.Bread}
 */
proto.BreadList.prototype.addBread = function (opt_value, opt_index) {
    return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.Bread, opt_index);
};
/**
 * Clears the list making it empty but non-null.
 * @return {!proto.BreadList} returns this
 */
proto.BreadList.prototype.clearBreadList = function () {
    return this.setBreadList([]);
};
goog.object.extend(exports, proto);
