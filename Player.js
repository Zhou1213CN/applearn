import Bullet from './Bullet.js';

export default class Player extends EventTarget{
    
    
    static WIDTH=638;
    static HEIGHT=493;
    elem;
    input;
 
    constructor(path){
        super();
        this.elem = this.createElem(path);
        document.addEventListener("keyup",e=>this.keyHandler(e));
    }
    keyHandler(e){
        if(e.keyCode !== 13) return;
        if(this.input.value.trim().length===0) return;
        let b = new Bullet(this.input.value);
        b.appendTo(this.elem);
        this.input.value = "";
    }
    /*addDanmaku(text){
    setStore({
      ...store,
      danmakus:store.danmakus.concat(text)
    });
    }*/
    appendTo(parent){
        if(typeof parent==="string") parent = document.querySelector(parent);

        parent.appendChild(this.elem);
    }

    changeColor(newColor){
        var elem = document.getElementById('div1');
        elem.style.color = newColor;
    }

    createElem(path){
        // 播放器最外层容器
        let player = document.createElement("div");
        player.className = "player";
        Object.assign(player.style,{
            width:Player.WIDTH+"px",
            height:Player.HEIGHT+"px",
            userSelect:"none",
            overflow: "hidden",
           
           //position:"relative",
           position:"absolute",
            verticalAlign:"baseline",
        })
        // 播放器视频播放部分：应包括顶部作者和反馈栏、视频状态按钮、视频展示部分。。。。
        let videoWrap = document.createElement("div");
        Object.assign(videoWrap.style,{
            width:"100%",
            height:"447px",
            backgroundColor:"#000",
            position:"relative",
            top:0,
            display:"flex",
            flexDirection:"column",
        })
        // 创建播放器上层：包括标题，作者，反馈意见和举报等。。。。
        let videoTop = document.createElement("div");
        Object.assign(videoTop.style,{
            width:"100%",
            height:"42px",
            position:"relative",
            top:"0px",
            left:"0px",
            opacity:"0",
            color:"#fff",
            pointerEvents:"none",
            // transition: "all .2s ease-in-out",
            transition: "all .2s",
        })
        // 视频播放状态开关
        // let videoState = document.createElement("div");
        // 视频播放部分
        let videoContent = document.createElement("div");
        Object.assign(videoContent.style,{
            width:"100%",
            // height:"100%",
            height:"361px",
            position:"relative",
            userSelect:"none",
        })
        let video = document.createElement("video");
        video.src = path;
        video.controls = "controls";
        video.preload = "auto";
        Object.assign(video.style,{
            // 视频居中：进度条被拉长，但是视频不会被拉长，直接居中：
            height:"100%",
            width:"100%",
        })
        videoContent.appendChild(video);
 
        // 视频播放和弹幕滚动控制栏：清晰度/倍速/循环/镜像/宽屏/网页全屏/进度条等、、、、、
        let videoControlWrap = document.createElement("div");
        Object.assign(videoControlWrap.style,{
            width:"100%",
            height:"44px",
            opacity:"0",
            position:"relative",
            bottom:"0",
        })
 
        // 底部发送弹幕及设置发送弹幕样式：例如弹幕颜色/字号/滚动/悬停/速度/字体/屏蔽等。。。
        let bottomArea = document.createElement("div");
        Object.assign(bottomArea.style,{
            width:"100%",
            height:"46px",
            
        })
        this.input = document.createElement("input");
        this.input.setAttribute("id","div1");
        //input area
        Object.assign(this.input.style,{
           // width:"130px",
           width:"130px",
            height:"30px",
            color:"#212121",
            
            // border:"0px",
            lineHeight:"30px",
            boxSizing: "border-box",
            minWidth: "115px",
            padding:"0 5px",
            fontSize:"12px",
            border:"1px solid #e7e7e7",    //外框样式：
            backgroundColor:"#f4f4f4",
        })
        bottomArea.appendChild(this.input);
 
        videoWrap.appendChild(videoTop);
        videoWrap.appendChild(videoContent);
        videoWrap.appendChild(videoControlWrap);
 
        player.appendChild(videoWrap);
        player.appendChild(bottomArea);
        return player;
        
    }
}