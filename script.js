window.addEventListener("scroll",()=>{

const nav=document.querySelector(".navbar");

if(window.scrollY>50){

nav.style.padding="14px 80px";

}

else{

nav.style.padding="18px 80px";

}

});