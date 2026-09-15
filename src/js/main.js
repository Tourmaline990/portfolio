import { LoadPartials } from "./utils.js";
import '../styles/base.css'
import '../styles/large.css'

const hambtn = document.querySelector("#hamBtn")
const year = document.querySelector("#year");
const navlist = document.querySelector("#navList")
const overlay  = document.querySelector("#overlay")
const closeMenu = document.querySelector("#closeMenu")

async function init(){

   await LoadPartials("/partials/head.html", document.querySelector("head"));
   year.innerHTML = new Date().getFullYear();

   hambtn.addEventListener("click",()=> {
      navlist.classList.toggle("active")
       hambtn.classList.toggle("active")
       overlay.classList.toggle("active")
       document.querySelector("nav").classList.toggle("active")
   })
   document.querySelector("#viewProject").addEventListener("click",()=> {
      window.location.href = '#projects'
   })
   function closeMenuFunc(){
      navlist.classList.remove("active")
      hambtn.classList.remove("active")
      overlay.classList.remove("active")
      document.querySelector("nav").classList.remove("active")
   }
   closeMenu.addEventListener("click", closeMenuFunc)
   overlay.addEventListener("click",closeMenuFunc)
}
init();
