const display= document.getElementById("imgmenu");
const exit = document.getElementById("immenu");
const nav = document.getElementById("nav-container");
display.addEventListener("click",()=>{
  nav.style.display="block";
 // nav.style.opacity="1.0";
})
exit.addEventListener("click",()=>{
  nav.style.display="none";
  //nav.style.opacity="0.0";
})
