declare global {
    interface Date {
        yyyyMMddHHmmss(): string;
    }
}

Date.prototype.yyyyMMddHHmmss = function () {
    var date = this;
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    var day = date.getDate();
    var hh = date.getHours();
    var mm = date.getMinutes();
    var ss = date.getSeconds();

    return "" + year +
        (month < 10 ? "0" + month : month) +
        (day < 10 ? "0" + day : day) +
        (hh < 10 ? "0" + hh : hh) +
        (mm < 10 ? "0" + mm : mm) +
        (ss < 10 ? "0" + ss : ss);
};

import * as mqtt from "mqtt";

let client = mqtt.connect("wss://mbltest01.mqtt.iot.gz.baidubce.com:8884/mqtt", {
    username: "mbltest01/body",
    password: "grSMaiLF8hiOtbPJFgXZdadTDBBKAY6I1KSNIKr+MgI="
});

client.on("connect", (connack) => {
    //console.log("on connect");
    //console.log(JSON.stringify(connack));

    client.on("message", (topic, message, packet) => {
        //console.log("on message");
        //console.log(JSON.stringify(topic));
        //console.log(JSON.stringify(message));
        //console.log(JSON.stringify(packet));

        console.log(topic + " <= " + message.toString());
    });

    client.subscribe("fromEight/#", (err, granted) => {
        //console.log("subscribe");
        //console.log(JSON.stringify(err));
        //console.log(JSON.stringify(granted));
    });

    client.subscribe("body/#", (err, granted) => {
        //console.log("subscribe");
        //console.log(JSON.stringify(err));
        //console.log(JSON.stringify(granted));

        if ((typeof err === "undefined" || err === null) && granted.some(value => value.topic === "body/#" && value.qos !== 128)) {
            let data: any = {
                who: "body",
                whoAmI: "body",
                when: new Date().yyyyMMddHHmmss()
            };

            console.log("toEight/i.am" + " => " + JSON.stringify(data));

            client.publish("toEight/i.am", JSON.stringify(data), (err) => {
                //console.log("publish");
                //console.log(JSON.stringify(err));
            });
        }
    });
})
