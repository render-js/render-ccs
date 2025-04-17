import template from "./MMenu.html";
import {Component} from "render-refer";

export default new Component({
    name: "MMenu",
    template: template,
    config:{
        boxMode: false
    },
    boxStyle: "display:flex;display-direction:column;"
})