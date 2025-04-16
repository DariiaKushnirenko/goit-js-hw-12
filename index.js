import{a as m,i as h,S as g}from"./assets/vendor-DEZpR2tN.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const n of e)if(n.type==="childList")for(const a of n.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&t(a)}).observe(document,{childList:!0,subtree:!0});function s(e){const n={};return e.integrity&&(n.integrity=e.integrity),e.referrerPolicy&&(n.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?n.credentials="include":e.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function t(e){if(e.ep)return;e.ep=!0;const n=s(e);fetch(e.href,n)}})();function p(o,r){return m.get(`https://pixabay.com/api/?key=49722241-b38f1bcf58efdc2f53696c0dc&q=${o}&page=${r}&per_page=15&image_type=photo&orientation=horizontal&safesearch=true`).then(s=>{const t=s.data;return t.hits.length===0&&h.show({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",backgroundColor:"#ef4040",messageColor:"#fff",timeout:5e3,progressBar:!1,close:!0,transitionIn:"fadeInDown",transitionOut:"fadeOutUp"}),{images:t.hits,totalHits:t.totalHits}}).catch(s=>{throw console.log(s),s})}const y=document.querySelector(".gallery");function b(o){const r=o.map(t=>`
  <li class="gallery-item">
    <a class="gallery-link" href="${t.largeImageURL}">
      <img
        class="gallery-image"
        src="${t.webformatURL}"
        alt="${t.tags}"
      />
    </a>
    <div class="info">
        <p><b>Likes</b> ${t.likes}</p>
        <p><b>Views</b> ${t.views}</p>
        <p><b>Comments</b> ${t.comments}</p>
        <p><b>Downloads</b> ${t.downloads}</p>
      </div>
  </li>`).join("");y.insertAdjacentHTML("beforeend",r),new g(".gallery a",{captionsData:"alt",captionPosition:"bottom",captionDelay:250,scrollZoom:!0}).refresh()}function L(){const o=document.querySelector(".gallery");o.innerHTML=""}function v(){document.querySelector(".loader").classList.add("is-visible")}function c(){document.querySelector(".loader").classList.remove("is-visible")}function w(){document.querySelector(".MoreBtn").classList.add("is-visible")}function u(){document.querySelector(".MoreBtn").classList.remove("is-visible")}const B=document.querySelector(".form"),q=document.querySelector(".MoreBtn");let i="",l=1,d=15;B.addEventListener("submit",o=>{o.preventDefault(),i=o.target.elements["search-text"].value.trim(),i!==""&&(l=1,f(i,l))});q.addEventListener("click",()=>{l+=1,f(i,l)});function f(o,r){v(),r===1&&L(),p(o,r).then(({images:s,totalHits:t})=>{if(s.length===0&&r===1){u(),c();return}if(b(s),r>1){const e=document.querySelector(".gallery").firstElementChild;if(e){const n=e.getBoundingClientRect().height;window.scrollBy({top:n*2,left:0,behavior:"smooth"})}}c(),s.length<d||r*d>=t?(u(),iziToast.show({title:"End of results",message:"We're sorry, but you've reached the end of search results.",position:"topRight",backgroundColor:"#ef4040",messageColor:"#fff",timeout:5e3,progressBar:!1,close:!0,transitionIn:"fadeInDown",transitionOut:"fadeOutUp"})):w()}).catch(s=>{console.log("Fetch failed:",s),c(),u()})}
//# sourceMappingURL=index.js.map
