export namespace EightInterface {
    export namespace Store {
        export interface Resource {
            who: string;
            when: string;
        }
    }

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
}
