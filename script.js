const modal = document.querySelector("#container");
const btn = document.querySelector(".btn");
const closeBtn = document.querySelector("#close-btn");


//displays modal when button is clicked
btn.addEventListener("click", function (){
  modal.style.display = "block"
})

// hides modal when x button is clicked
closeBtn.addEventListener("click", function () {
    modal.style.display = "none"
})

// hides modal when anywhere on screen is clicked
window.addEventListener('click', function(e) {
    if ( e.target === modal){
        modal.style.display = "none";
    }
})