let tire = document.querySelectorAll(".tires");
let bus = document.querySelector(".bus")

function busSideMouvement() {
    setInterval(() => {
        bus.style.transform = "translateX(3px)"
        setTimeout(() => {
            bus.style.transform = "translateX(-3px)"
        }, 500);
}, 1000)};

// busSideMouvement();

if (bus.attributes.statut = "inactive") {
    console.log("ok");
    // busSideMouvement();
} else {
    // busSideMouvement();
}


bus.addEventListener("click",()=>{
    bus.setAttribute("statut", "active")
    bus.style.bottom = "4.5rem"
    setTimeout(() => {
        bus.style.bottom = "3.5rem";
        bus.setAttribute("statut", "inactive")
    }, 800);
    
});

