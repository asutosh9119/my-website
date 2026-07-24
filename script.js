// ===============================
// COGNIX V3 - Premium JavaScript
// ===============================

// -------------------------------
// Smooth Scroll
// -------------------------------

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function(e){

        const href = this.getAttribute("href");

        // Popup buttons ko smooth scroll se ignore karo
        if(href === "#" || this.id === "get-started" || this.id === "start-learning"){
            return;
        }

        e.preventDefault();

        const target = document.querySelector(href);

        if(target){

            target.scrollIntoView({
                behavior:"smooth"
            });

        }

    });

});


// -------------------------------
// Navbar Shadow
// -------------------------------

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


// -------------------------------
// Fade Animation
// -------------------------------

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


// ===============================
// Motivation Popup
// ===============================

const popup=document.getElementById("motivation-popup");

const getStarted=document.getElementById("get-started");

const startLearning=document.getElementById("start-learning");

const enterBtn=document.getElementById("enter-btn");

const typingText=document.getElementById("typing-text");

const message="Dreams don't change lives. Daily discipline does.";

let typingRunning=false;

function typeWriter(){

if(typingRunning)return;

typingRunning=true;

typingText.innerHTML="";

let i=0;

function typing(){

if(i<message.length){

typingText.innerHTML+=message.charAt(i);

i++;

setTimeout(typing,40);

}

else{

typingRunning=false;

}

}

typing();

}

function openPopup(e){

e.preventDefault();

popup.style.display="flex";

typeWriter();

}

if(getStarted){

getStarted.addEventListener("click",openPopup);

}

if(startLearning){

startLearning.addEventListener("click",openPopup);

}

if(enterBtn){

enterBtn.addEventListener("click",function(){

popup.style.display="none";

document.getElementById("subjects").scrollIntoView({

behavior:"smooth"

});

});

}


// ESC key closes popup

window.addEventListener("keydown",function(e){

if(e.key==="Escape"){

popup.style.display="none";

}

});


// Click outside closes popup

popup.addEventListener("click",function(e){

if(e.target===popup){

popup.style.display="none";

}

});

// ===========================
// COGNIX BOOT ANIMATION
// ===========================

const bootScreen = document.getElementById("boot-screen");
const bootText = document.getElementById("boot-text");
const bootSubtext = document.getElementById("boot-subtext");
const bootProgress = document.getElementById("boot-progress");

const bootMessages = [
"DISCIPLINE.",
"CONSISTENCY.",
"EXECUTION.",
"SUCCESS."
];

let progress = 0;
let index = 0;

// Loading Percentage

const loading = setInterval(()=>{

progress++;

bootProgress.innerHTML = progress + "%";

if(progress >= 100){

clearInterval(loading);

showBootText();

}

},35);


// Text Animation

function showBootText(){

function nextText(){

if(index < bootMessages.length){

bootText.style.opacity = "0";

setTimeout(()=>{

bootText.innerHTML = bootMessages[index];

bootText.style.opacity = "1";

index++;

setTimeout(nextText,1000);

},300);

}

else{

bootSubtext.innerHTML="Preparing Your Future...";

setTimeout(()=>{

bootScreen.style.opacity="0";

bootScreen.style.visibility="hidden";

},1800);

}

}

nextText();

}
