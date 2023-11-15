
window.onload = function(){
   let picture = ["images/snowday.jpg", "images/tree.jpg",
                  "images/mini11.jpg"];
   let picIdx = 0;

   showSlide();
   
   function showSlide(){
      //이미지 경로 - src 속성 사용
      document.getElementById("mini").src = picture[picIdx];
      picIdx += 1;
      if(picIdx == picture.length) {
         picIdx = 0;
      }
      setTimeout(showSlide, 2000);
   }
}


setInterval(myWatch, 1000);

function myWatch(){
   const now = new Date();
   let time = now.toLocaleTimeString('en-US'); //시간만 출력
   console.log(time);

   let watch = document.getElementById("demo")
   watch.innerHTML = time;
   watch.style.color = "#819ca7;";
}