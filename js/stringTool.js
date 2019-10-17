






const emailRegex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
function getPathParam(paramKey) {
    const url_string = window.location.href; //window.location.href
    const url = new URL(url_string);
    return url.searchParams.get(paramKey);
}
const toByteArr = (file) => {
    const reader = new FileReader();
    const fileByteArray = [];
    reader.readAsArrayBuffer(file);
    reader.onloadend = function (evt) {
        if (evt.target.readyState === FileReader.DONE) {
            const arrayBuffer = evt.target.result,
                array = new Uint8Array(arrayBuffer);
            for (let i = 0; i < array.length; i++) {
                fileByteArray.push(array[i]);
            }
        }

    };
    return fileByteArray;
};


String.prototype.pad = function (size) {
    let s = String(this);
    while (s.length < (size || 2)) {
        s = "0" + s;
    }
    return s;
};


const byId = (id) => document.getElementById(id);
const byAny = (selector) => {
    switch (selector.charAt(0)) {
        case '#':
            byId(selector.slice(1, selector.len));
            break;
        case ".":
            byClass(selector.slice(1, selector.len));
            break;
        case "@":
            byName(selector.slice(1, selector.len));
            break;
        default:
            snack("Js error.");
    }
};
const textFrom = (id) => byId(id).value;
const dateFrom = (id) => byId(`${id}Month`).value + '.' + byId(`${id}Day`).value + '.' + byId(`${id}Year`).value;
const byClass = (className) => Array.from(document.getElementsByClassName(className));
const byClassFirst = (className) => document.getElementsByClassName(className)[0];
const byName = (nameName) => Array.from(document.getElementsByName(nameName));
const createRow = () => document.createElement("tr");
const createCol = () => document.createElement("td");
const createUl = () => document.createElement("ul");
const createLi = (text) => {
    const li = document.createElement("li");
    if (text) li.innerText = text;
    return li;
};
const createLiText = (text) => {
    const li = document.createElement("li");
    li.innerText = text;
    return li;
};
const createDatalist = () => document.createElement("datalist");
const createButton = (...classes) => {
    const button = document.createElement("input");
    classes.forEach(className => button.classList.add(className));
    button.type = "button";
    return button;
};
const createDiv = (...classes) => {
    const div = document.createElement("div");
    classes.forEach(className => div.classList.add(className));
    return div;
};
const crDivData = (innerText) => {
    const div = document.createElement("div");
    div.innerText = innerText ? innerText : "no data";
    return div;
};
const createLabel = (forId = "", text = "") => {
    const label = document.createElement(`label`);
    label.for = forId;
    label.innerText = text;
    return label;
};

const createLabeledInput = (divClass, id, labelText) => {
    const div = createDiv(divClass);
    div.appendChild(createLabel(id, labelText));
    div.appendChild(createInput(id, null, labelText));
    return div;

};

const createCheckbox = (id = null, name = null, ...classlist) => {
    const checkbox = document.createElement("input",);
    checkbox.type = 'checkbox';
    id ? (checkbox.id = id) : "";
    name ? (checkbox.name = name) : "";
    classlist.forEach(className => checkbox.classList.add(className));
    return checkbox;
};
const createSpan = (...classes) => {
    const span = document.createElement("span");
    classes.forEach(className => span.classList.add(className));
    return span;
};
const createI = (...classes) => {
    const icon = document.createElement("i");
    classes.forEach(className => icon.classList.add(className));
    return icon;
};

const createSelect = () => {
    return document.createElement("select");
};

const createOption = (text = "Choose one...", value = "", select = null) => {
    const option = document.createElement("option");
    option.value = value;
    option.innerText = text;
    if (select) select.append(option);
    return option;
};

const createInput = (id = null, name = null, value = null, ...classList) => {
    const el = document.createElement("input");
    id ? (el.id = id) : "";
    name ? (el.name = name) : "";
    el.type = `text`;
    classList.forEach(className => el.classList.add(className));
    return el;
};
function store(key, value) {
    window.localStorage.setItem(key, value);

}

function gather(key) {
    return window.localStorage.getItem(key);
}
HTMLElement.prototype.appendAll = function (...children) {
    const parent = this;
    children.forEach(element => parent.appendChild(element))
};


