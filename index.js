// navigation bar start
document.querySelector(".menu").addEventListener("click",
function (){
    document.querySelector("nav ul").classList.toggle("showmenu")    
})
// navigation bar end
const main = document.querySelector(".manipulate");
const k = document.querySelector(".cursor");
const array = ["Web Designer","Freelancer","Front-end Developer","Photo Editor","Banner Designer"];
let index = 0;
let charIndex = 0;
const charDelay = 200;
const indexChange = 1500;
function type() {
    if (charIndex < array[index].length) {
        k.classList.add("typing");
        main.innerHTML += array[index][charIndex++];
        setTimeout(type, charDelay);
    } else {
        k.classList.remove("typing");
        setTimeout(erase, indexChange);
    }
  }

function erase() {
    if (charIndex > 0) {
        k.classList.add("typing");
        main.innerHTML = array[index].substring(0, --charIndex);
        setTimeout(erase, charDelay);
    } else {
        k.classList.remove("typing");
        index = (index + 1) % array.length;
        setTimeout(type, charDelay + 400);
    }
  }
type();

// certifice blog

let certificates=[
    {   name:"MS Office",
        src:"images/Ms office.jpg",
        institution:"Comtech Advanced Study Centre"
    },
    { name:"JavaScript",
      src:"images/JavaScript.jpg",
      institution:"Lets Upgrade"
    },
    { name:"Web Design",
      src:"images/Web Design.jpg",
      institution:"Comtech Advanced Study Centre"
    },
    { name:"JQuery",
      src:"images/jQuery_page-0001.jpg",
      institution:"Great Learning"
    },
    { name:"C Programming",
      src:"images/C programming.jpg",
      institution:"Comtech Advanced Study Centre"
    },
    { name:"Excel",
      src:"images/Excel.jpg",
      institution:"Coursera"
    },
    { name:"AutoCAD",
      src:"images/AutoCAD.jpg",
      institution:"Comtech Advanced Study Centre"
    },
    { name:"JavaScript",
      src:"images/'Basics of JavaScript Programming' Bootcamp QR.png",
      institution:"Open Weaver"
    },
    { name:"AutoCAD",
      src:"images/AutoCAD1.jpg",
      institution:"Comtech Advanced Study Centre"
    },
];
let i=0;
function certificate(){
    let heading=document.getElementById("certificate-head");
    let source=document.getElementById("certificate-source");
    let institute=document.getElementById("institute");
    document.getElementById("animi").classList.add="certificat-animi"
    heading.innerHTML=certificates[i].name;
    source.src=certificates[i].src;
    institute.innerHTML=certificates[i].institution;
    i = (i + 1) % certificates.length;
    setTimeout(certificate,5000);    
}
setTimeout(certificate,2000);
// certificat blog end

// active navtigation bar start
document.addEventListener("DOMContentLoaded", () => {
  let sections = document.querySelectorAll(".section");
  let navlinks = document.querySelectorAll(".nav-link a");
  let navHeight = document.querySelector(".nav-color").offsetHeight;
function setActiveNavLink() {
      let scrollY = window.scrollY + navHeight;

      sections.forEach(section => {
          if (scrollY >= section.offsetTop && scrollY < section.offsetTop + section.offsetHeight) {
              let currentSection = section.id;
              navlinks.forEach(navlink => {
                  let href = navlink.getAttribute("href").substring(1);
                  if (href === currentSection) {
                      document.querySelector(".active").classList.remove("active");
                      navlink.classList.add("active");
                  }
              });
          }
      });
  }
  window.addEventListener("scroll", setActiveNavLink);
  setActiveNavLink(); });
// active navigation bar end
//mouseover for linkedin & gmail start
function source(id,source){
  let original=id.getAttribute("src")
  id.addEventListener("mouseover",function(){
    id.src=source;
  });
  id.addEventListener("mouseout",function(){
    id.src=original;
  })
}
let email=document.querySelector("#email");
let email1=document.querySelector("#email1");
let link=document.querySelector("#linkedin");
let link1=document.querySelector("#linkedin1");
source(email,"images/contact/email2.png")
source(email1,"images/contact/email2.png")
source(link,"images/contact/linedin1.png")
source(link1,"images/contact/linedin1.png")
//mouseover for linkedin & gmail end
