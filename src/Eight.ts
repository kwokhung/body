import * as mqtt from "mqtt";

export namespace Eight {
    export namespace Inbound {
        export interface IAmParameter {
            who: string;
            whoAmI: string;
            when: string;
        }

        export interface IAmNoMoreParameter {
            who: string;
            whoAmI: string;
            when: string;
        }

        export interface HeartbeatParameter {
            who: string;
            when: string;
        }

        export interface TellOtherParameter {
            who: string;
            what: any;
            when: string;
        }

        export interface TellSomeoneParameter {
            who: string;
            whom: string;
            what: any;
            when: string;
        }

        export interface WhoAreThereParameter {
            who: string;
            when: string;
        }
    }

    export namespace Outbound {
        export interface HeIsParameter {
            who: string;
            when: string;
        }

        export interface HeIsNoMoreParameter {
            who: string;
            when: string;
        }

        export interface YouAreParameter {
            who: string;
            when: string;
        }

        export interface YouAreNoMoreParameter {
            who: string;
            when: string;
        }

        export interface SomeoneBeatParameter {
            who: string;
            when: string;
        }

        export interface SomeoneSaidParameter {
            who: string;
            what: any;
            when: string;
        }

        export interface ThereAreParameter {
            who: string[];
            when: string;
        }
    }

    export class Inbound {
        static iAm(client: mqtt.Client, iAm: Inbound.IAmParameter) {
            let heIs: Outbound.HeIsParameter = {
                who: iAm.whoAmI,
                when: new Date().yyyyMMddHHmmss()
            };

            console.log("fromEight/heIs" + " => " + JSON.stringify(heIs));

            client.publish("fromEight/heIs", JSON.stringify(heIs), (err) => {
                //console.log("publish");
                //console.log(JSON.stringify(err));
            });

            let youAre: Outbound.YouAreParameter = {
                who: iAm.whoAmI,
                when: new Date().yyyyMMddHHmmss()
            };

            console.log(iAm.whoAmI + "/youAre" + " => " + JSON.stringify(youAre));

            client.publish(iAm.whoAmI + "/youAre", JSON.stringify(youAre), (err) => {
                //console.log("publish");
                //console.log(JSON.stringify(err));
            });
        }

        static iAmNoMore(client: mqtt.Client, iAmNoMore: Inbound.IAmNoMoreParameter) {
            let heIsNoMore: Outbound.HeIsNoMoreParameter = {
                who: iAmNoMore.whoAmI,
                when: new Date().yyyyMMddHHmmss()
            };

            console.log("fromEight/heIs" + " => " + JSON.stringify(heIsNoMore));

            client.publish("fromEight/heIs", JSON.stringify(heIsNoMore), (err) => {
                //console.log("publish");
                //console.log(JSON.stringify(err));
            });

            let youAreNoMore: Outbound.YouAreNoMoreParameter = {
                who: iAmNoMore.whoAmI,
                when: new Date().yyyyMMddHHmmss()
            };

            console.log(iAmNoMore.whoAmI + "/youAre" + " => " + JSON.stringify(youAreNoMore));

            client.publish(iAmNoMore.whoAmI + "/youAre", JSON.stringify(youAreNoMore), (err) => {
                //console.log("publish");
                //console.log(JSON.stringify(err));
            });
        }

        static heartbeat(client: mqtt.Client, heartbeat: Inbound.HeartbeatParameter) {
            let someoneBeat: Outbound.SomeoneBeatParameter = {
                who: heartbeat.who,
                when: new Date().yyyyMMddHHmmss()
            };

            console.log("fromEight/someoneBeat" + " => " + JSON.stringify(someoneBeat));

            client.publish("fromEight/someoneBeat", JSON.stringify(someoneBeat), (err) => {
                //console.log("publish");
                //console.log(JSON.stringify(err));
            });
        }

        static tellOther(client: mqtt.Client, tellOther: Inbound.TellOtherParameter) {
            let someoneSaid: Outbound.SomeoneSaidParameter = {
                who: tellOther.who,
                what: tellOther.what,
                when: new Date().yyyyMMddHHmmss()
            };

            console.log("fromEight/someoneSaid" + " => " + JSON.stringify(someoneSaid));

            client.publish("fromEight/someoneSaid", JSON.stringify(someoneSaid), (err) => {
                //console.log("publish");
                //console.log(JSON.stringify(err));
            });
        }

        static tellSomeone(client: mqtt.Client, tellSomeone: Inbound.TellSomeoneParameter) {
            let someoneSaid: Outbound.SomeoneSaidParameter = {
                who: tellSomeone.who,
                what: tellSomeone.what,
                when: new Date().yyyyMMddHHmmss()
            };

            console.log(tellSomeone.who + "/someoneSaid" + " => " + JSON.stringify(someoneSaid));

            client.publish(tellSomeone.who + "/someoneSaid", JSON.stringify(someoneSaid), (err) => {
                //console.log("publish");
                //console.log(JSON.stringify(err));
            });
        }

        static whoAreThere(client: mqtt.Client, whoAreThere: Inbound.WhoAreThereParameter) {
            let who: string[] = [];

            for (let item in ["a", "b", "c"]) {
                who.push(item);
            }

            let thereAre: Outbound.ThereAreParameter = {
                who: who,
                when: new Date().yyyyMMddHHmmss()
            };

            console.log(whoAreThere.who + "/thereAre" + " => " + JSON.stringify(thereAre));

            client.publish(whoAreThere.who + "/thereAre", JSON.stringify(thereAre), (err) => {
                //console.log("publish");
                //console.log(JSON.stringify(err));
            });
        }
    }
}
