const modal = document.querySelector("#container");
const btn = document.querySelector(".btn");
const closeBtn = document.querySelector("#close-btn");

btn.addEventListener("click", function (){
  modal.style.display = "block"
})

closeBtn.addEventListener("click", function () {
    modal.style.display = "none"
})

window.addEventListener('click', function(e) {
    if ( e.target === modal){
        modal.style.display = "none";
    }
})