const t=document.querySelector(".wall"),e=document.querySelector(".spider");document.addEventListener("click",i=>{if(i.target!==t)return;let l=t.clientWidth-e.clientWidth,n=t.clientHeight-e.clientHeight,c=Math.min(Math.max(i.offsetY-e.clientHeight/2,0),n),h=Math.min(Math.max(i.offsetX-e.clientWidth/2,0),l);e.style.top=`${c}px`,e.style.left=`${h}px`});//# sourceMappingURL=index.39dc2110.js.map

//# sourceMappingURL=index.39dc2110.js.map
