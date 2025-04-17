import template from "./MMenuItem.html";
import {Component} from "render-refer";

export default new Component({
    name: "MMenuItem",
    template: template,
    props:["label","url"],
    config: {
        boxMode: false
    },
    data:{
        label:""
    },
    methods:{
        redirect(){
            this.$get("test").redirect(this.$props.get("url"),{})
        }
    },
    beforeRender(){
        this.label = this.$props.get("label")
    }
})