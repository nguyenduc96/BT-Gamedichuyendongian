class Gamedoreamon{
    image;
    top;
    left;
    size;
    constructor(image, top, left, size) {
        this.image = image;
        this.top = top;
        this.left = left;
        this.size = size;
    }
    getGame(){
        return '<img width="'+ this.size + '"' +
            ' height="'+ this.size + '"' +
            ' src="' + this.image +'"' +
            ' style="top: '+this.top+'px; left:'+this.left+'px;position:absolute;" />';
    }
    moveRight(){
        this.left+=100;
        console.log('turn right = ' + this.left);
    }
    moveLeft(){
        this.left-=950;
        console.log('turn right = ' + this.left);
    }
    moveBot(){
        this.top+=100;
        console.log('turn right = ' + this.top);
    }
    moveTop(){
        this.top-=450;
        console.log('turn right = ' + this.top);
    }
}
let doraemon = new Gamedoreamon('anhdrm.png', 40, 30, 200)

function start(){
        if (doraemon.left < 1000){
            doraemon.moveRight();
            if(doraemon.left >1000){
                doraemon.moveLeft()
            }
                ;
        }
        if (doraemon.top<400){
            doraemon.moveBot();
            if (doraemon.top>400){
                doraemon.moveTop();
            }
        }
    document.getElementById('game').innerHTML = doraemon.getGame();
    setTimeout(start, 500)
}
start();