// Your code goes here
const get=function(selector){
    return document.querySelector(selector);
}

//Selector Setup
const nav=document.querySelector('.nav-link'); //Navigation Links
const body=get('body');
const chooseDialog=get('#chooseDialog');
const button=document.querySelector('.btn');
const logo=get('.logo-heading')
const input=get('input')

//Function Creation Area
var every10=0;
function bodyMouseMove(){//Change Body Background color randomly
    if(every10==10){
        every10=0;
        var randomColor = Math.floor(Math.random()*16777215).toString(16); //Random Color Generator for HEX
        body.style.backgroundColor="#"+randomColor;
    }
    every10++;
}

function keyStroke(){ //change form background color
    var randomColor = Math.floor(Math.random()*16777215).toString(16); //Random Color Generator for HEX
    chooseDialog.style.backgroundColor="#"+randomColor;
}

function openDialog(){   //toggle Sign UP FORM
    chooseDialog.classList.toggle('off');
}

function randomLogoColor(){
    var randomColor = Math.floor(Math.random()*16777215).toString(16); //Random Color Generator for HEX
    logo.style.color="#"+randomColor;
}

function preventAction(event){
    event.preventDefault()
}

//Function Triggers Area
body.addEventListener("mousemove", bodyMouseMove) //Change Body Background color randomly upon mouse move.
chooseDialog.addEventListener("keypress", keyStroke) //Change Sign Up Background color randomly upon Key Stroke.
button.addEventListener("click", openDialog)
logo.addEventListener("dblclick", randomLogoColor)
window.addEventListener('load', function(){
    alert('Website is locked and loaded.');
  });
window.addEventListener(`resize`, () => {
    alert(`Window just Resized.`);
});
input.addEventListener('select', function(){
    alert('What are you doing?')
});
logo.addEventListener('mouseover', randomLogoColor)
logo.addEventListener("keydown", randomLogoColor)
logo.addEventListener("keyup", randomLogoColor)
body.addEventListener("wheel", function(){
    alert("scrolling")
})
body.addEventListener('contextmenu', function(){
    alert("I see you right clickin")
})
nav.addEventListener("click", preventAction)
document.querySelector('a.nav-link:nth-child(2)').addEventListener("click", preventAction)
document.querySelector('a.nav-link:nth-child(3)').addEventListener("click", preventAction)
document.querySelector('a.nav-link:nth-child(4)').addEventListener("click", preventAction)
document.querySelector('.intro > p:nth-child(3)').addEventListener("click", function(event){
    
    alert("You clicked on pp");
})
document.querySelector('.intro').addEventListener("click", function(){
    alert("You clicked on this div.")
})