import{a as c,i as l,S as u}from"./assets/vendor-DEZpR2tN.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function n(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(t){if(t.ep)return;t.ep=!0;const r=n(t);fetch(t.href,r)}})();function f(o){return c.get(`https://pixabay.com/api/?key=49722241-b38f1bcf58efdc2f53696c0dc&q=${o}&image_type=photo&orientation=horizontal&safesearch=true`).then(e=>{const n=e.data;return n.hits.length===0&&l.show({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",backgroundColor:"#ef4040",messageColor:"#fff",timeout:5e3,progressBar:!1,close:!0,transitionIn:"fadeInDown",transitionOut:"fadeOutUp"}),n.hits}).catch(e=>{throw console.log(e),e})}const d=document.querySelector(".gallery"),m=document.querySelector(".form");function g(o){const e=o.map(s=>`
  <li class="gallery-item">
    <a class="gallery-link" href="${s.largeImageURL}">
      <img
        class="gallery-image"
        src="${s.webformatURL}"
        alt="${s.tags}"
      />
    </a>
    <div class="info">
        <p><b>Likes</b> ${s.likes}</p>
        <p><b>Views</b> ${s.views}</p>
        <p><b>Comments</b> ${s.comments}</p>
        <p><b>Downloads</b> ${s.downloads}</p>
      </div>
  </li>`).join("");d.insertAdjacentHTML("beforeend",e),new u(".gallery a",{captionsData:"alt",captionPosition:"bottom",captionDelay:250,scrollZoom:!0}).refresh()}function p(){const o=document.querySelector(".gallery");o.innerHTML=""}function h(){document.querySelector(".loader").classList.add("is-visible")}function i(){document.querySelector(".loader").classList.remove("is-visible")}function y(o){console.log("Fetching images for query: ",o),h(),f(o).then(e=>{console.log("Received images: ",e),p(),g(e),i()}).catch(e=>{i(),l.show({title:"Error",message:"Something went wrong. Please try again later.",position:"topRight",backgroundColor:"#ef4040",messageColor:"#fff",timeout:5e3,progressBar:!1,close:!0,transitionIn:"fadeInDown",transitionOut:"fadeOutUp"})})}m.addEventListener("submit",o=>{o.preventDefault();const e=o.target.elements["search-text"].value.trim();e!==""&&y(e)});
//# sourceMappingURL=index.js.map
