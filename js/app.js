let status ="player-1";
let symbols = ["X","O"];
let gridItems = document.getElementsByClassName("grid-item");
gridItems = [...gridItems]
let turns = [[0],[0],[0],[0],[0],[0],[0],[0],[0]]
let symbol1 ,symbol2, winner, isEmpty=""
let result =false;
let symbolDec =0
document.getElementById("status-header").innerText="It's "+status+"'s" + " turn"



function clickCheck(){  
    removeE(event.target)  
    let updateNo="";
   let clickedElement ="";
   clickedElement = event.target.id 
event.target.innerText= decideSymbol();
updateNo = (status =="player-1")?updateNo=1: updateNo=2;
   updateArray(updateNo, clickedElement);
    
    result=checkWin()
    if(result==true){
        document.getElementById("mess").innerText=winner + " has won"
    document.getElementById("blocker").style.visibility = "visible";
    document.getElementById("blocker-mess").style.visibility = "visible";
    let reButton= document.getElementById("reButton");
    reButton.addEventListener("click",reset)

    }else{
        isEmpty=checkFull(gridItems)
        if(isEmpty==true){
            document.getElementById("mess").innerText=" It's a tie"
            document.getElementById("blocker").style.visibility = "visible";
            document.getElementById("blocker-mess").style.visibility = "visible";
            let reButton= document.getElementById("reButton");
            reButton.addEventListener("click",reset)


        }
        updateUI(updateNo);



    }

}

gridItems.forEach(block =>{
    block.addEventListener("click", clickCheck)


})

function removeE(element){
    element.removeEventListener("click",clickCheck)
    console.log("removed")

}

    
//decide which symbol
function decideSymbol(){  
    //if it's first turn
    if(status=="player-1" && turns.every(arr=>arr[0]==0)){ 
        symbolDec = Math.floor(Math.random()*2)
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
function updateUI(updateNo){
    console.log("UI");
    (updateNo==1)?status="player-2": status="player-1"
    document.getElementById("status-header").innerText="It's "+status+"'s" + " turn"
    if(status=="player-1"){
        document.getElementById("status-header").style.background="#e74c3c"

    }else{
        document.getElementById("status-header").style.background="pink"
    }
}
function updateArray(updateNo, eventEle){
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
    let win=false;
    console.log("running win")
 let winningIndex=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[2,4,6],[0,4,8]]
for(let i=0;i<winningIndex.length;i++){
    if(turns[winningIndex[i][0]][0]==turns[winningIndex[i][1]][0] && 
        turns[winningIndex[i][0]][0]==turns[winningIndex[i][2]][0]){
            if(turns[winningIndex[i][0]][0]!=0 && turns[winningIndex[i][1]][0]!=0 && 
           turns[winningIndex[i][2]][0]!=0){
            win=true;
            winner=status
            return win;
        
        
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

function reset(){
status ="player-1";
gridItems.forEach(item=>item.innerText="")
 turns = [[0],[0],[0],[0],[0],[0],[0],[0],[0]]
 symbol1 ,symbol2, winner, isEmpty=""
 result =false;
 symbolDec =0
 document.getElementById("mess").innerText=" "
 document.getElementById("blocker").style.visibility = "hidden";
 document.getElementById("blocker-mess").style.visibility = "hidden";
 document.getElementById("status-header").innerText="It's "+status+"'s" + " turn"
 gridItems.forEach(block =>{
    block.addEventListener("click", clickCheck)


})


}
    
