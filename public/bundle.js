(()=>{const e=document.querySelector(".nav-toggle"),n=document.querySelector(".nav-menu");e.addEventListener("click",(()=>{n.classList.toggle("nav-menu_visible")}));const t=document.getElementById("nav-servicios"),s=document.getElementById("nav-comentarios"),i=document.getElementById("nav-contactanos");document.getElementById("nav-ingresar"),document.getElementById("body"),t.addEventListener("click",(()=>{t.classList.add("nav-menu-link_active"),s.classList.remove("nav-menu-link_active"),i.classList.remove("nav-menu-link_active")})),s.addEventListener("click",(()=>{t.classList.remove("nav-menu-link_active"),s.classList.toggle("nav-menu-link_active"),i.classList.remove("nav-menu-link_active")})),i.addEventListener("click",(()=>{t.classList.remove("nav-menu-link_active"),s.classList.remove("nav-menu-link_active"),i.classList.toggle("nav-menu-link_active")})),document.getElementById("link-logo").addEventListener("click",(()=>{t.classList.remove("nav-menu-link_active"),s.classList.remove("nav-menu-link_active"),i.classList.remove("nav-menu-link_active")})),$(document).ready((function(){$(".service-carousel").owlCarousel({autoplay:!0,smartSpeed:1e3,loop:!0,dots:!1,nav:!1,responsive:{0:{items:1},576:{items:2},768:{items:3},992:{items:3},1200:{items:3}}})}))})();