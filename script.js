"use strict"
let theme=1;
function darkmode()
{
document.querySelector('body').style.backgroundColor=theme?"rgb(17, 32, 21)":""
document.querySelector('body').style.color=theme?"rgb(255, 255, 255)":""
document.querySelector('body').style.backgroundImage=theme?"url()":""
}
const myDiv = document.getElementById('box4');
myDiv.onclick(function()
{
  console.log('called');
})
const up=document.getElementById('uparrow');
up.onclick()=function()
{
  
    window.scrollTo(0);
}

