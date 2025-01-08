let menu = document.querySelector(".nav_links");
let barIcon = document.querySelector('.bar-icon');
let toggle = true;
barIcon.addEventListener("click" , ()=>{
 if(toggle){ 
    menu.style.top = "67px";
    menu.style.visibility = "visible";
    menu.style.opacity = "1";
    toggle = false;
    }
else{
    menu.style.top = "60px";
    menu.style.visibility = "hidden";
    menu.style.opacity = "0";
    toggle = true;
}
} )