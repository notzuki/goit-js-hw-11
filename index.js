import{a as m,S as y,i as c}from"./assets/vendor-5YrzWRhu.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();const g=m.create({baseURL:"https://pixabay.com/api/",params:{key:"51736098-e561806c369733f177830f298",image_type:"photo",orientation:"horizontal",safesearch:!0}});async function h(s,t,o=15){return(await g.get("",{params:{q:s,page:t,per_page:o}})).data}const u=document.querySelector(".gallery"),f=document.querySelector(".loader"),L=new y(".gallery a",{captionsData:"alt",captionDelay:250});function b(s){const t=s.map(({webformatURL:o,largeImageURL:n,tags:e,likes:r,views:a,comments:p,downloads:d})=>`
      <li>
        <a href="${n}">
          <img src="${o}" alt="${e}" />
        </a>
        <div class="info">
          <p>Likes: ${r}</p>
          <p>Views: ${a}</p>
          <p>Comments: ${p}</p>
          <p>Downloads: ${d}</p>
        </div>
      </li>
    `).join("");u.insertAdjacentHTML("beforeend",t),L.refresh()}function q(){u.innerHTML=""}function S(){f.classList.remove("hidden")}function l(){f.classList.add("hidden")}const i=document.querySelector(".form"),v=i.querySelector('input[name="search-text"]');i.addEventListener("submit",s=>{s.preventDefault();const t=v.value.trim();if(!t){c.error({title:"Error",message:"Please enter a search query!"});return}q(),S(),h(t).then(o=>{if(!o.hits.length){c.info({title:"No results",message:"Sorry, there are no images matching your search query. Please try again!"}),i.reset();return}b(o.hits),setTimeout(l,100),i.reset()}).catch(o=>{c.error({title:"Error",message:"Something went wrong. Please try again later."}),console.error(o),l()})});
//# sourceMappingURL=index.js.map
