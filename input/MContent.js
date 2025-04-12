import template from "./MContent.html";
import {Component} from "render-refer";

export default new Component({
    name: "MContent",
    template: template,
    data:{
        name:"liuzhang"
    },
    methods: {
        test(data){
            return "hello";
        },
        show(){
            alert("hello world")
        }
    }
})