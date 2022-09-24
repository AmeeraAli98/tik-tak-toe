let status ="player-1";
let symbols = ["X","O"];
let gridItems = document.getElementsByClassName("grid-item");
gridItems = [...gridItems]
let turns = [[0],[0],[0],[0],[0],[0],[0],[0],[0]]
let symbol1=""
let symbol2=""
let result =""
let winner=""
let isEmpty=""
document.getElementById("status-header").innerText="It's "+status+"'s" + " turn"


function clickCheck(){    
    let updateNo="";
   let clickedElement ="";
   clickedElement = event.target.id   
event.target.innerText= decideSymbol();
updateNo = (status =="player-1")?updateNo=1: updateNo=2;
   updates(updateNo, clickedElement);
    result =checkWin();
    if(result==true){
    document.getElementById("blocker").style.visibility = "visible";
    document.getElementById("blocker-mess").innerText= winner+" has won"
    document.getElementById("blocker-mess").style.visibility = "visible";


    }else{
        isEmpty=checkFull(gridItems)
        if(isEmpty==true){
            document.getElementById("blocker").style.visibility = "visible";
            document.getElementById("blocker-mess").innerText= "It's a tie"
            document.getElementById("blocker-mess").style.visibility = "visible";

        }
        event.target.removeEventListener("click", clickCheck) 



    }

}

gridItems.forEach(block =>{
    block.addEventListener("click", clickCheck)})

    
//decide which symbol
function decideSymbol(){  
    let symbolDec = Math.floor(Math.random()*2)
    if(status=="player-1" && turns.every(arr=>arr[0]==0)){  
        symbol1 =symbols[symbolDec];   
        if(symbol1=="X"){
        symbol2 ="O"
        }else{
            symbol2="X"
        }
        return symbol1
    }else{      

        if(status=="player-1"){
            return symbol1

        }
        if(status=="player-2"){
            return symbol2

        }
        
    }
    
}
function updates(updateNo, eventEle){
    //update array and status
    (updateNo==1)?status="player-2": status="player-1"
    document.getElementById("status-header").innerText="It's "+status+"'s" + " turn"
    if(status=="player-1"){
        document.getElementById("status-header").style.background="#e74c3c"

    }else{
        document.getElementById("status-header").style.background="pink"

    }

    if(eventEle=="grid-1"){
    turns[0][0]=updateNo
    }else if(eventEle=="grid-2"){
        turns[1][0]=updateNo
    }
    else if(eventEle=="grid-3"){
        turns[2][0]=updateNo
    }
    else if(eventEle=="grid-4"){
        turns[3][0]=updateNo
    }
    else if(eventEle=="grid-5"){
        turns[4][0]=updateNo
    }
    else if(eventEle=="grid-6"){
        turns[5][0]=updateNo
    }
    else if(eventEle=="grid-7"){
        turns[6][0]=updateNo
    }
    else if(eventEle=="grid-8"){
        turns[7][0]=updateNo
    }
    else{
        turns[8][0]=updateNo
    }

}
function checkWin(){
    //checks rows
    let win = false
for(let i=0;i<=3;i+=3){
  if(turns[i][0]==turns[i+1][0]&&turns[i][0]==turns[i+2]){
    if(turns[i][0]!=0 && turns[i+2][0]!=0 && turns[i+1][0]!=0){
        if(turns[i][0]==1){
            winner="player 1"
            win=true
            return win
        }else{
            winner="player 2"
            win=true
            return win
        }
        
       
  }
}
if(turns[i][0]==turns[i+3][0]&&turns[i][0]==turns[i+6]){
    if(turns[i][0]!=0 && turns[i+3][0]!=0 && turns[i+6][0]!=0){
        if(turns[i][0]==1){
            winner="player 1"
            win=true
            return win
        }else{
            winner="player 2"
            win=true
            return win
        }
        
  }
}
if(turns[i][0]==2|| turns[i][0]==0){
if(turns[i][0]==turns[i+4][0]&& turns[i][0]==turns[i+8]){
    if(turns[i][0]!=0 && turns[i+4][0]!=0 && turns[i+8][0]!=0){
        if(turns[i][0]==1){
            winner="player 1"
            win=true
            return win
        }else{
            winner="player 2"
            win=true
            return win
        }
        
  }
}
if(turns[i][0]==turns[i+2][0]&& turns[i][0]==turns[i+4]){
    if(turns[i][0]!=0 && turns[i+2][0]!=0 && turns[i+4][0]!=0){
        if(turns[i][0]==1){
            winner="player 1"
            win=true
            return win
        }else{
            winner="player 2"
            win=true
            return win
        }
        
  }
}
}
}
}

function checkFull(arr){
   let fullCheck;
   fullCheck = turns.every(block=>block[0]!=0)
  if(fullCheck==true){
    //   arr.forEach(block=>block.innerText="")
    return true;
 }
}          


        
    
