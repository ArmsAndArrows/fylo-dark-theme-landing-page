"use strict";

///selectors
const btnSubscribe = document.querySelector(".subscribe__btn");
const inputSubscribe = document.querySelector(".subscribe__input");
const errSubscribe = document.querySelector(".subscribe__error");
const sections = document.querySelectorAll('section')


///INPUT
inputSubscribe.addEventListener("click", function () {
  if (inputSubscribe.value === "") {
    errSubscribe.classList.remove("active");
    errSubscribe.classList.add("hidden");
  }
});
inputSubscribe.addEventListener("keydown", function () {
  if (inputSubscribe.value) {
    errSubscribe.classList.remove("active");
    errSubscribe.classList.add("hidden");
  }
});


///BUTTON
btnSubscribe.addEventListener("click", function (e) {
  e.preventDefault();
  if (inputSubscribe.value === "") {
    errSubscribe.classList.remove("hidden");
    errSubscribe.classList.add("active");
    errSubscribe.textContent = "This field cannot be empty.";
  }
  if (
    !inputSubscribe.value
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      )
  ) {
    errSubscribe.classList.remove("hidden");
    errSubscribe.classList.add("active");
    errSubscribe.textContent = "Please, provide valid email address.";
  } else {
    errSubscribe.classList.add("hidden");
    alert("You've been successfully added to our subscription!");
    inputSubscribe.value = "";
  }
});

// const reveal = function(e){
//     console.log(e)
//     const [entry] = e;
//     if (!entry.isIntersecting) return;
//     entry.target.classList.remove('invisible')
//     entry.target.classList.add('visible')
//     observer.unobserve(entry.target)


// }

// const observer = new IntersectionObserver(reveal, {root: null, threshold:0.4})

// sections.forEach(function(sec){
//     observer.observe(sec);
//     sec.classList.add("invisible")
// })
