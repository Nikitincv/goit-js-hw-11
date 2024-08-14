import{S as f,i as n}from"./assets/vendor-721bf998.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const t of r)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function e(r){const t={};return r.integrity&&(t.integrity=r.integrity),r.referrerPolicy&&(t.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?t.credentials="include":r.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(r){if(r.ep)return;r.ep=!0;const t=e(r);fetch(r.href,t)}})();function m(s){const o=new URLSearchParams({key:"45431575-a54d9a4f673da9f6ecaf0fabb",q:s,image_type:"photo",orientation:"horizontal",safesearch:!0});return fetch(`https://pixabay.com/api/?${o}`).then(e=>{if(!e.ok)throw new Error(e.status);return e.json()})}const d=new f(".gallery a");function h(s){const o=s.map(e=>`
    <li class='gallery-item'><a class="gallery-link"  href="${e.largeImageURL}">
    <img class="gallery-img" src="${e.webformatURL}" alt="${e.tags}">
      </a>
    <ul class="card-info">
    <li class="card-info-item">
      <p>Like:${e.likes}</p>
    </li>
    <li class="card-info-item">
      <p>Views:${e.views}</p>
    </li>
    <li class="card-info-item">
      <p>Coments:${e.comments}</p>
    </li>
    <li class="card-info-item">
      <p>Downloads:${e.downloads}</p>
    </li></ul>
  </li>`).join("");u.insertAdjacentHTML("beforeend",o),d.refresh()}const c=document.querySelector(".loader"),l=document.querySelector(".search-form"),u=document.querySelector(".gallery");l.addEventListener("submit",p);function p(s){s.preventDefault(),u.innerHTML="";const{search:o}=s.currentTarget.elements,e=o.value.trim();if(e==="")return n.error({position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"});c.classList.remove("isheaden"),m(e).then(i=>{if(i.hits.length===0)return n.warning({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});h(i.hits),l.reset()}).catch(i=>n.error({position:"topRight",message:i.message})).finally(()=>c.classList.add("isheaden"))}
//# sourceMappingURL=commonHelpers.js.map
