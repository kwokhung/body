"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Eight;
(function (Eight) {
    var Inbound = (function () {
        function Inbound() {
        }
        Inbound.iAm = function (client, iAm) {
            var youAre = {
                who: iAm.whoAmI,
                when: new Date().yyyyMMddHHmmss()
            };
            console.log(iAm.whoAmI + "/you.are" + " => " + JSON.stringify(youAre));
            client.publish(iAm.whoAmI + "/you.are", JSON.stringify(youAre), function (err) {
                //console.log("publish");
                //console.log(JSON.stringify(err));
            });
            console.log("fromEight/he.is" + " => " + JSON.stringify(youAre));
            client.publish("fromEight/he.is", JSON.stringify(youAre), function (err) {
                //console.log("publish");
                //console.log(JSON.stringify(err));
            });
        };
        return Inbound;
    }());
    Eight.Inbound = Inbound;
})(Eight = exports.Eight || (exports.Eight = {}));
