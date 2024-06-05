/* Author: */
var rating = document.querySelectorAll(".rating");
console.log(rating);
var btn = document.querySelector("#send");
var feedback = document.querySelector(".emoji");
var content = document.querySelector(".content");
var selectedFeedback = "Satisfied";

// to iterate rating div 
rating.forEach((ele) => {
  ele.addEventListener("click", function (event) {
    removeActive();
    selectedFeedback =
      event.target.innerText || event.target.parentNode.innerText;
    event.target.classList.add("active");
    event.target.parentNode.classList.add("active");
  });
});

// button onclick function
btn.addEventListener("click", () => {
  if (selectedFeedback !== "") {
    content.innerHTML = `
           <h2 class="activerating">Thank You!</h2>
           <span class="activerating">Feedback: ${selectedFeedback}</span>
           <p class="activerating">We'll use your feedback to improve our customer support</p>         `;
  }
});

// function: to remove active class from div
function removeActive() {
  rating.forEach((rating) => {
    rating.classList.remove("active");
  });
}
