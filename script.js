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


// ===========================
// COGNIX BOOT ANIMATION
// ===========================

window.addEventListener("load", () => {

    const bootScreen = document.getElementById("boot-screen");
    const bootText = document.getElementById("boot-text");
    const bootSubtext = document.getElementById("boot-subtext");
    const bootProgress = document.getElementById("boot-progress");

   const messages = [
    "THE WORLD IS MOVING.",
    "SO SHOULD YOU.",
    "DON'T WATCH SUCCESS.",
    "BECOME SUCCESS."
];

    let progress = 0;
    let messageIndex = 0;

    const loader = setInterval(() => {

        progress++;

        bootProgress.textContent = progress + "%";
        document.getElementById("loading-fill").style.width = progress + "%";

        if (progress >= 100) {

            clearInterval(loader);

            showMessages();

        }

    }, 25);

    function showMessages() {

        function next() {

            if (messageIndex < messages.length) {

                bootText.style.opacity = 0;

                setTimeout(() => {

                    bootText.textContent = messages[messageIndex];

                    bootText.style.opacity = 1;

                    messageIndex++;

                    setTimeout(next, 900);

                }, 250);

            }

            else {

               bootSubtext.textContent = "Your journey begins now...";
                setTimeout(() => {

                    bootScreen.style.opacity = "0";

                    bootScreen.style.visibility = "hidden";

                }, 1800);

            }

        }

        next();

    }

});
