"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllBreads = void 0;
function getAllBreads(_call, callback) {
    const response = new proto.BreadList();
    const breads = [
        new proto.Bread(["brd_rye", "rye", 415, 6]),
        new proto.Bread(["brd_whi", "white", 145, 22]),
        new proto.Bread(["brd_whw", "whole_wheat", 317, 17]),
    ];
    response.setBreadList(breads);
    callback(null, response);
}
exports.getAllBreads = getAllBreads;
