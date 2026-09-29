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
  document.body.classList.toggle("dark",!document.body.classList.contains("light"));
  theme.textContent=document.body.classList.contains("light")?"☾":"☼";
  localStorage.setItem("leafio-theme",document.body.classList.contains("light")?"light":"dark")
});
if(localStorage.getItem("leafio-theme")==="light"){
  document.body.classList.add("light");
  document.body.classList.remove("dark");
  theme.textContent="☾"
}else{
  document.body.classList.add("dark");
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

const readMore=document.getElementById("readMore");
const storyModal=document.getElementById("storyModal");
const storyClose=document.getElementById("storyClose");
function closeStory(){
  if(!storyModal) return;
  storyModal.classList.remove("show");
  storyModal.setAttribute("aria-hidden","true");
  document.body.classList.remove("modal-open");
}
if(readMore && storyModal){
  readMore.addEventListener("click",()=>{
    storyModal.classList.add("show");
    storyModal.setAttribute("aria-hidden","false");
    document.body.classList.add("modal-open");
  });
  storyClose.addEventListener("click",closeStory);
  storyModal.querySelector("[data-close-story]").addEventListener("click",closeStory);
  document.addEventListener("keydown",e=>{if(e.key==="Escape") closeStory()});
}
