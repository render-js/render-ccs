import template from "./MContent.html";
import {Component} from "render-refer";

export default new Component({
    name: "MContent",
    template: template,
    config: {
        boxMode: false
    },
    data:{
        name:"liuzhang",
        haode: "",
        change: 0,
        kk: ""
    },
    props: {
        kk:"string"
    },
    methods: {
        show(event){
            if (this.change === 0){
                this.$get("test").changeTheme("yes");
                this.change = 1;
            }else{
                this.$get("test").changeTheme("default");
                this.change = 0;
            }
        },
        hao(event){
            let to = event.target.getAttribute("to");
            this.$refs.get(to).innerText = event.target.innerText;
        }
    }
})