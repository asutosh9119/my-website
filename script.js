// ===============================
// COGNIX V3 - Premium JavaScript
// ===============================

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e){
        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if(target){
            target.scrollIntoView({
                behavior:"smooth"
            });
        }
    });
});

// Navbar Shadow on Scroll

window.addEventListener("scroll",()=>{

const nav=document.querySelector("nav");

if(window.scrollY>60){

nav.style.background="rgba(2,6,23,.90)";
nav.style.boxShadow="0 10px 30px rgba(0,0,0,.4)";

}

else{

nav.style.background="rgba(2,6,23,.70)";
nav.style.boxShadow="none";

}

});

// Fade Animation

const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

});

document.querySelectorAll(".hidden").forEach(el=>{

observer.observe(el);

});

console.log("✅ Cognix Loaded Successfully");
