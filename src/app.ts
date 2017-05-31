import "./extend";
import * as mqtt from "mqtt";
import { Eight } from "./Eight";

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
            let iAm: Eight.Inbound.IAmParameter = {
                who: "body",
                whoAmI: "body",
                when: new Date().yyyyMMddHHmmss()
            };

            console.log("toEight/iAm" + " => " + JSON.stringify(iAm));

            client.publish("toEight/iAm", JSON.stringify(iAm), (err) => {
                //console.log("publish");
                //console.log(JSON.stringify(err));
            });
        }
    });

    setInterval(() => {
        let heartbeat: Eight.Inbound.HeartbeatParameter = {
            who: "body",
            when: new Date().yyyyMMddHHmmss()
        };

        console.log("toEight/heartbeat" + " => " + JSON.stringify(heartbeat));

        client.publish("toEight/heartbeat", JSON.stringify(heartbeat), (err) => {
            //console.log("publish");
            //console.log(JSON.stringify(err));
        });
    }, 1000);
})
