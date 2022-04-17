# Javascript-Height-Loader-Item

สกอร์ดาว โหลดไอเทม Javascript & HTML for loop {{ i }} Height Monitor สกอร์ดาว

# HTML
```
<div id="loadItemDemo"></div>
```

# Script 
```
// winCached
var winCached = $(window), docCached = $(document)
// currLeng
var currLeng = 0;
// addContent
function addContent() {
  dettachScrollEvent();
  setTimeout(function() {
    var htmlAdd = '';
    for (var i = currLeng; i < currLeng + 30; i++)
    htmlAdd += ('<p>' + ('loadItemDemo' + '_' + i) + '</p>');
    $('#loadItemDemo').append(htmlAdd);
    currLeng = i;
    console.log("called loader!");
    attachScrollEvent();
  }, 500);
}
// infiNLoader
function infiNLoader() {
  if (winCached.scrollTop() + winCached.height() > docCached.height() - 300) {
    addContent();
  }
}
// attachScrollEvent
function attachScrollEvent() {
  winCached.scroll(infiNLoader);
}
// dettachScrollEvent
function dettachScrollEvent() {
  winCached.unbind('scroll', infiNLoader);
}
// addContent
addContent();
```

# Developer : NaeLike เนไลก์

<img class="rounded" src="http://img.in.th/images/c938fdabdf2a1d4b2deda8ffea4fa189.jpg" width="120" alt="NaeLike"> 

> Naelike เนไลก์

@เว็บไซต์ :+1: Web :  <https://naelike.com> ..! :shipit:
<br>
@ติดตาม :+1: Web :  <https://naelike.com/addmee> ..! :shipit:

TikTok :  <https://www.tiktok.com/@naelike6564>
<br>
Facebook :  <https://web.facebook.com/NaeLikePage>
<br>
Instagram :  <https://www.instagram.com/naelike_ig>
<br>


<a href="https://link.ckpzmc.xyz/dispnae"> 
   <img class="rounded" src="https://i.pinimg.com/originals/1a/9a/f1/1a9af177bdcd0bd93568e59bb7600cbe.png" width="120" alt="NaeLike"> 
   </br>
   <b class="fs-12">Discord คลิก..!</b> 
</a>
