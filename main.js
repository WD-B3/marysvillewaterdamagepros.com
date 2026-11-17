(function(){
var btn=document.getElementById("menu-btn"),panel=document.getElementById("mobile-panel");
if(btn&&panel){btn.addEventListener("click",function(){var o=panel.classList.toggle("open");btn.setAttribute("aria-expanded",o?"true":"false");btn.textContent=o?"Close":"Menu";});}
var qs=document.querySelectorAll(".faq-q");
for(var i=0;i<qs.length;i++){qs[i].addEventListener("click",function(){
 var item=this.parentNode,a=item.querySelector(".faq-a"),open=item.classList.toggle("open");
 this.setAttribute("aria-expanded",open?"true":"false");
 a.style.maxHeight=open?a.scrollHeight+"px":"0px";});}
var ds=document.querySelectorAll(".has-drop>button");
for(var j=0;j<ds.length;j++){ds[j].addEventListener("click",function(e){var li=this.parentNode;var o=li.classList.toggle("open");this.setAttribute("aria-expanded",o?"true":"false");e.stopPropagation();});}
document.addEventListener("click",function(){var o=document.querySelectorAll(".has-drop.open");for(var k=0;k<o.length;k++){o[k].classList.remove("open");}});
})();
