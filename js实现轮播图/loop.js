let box=document.getElementById("box")
let picture=document.getElementById("picture")
let left=document.getElementById("left")
let rigth=document.getElementById("right")
let listItem=document.getElementsByTagName("li")

//设置第一个点红色
listItem[0].style.backgroundColor="red"

//设置定时器，每个多少分钟换张图片

let currentPage=1
let timer=setInterval(startLoop,1000)
function startLoop(){
    currentPage++ 
        changeImage();

}

function changeImage(){
    if(currentPage==8){
        currentPage=1
    }else if(currentPage==0){
        currentPage=7
    }
    picture.src=`./image/${currentPage}.jpg`

    //先清空所有的颜色，在给当前页颜色置为红色
    for(let i=0;i<listItem.length;i++){
        listItem[i].style.backgroundColor="#aaa";
    }
    listItem[currentPage-1].style.backgroundColor="red";
}


//鼠标进入轮播区，停止轮播
box.onmouseover=function(){
    clearInterval(timer)
    left.style.display="block"
    rigth.style.display="block"
}
box.onmouseout=function(){
    timer=setInterval(startLoop,1000)
    left.style.display="none"
    rigth.style.display="none"
}

//当进入左侧按钮，按钮颜色变深
left.onmouseover=function(){
    this.style.backgroundColor="rgba(0,0,0,0.4)"
}
rigth.onmouseover=function(){
    this.style.backgroundColor="rgba(0,0,0,0.4)"
}
left.onmouseout=function(){
    this.style.backgroundColor="rgba(0,0,0,0.2)"
}
rigth.onmouseout=function(){
    this.style.backgroundColor="rgba(0,0,0,0.2)"
}

//点击更换下一张图片
rigth.onclick=function(){
    currentPage++
    changeImage()
}
left.onclick=function(){
    currentPage--
    changeImage()
}

for(let i=0;i<listItem.length;i++){
    listItem[i].onmouseover=function(){
        currentPage=i+1;
        changeImage();
    }
}
