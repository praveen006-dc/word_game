const newword=document.getElementById("newword");
const typedWordRef=document.getElementById("text");
const correctwordtext=document.getElementById("correctword");
const wrongwordtext=document.getElementById("wrongword");

console.log(text);

let counter=0;

const items=["hi","hello","bye","takecare"] //4

function step(){
newword.innerHTML=items[Math.floor(Math.random()*items.length)]; 
}

var start=null;
let textvalue

var x=20;

function startAnimation(){
    // console.log(x);
    newword.style.top= x + "px";
    // newword.innerHTML=typedWordRef.innerHTML;
    let value
    x+=1;
    if(x === 450){
        console.log("typeword",typedWordRef.value)
           for(let i=0;i<items.length;i++){
          if(items[i] == typedWordRef.value){
              value=items[i];
              console.log("jbkjcsk");
              break;
          }
            }
        if(typedWordRef.value == newword ){
        console.log("correct");
        console.log(newword.innerHTML);

        let c_text=`<div class="correctlower">${newword.innerText}
        </div>`
        correctwordtext.innerHTML+=c_text;
        counter++;

    }
    else{
        if(typedWordRef.value != ""){
        let c_text=`<div class="wronglower">${typedWordRef.value}
        </div>`
        wrongwordtext.innerHTML+=c_text;
        counter++;
        }
        else{
            let c_text=`<div class="correctlower">${newword.innerHTML}
        </div>`
        correctwordtext.innerHTML+=c_text;
        counter++;

        }
    }
        x=10;
        step()
        if(counter == 10) return;
    }
    else{
        // console.log("HI");
        newword.style.top= x + "px";
        if(counter == 10) return;
        
    }
    requestAnimationFrame(startAnimation);
}

// window.requestAnimationFrame(startAnimation);


typedWordRef.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        console.log(e.target.value)
        typedWordRef.innerHTML=e.target.value;
        startAnimation()
        typedWordRef.value="";
    }
  });



