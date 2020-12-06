import TimeManager from './TimeManager.js';


let danmaku = [];
export default class Bullet{
    
    elem;
    x;
    speedX=2;
    width;
 
   // danmaku = [];
    constructor(txt){
        this.elem = this.createElem(txt);
       
    }
    createElem(txt){
        console.log(txt,"ugyftug");
        if(this.elem) return
        danmaku.push(txt);
        let div = document.createElement("div");
        div.setAttribute("id","div1");
        Object.assign(div.style,{
            position:"absolute",
            whiteSpace: "nowrap",
            fontSize:"16px",
             //color:"#000",
            color:"#e00",
        })
        div.textContent = txt;
        return div
    }
    appendTo(parent){
        if(typeof parent === "string") parent = document.querySelector(parent);
        parent.appendChild(this.elem);
        let rect = parent.getBoundingClientRect();
        this.elem.style.top = Math.random()*rect.height/4 +"px";
        this.width = this.elem.offsetWidth;
        this.x = rect.width;
        this.elem.style.left = this.x + "px";
        TimeManager.instance.add(this);
    }
    update(){
        if(!this.elem) return;
        this.x -= this.speedX;
        this.elem.style.left = this.x +"px";
        if(this.x<-this.width){
            this.elem.remove();
            TimeManager.instance.remove(this);
            this.elem = null;
        }
    }
}

console.log(danmaku,"123")