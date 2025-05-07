document.querySelector("#showlogin").addEventListener("click",function() {
    document.querySelector(".wrapper").classList.add("active");
});
document.querySelector(".close-btn").addEventListener("click",function(){
    document.querySelector(".wrapper").classList.removeß("active");
  });