/**@author cinast */
declare const version = "0.0.0";
declare const baseurl = "https://github.com/cinast/game/blob/main/";

function random(max: number, min?: number) {
    min = min || 0;
    if (max < min) max ^= min;
    return Math.random() * (max - min) + min;
}

function randint(max: number, min?: number) {
    return random(max, min);
}

function randID() {
    return randint(1e10).toString(16);
}

function read() {
    localStorage.getItem("x62o");
}

function store() {}

function XHRrequest(
    url: string,
    method: string,
    async?: boolean,
    retry?: boolean,
    fail?: (failcount: number) => any
) {
    let failcount: number = 0;
    function inner() {
        const request = new XMLHttpRequest();
        request.open(method, url, async || false);
        request.send();
        request.onreadystatechange = () => {
            if (request.readyState === XMLHttpRequest.DONE) {
                const status = request.status;
                if (status === 0 || (status >= 200 && status < 400)) {
                    return request.response;
                } else {
                    failcount++;
                    if (fail instanceof Function) {
                        fail(failcount);
                        if (retry) {
                            inner();
                        }
                    } else return new Error("request failed");
                }
                inner();
            }
        };
    }
    class basicElement {
        readonly id: string;
        readonly BaseType: string = "";
        type: string = "";
        tag: string[] = [];
        constructor(id?: string) {
            this.id = id || randID();
        }
    }

    class eventObjet extends basicElement {
        readonly BaseType = "eventObject";
        callback: Function;
        triged: boolean = false;
        constructor(type: string, callback: Function) {
            super();
            this.type = type;
            this.callback = callback;
        }
    }

    class character extends basicElement {
        BaseType = "character";
        x: number = 0.0;
        y: number = 0.0;
        name: string = "";
        globalSize: number = 1.0;
        visitable: boolean = true;
        rotation: number = 0.0;
        isClone: boolean = false;
        cloneNumber: number = 0;
        hasCloned: number = 0;
        clones: clonedCharacter[] = [];
        CloneFrom: character | undefined = undefined;
        effects = {};
        layerset: Layer[] = [];
        eventList: Record<string, eventObjet> = {};
        moveto(x: number, y: number) {
            this.x = x;
            this.y = y;
        }
        clone() {
            this.hasCloned++;
            let cl = new clonedCharacter(this);
            this.clones.push(cl);
            return cl;
        }
        set cloneFrom(char: character | undefined) {
            if (!this.isClone && this.CloneFrom?.BaseType !== "character")
                return;
            this.CloneFrom = char;
        }
        addEvListener(type: string, callback: Function) {
            let ev = new eventObjet(type, callback);
            this.eventList[ev.id] = ev;
            return ev.id;
        }
        deteleEvListener(evID: string, replace?: eventObjet) {
            let thisEv = this.eventList;
            delete thisEv[evID];
            if (replace instanceof eventObjet) {
                thisEv[evID] = replace;
            }
        }
    }

    class clonedCharacter extends character {
        isClone: boolean = true;
        set cloneFrom(char: character | undefined) {
            if (this.CloneFrom?.BaseType == "character") this.CloneFrom = char;
        }
        constructor(baseChara: character | clonedCharacter) {
            super();
            this.cloneNumber = baseChara.hasCloned;
            this.cloneFrom = baseChara;
        }
    }

    class sense extends basicElement {
        Idnex = 0;
        characters: Record<string, character> = {};
        addCharacter(...character: character[]) {
            character.forEach((c) => {
                this.characters = { ...this.characters, [c.name]: c };
            });
        }
        remove() {}
    }

    class Layer {
        readonly id: string;
        readonly BaseType: string = "layer";
        type: string = "nomal";
        tag: string[] = [];
        name: string = "";
        layerIndex = 0;
        content: ImageData;
        parent: character | undefined = undefined;
        constructor(type?: string, size?: number, id?: string) {
            this.id = id || randID();
            this.type = type || "";
        }
        moveto(index: number) {
            if (this.parent === undefined) return;
            let l = this.parent.layerset;
            l.splice(index, 0, l.splice(this.layerIndex, 1)[0]);
        }
        delete() {
            return this.parent == undefined
                ? new TypeError()
                : this.parent.layerset.splice(this.layerIndex, 1)[0];
        }
        concatLayer() {}
    }

    function enter() {
        /**@type {HTMLCanvasElement} */
        const canvas = document.getElementById("canvas");

        /**
         * @type {
         * {
         * name:string,
         * type:string,
         * url:string
         * }[]
         * }
         */
        const asseetslist = XHRrequest(
            "get",
            `${baseurl}/assets/assets.json`,
            false,
            true,
            (c) => {
                if (c > 3) {
                    throw new Error(
                        "assets list load failed \nyou need check network or retry <i>enter</i> function"
                    );
                }
            }
        );
         for (const i of asseetslist) {
        //    }
        let mapdata = {},
            characters = [],
            gamedata;
    }
}
