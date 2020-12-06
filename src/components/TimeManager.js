export default class TimeManager{
    
    static _instance;
    list = new Set();
    ids;
 
    constructor(){

    }
    static get instance(){
        TimeManager._instance = TimeManager._instance? TimeManager._instance : new TimeManager();
        return TimeManager._instance;
    }
    add(elem){
        if(!elem) return
        if(elem.update) this.list.add(elem);
        if(!this.ids) this.ids = setInterval(()=>{
            this.update();
        },16);
    }
    remove(elem){
        if(!elem) return
        this.list.delete(elem);
        if(this.list.size===0 && this.ids){
            clearInterval(this.ids);
            this.ids=0;
        }
    }
    update(){
        this.list.forEach(item=>{
            item.update();
        })
        }
    }
