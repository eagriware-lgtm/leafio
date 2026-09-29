const loader=document.getElementById("loader");

function hideLoader(){
  if(!loader) return;
  loader.classList.add("hide");
  setTimeout(()=>loader.remove(),800);
}

if(document.readyState==="loading"){
  document.addEventListener("DOMContentLoaded",()=>setTimeout(hideLoader,500),{once:true});
}else{
  setTimeout(hideLoader,500);
}
window.addEventListener("load",()=>setTimeout(hideLoader,300),{once:true});
setTimeout(hideLoader,2500);

const theme=document.getElementById("theme");
theme.addEventListener("click",()=>{
  document.body.classList.toggle("light");
  theme.textContent=document.body.classList.contains("light")?"☾":"☼";
  localStorage.setItem("leafio-theme",document.body.classList.contains("light")?"light":"dark")
});
if(localStorage.getItem("leafio-theme")==="light"){
  document.body.classList.add("light");
  theme.textContent="☾"
}

const menu=document.getElementById("menu");
menu.addEventListener("click",()=>document.querySelector("nav").classList.toggle("open"));

document.querySelectorAll(".filters button").forEach(btn=>btn.addEventListener("click",()=>{
  document.querySelectorAll(".filters button").forEach(b=>b.classList.remove("active"));
  btn.classList.add("active");
  const f=btn.dataset.filter;
  document.querySelectorAll(".item").forEach(x=>x.style.display=f==="all"||x.dataset.type===f?"block":"none")
}));

document.getElementById("contactForm").addEventListener("submit",e=>{
  e.preventDefault();
  document.getElementById("formMsg").textContent="Thanks — your message is ready to be connected to Leafio.";
  e.target.reset()
});

document.querySelectorAll("nav a").forEach(a=>a.addEventListener("click",()=>document.querySelector("nav").classList.remove("open")));