HTMLElement.prototype.tglClass = function (className, bool) {
    if (bool !== null) bool ? this.addCl(className) : this.rmCl(className);
};
HTMLElement.prototype.withInnerText = function (innerText) {
    const el = this;
    el.innerText = innerText;
    return el;
};
HTMLElement.prototype.rmCl = function (...classNames) {
    classNames.forEach(cn => this.classList.remove(cn));

};
HTMLElement.prototype.rmCl = function (...classNames) {
    classNames.forEach(cn => this.classList.remove(cn));
};

HTMLElement.prototype.rmClSplit = function (classNamesString) {
    classNamesString.split(/ /g).forEach(cn => this.classList.remove(cn));
};

HTMLElement.prototype.addCl = function (...classNames) {
    classNames.forEach(cn => this.classList.add(cn));
};


HTMLInputElement.prototype.idAmend = function (id) {
    const element = this;
    element.id = id;
    return element;
};
HTMLInputElement.prototype.onEnterPress = function (handler) {
    this.addEventListener("keyup", (ev) => {
        if (ev.key.toLowerCase() === "enter") {
            handler();
        }
    });
};
HTMLElement.prototype.tglClassAuto = function (className) {
    this.classList.toggle(className);
};

HTMLElement.prototype.listenClick = function (handler) {
    this.addEventListener("click", handler);
    return this;
};
HTMLElement.prototype.listenHoverOnOff = function (enter, exit) {
    this.addEventListener("mouseenter", (me) => enter(this, me));
    this.addEventListener("mouseleave", (me) => exit(this, me));
};

HTMLElement.prototype.listenInput = function (handler) {
    this.addEventListener("input", handler);
};
HTMLElement.prototype.listenHover = function (handler) {
    this.addEventListener("mouseover", event => handler(event));
};
HTMLElement.prototype.offsetXY = function () {
    let el = this;
    const rect = el.getBoundingClientRect();

    // let x = 0;
    // let y = 0;
    //
    // while( el && !isNaN( el.offsetLeft ) && !isNaN( el.offsetTop ) ) {
    //     x += el.offsetLeft - el.scrollLeft;
    //     y += el.offsetTop - el.scrollTop;
    //     el = el.offsetParent;
    // }
    return {x: rect.left + window.scrollX, y: rect.top + window.scrollY};
};
HTMLElement.prototype.onHoverClass = function (className) {
    const el = this;
    el.listenHoverOnOff(() => {
        el.addCl(className);
    }, () => {
        el.rmCl(className);
    });
};

HTMLElement.prototype.childArray = function (filterArray) {
    if (filterArray) {
        return Array.from(this.childNodes).filter(el => filterArray.includes(el.nodeName));
    } else return Array.from(this.childNodes);
};

HTMLElement.prototype.childrenArray = function (filterArray) {
    if (filterArray) {
        return Array.from(this.children).filter(el => filterArray.includes(el.nodeName));
    } else return Array.from(this.children);
};


HTMLElement.prototype.childFirst = function () {
    return Array.from(this.childNodes)[0];
};


HTMLElement.prototype.listenEnter = function (handler) {
    this.addEventListener("keypress", ev => {
        if (ev.code === 'Enter') {
            handler();
        }
    });
};


function forValues(object, handler) {
    Object.values(object).forEach(element => handler(element));
}

function forKeys(object, handler) {
    Object.keys(object).forEach(element => handler(element));
}
Array.prototype.getLast = function(){return this[this.length - 1];};

const ID = () => "_" + Math.random().toString(36).substr(2, 9);

const ajaxReq = (url, port, body, header, success, error) => {
    if (url.substr(0, 1) === "/") {
        url = url.substr(1, url.length)
    }

    $.ajax({
        synchronous: true,
        dataType: 'json',
        type: 'post',
        contentType: 'application/json',
        url: `http://${reqUrl}${port}/${url}`,
        data: JSON.stringify(body),
        processData: true,
        success: response => {
            success(response);
        },
        error: errorMsq => {
            error(errorMsq);
        }
    });
};

const getLang = () => {
    const lang = localStorage.getItem("lang");
    if (!lang) localStorage.setItem("lang", "en");
    return localStorage.getItem("lang");
};
const changeLang = (lang) => {
    if (lang.toLowerCase() === 'en' ||
        lang.toLowerCase() === 'ru' ||
        lang.toLowerCase() === 'az'
    ) {
        localStorage.setItem("lang", lang);
        initLang();
    } else {
        console.log("Wrong language id");
    }
};
