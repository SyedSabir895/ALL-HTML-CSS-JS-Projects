const s  = document.getElementById("s")
const a  = document.getElementById("a")
const b  = document.getElementById("b")
const i  = document.getElementById("i")
const r  = document.getElementById("r")
const sabir = document.getElementById("complete")

s.addEventListener("click",()=>{
    s.style.display="none";
    a.style.display = "block";
});

a.addEventListener("click",()=>{
    a.style.display = "none";
    b.style.display = "block";
});

b.addEventListener("click",()=>{
    b.style.display = "none";
    i.style.display = "block";
});

i.addEventListener("click",()=>{
    i.style.display = "none";
    r.style.display = "block";
});

r.addEventListener("click",()=>{
    r.style.display = "none";
    sabir.style.display = "block";
});


sabir.addEventListener("click",()=>{
    sabir.style.display = "none";
    s.style.display = "block";
});