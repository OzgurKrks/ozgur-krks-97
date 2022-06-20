const btn = document.getElementById("btn1")
const btn1 = document.getElementById("btn2")

btn.addEventListener("click",function(){
    let color = ["red","black","blue","yellow"]
let random = color[Math.floor(Math.random()*color.length)]
    btn.style.backgroundColor = random
})
btn1.addEventListener("click",function(){
    let color = ["red","black","blue","yellow"]
let random = color[Math.floor(Math.random()*color.length)]
    btn1.style.backgroundColor = random
    if(btn1.style.backgroundColor === btn.style.backgroundColor){
        btn.textContent += "sa"
    }
})
