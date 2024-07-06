import { K, randID } from "./utils";

const uiComponentFolder = "/webside/page/pages/";
const uiComponentList: Record<
    K,
    {
        path: string;
        assembledAt: string;
    }
> = {
    load: {
        path: "loading.html",
        assembledAt: "pageset",
    },
};

export function pageInital() {
    for (const [key, value] of Object.entries(uiComponentList)) {
        $.ajax({
            url: uiComponentFolder + value.path, // assuming you want to concatenate the folder path
            success: function (data) {
                $(value.path).html(data);
            },
        });
    }
}

// ui control
export const pages = (() => {
    let dict: Record<K, Element> = {};
    for (const e of document.querySelectorAll("page")) {
        dict[
            e.attributes.getNamedItem("pagename")?.value ??
                `<unnamed page#${randID()}>`
        ] = e;
    }
    return dict;
})() as Record<K, HTMLElement>;

/**
 * shown page or not
 */
export function PageTurnVisitable(name: K, v: boolean) {
    pages[name].style.visibility = v ? "visible" : "hidden";
}

/**
 * shown page or not
 * put names into the dict and set switch
 */
export function PagesTurnVisitable(list: { [k in K]: boolean }) {
    for (let i in list) {
        pages[i].style.visibility = list[i] ? "visible" : "hidden";
    }
}

export function loadboard() {
    let loadboard = pages["loading"],
        bar = loadboard.querySelector("#loading_bar") as HTMLElement;
}
