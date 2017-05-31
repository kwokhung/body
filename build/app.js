"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("./extend");
var mqtt = require("mqtt");
var client = mqtt.connect("wss://mbltest01.mqtt.iot.gz.baidubce.com:8884/mqtt", {
    username: "mbltest01/body",
    password: "grSMaiLF8hiOtbPJFgXZdadTDBBKAY6I1KSNIKr+MgI="
});
client.on("connect", function (connack) {
    //console.log("on connect");
    //console.log(JSON.stringify(connack));
    client.on("message", function (topic, message, packet) {
        //console.log("on message");
        //console.log(JSON.stringify(topic));
        //console.log(JSON.stringify(message));
        //console.log(JSON.stringify(packet));
        console.log(topic + " <= " + message.toString());
    });
    client.subscribe("fromEight/#", function (err, granted) {
        //console.log("subscribe");
        //console.log(JSON.stringify(err));
        //console.log(JSON.stringify(granted));
    });
    client.subscribe("body/#", function (err, granted) {
        //console.log("subscribe");
        //console.log(JSON.stringify(err));
        //console.log(JSON.stringify(granted));
        if ((typeof err === "undefined" || err === null) && granted.some(function (value) { return value.topic === "body/#" && value.qos !== 128; })) {
            var iAm = {
                who: "body",
                whoAmI: "body",
                when: new Date().yyyyMMddHHmmss()
            };
            console.log("toEight/iAm" + " => " + JSON.stringify(iAm));
            client.publish("toEight/iAm", JSON.stringify(iAm), function (err) {
                //console.log("publish");
                //console.log(JSON.stringify(err));
            });
        }
    });
});
