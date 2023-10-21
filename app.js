const prev = document.querySelector(".prev"); 
const next = document.querySelector(".next");
const box = document.querySelectorAll(".box"); 

// By Default: 
let indexKeeper = 0;
box[indexKeeper].classList.remove("hidden");

// prev button: 
let bIndexKeeper;
prev.addEventListener("click", () => {
    if (indexKeeper == 0) indexKeeper = (box.length - 1);
    else indexKeeper--; 

    // remove hidden from the current box and add it to the previous one:
    if (indexKeeper == (box.length - 1)) bIndexKeeper = 0; 
    else bIndexKeeper = indexKeeper + 1;
    box[bIndexKeeper].classList.add("hidden");
    box[indexKeeper].classList.remove("hidden");
})

// next button:
let dIndexKeeper;
next.addEventListener("click", () => {
    if (indexKeeper == (box.length - 1)) indexKeeper = 0; 
    else indexKeeper++;

    // remove hidden from the current box and add it to the previous one:
    if (indexKeeper == 0) dIndexKeeper = (box.length - 1); 
    else dIndexKeeper = indexKeeper - 1; 
    box[dIndexKeeper].classList.add("hidden");
    box[indexKeeper].classList.remove("hidden");
})
