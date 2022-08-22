const nav = document.querySelector("nav");
const mob_nav = document.querySelector(".mobile-navbar");
const form_input = document.getElementById("form-input");
const submit = document.getElementById("submit-btn");

window.addEventListener("scroll", function () {
  nav.classList.toggle("sticky", window.scrollY > 0);
  mob_nav.classList.toggle("sticky-nav", window.scrollY > 0);
});
// form_input.addEventListener("click", function () {
//   form_input.classList.toggle("placeholder_position");
// });

submit.addEventListener("click", function () {
  const name = document.getElementById("form-input-name");
  const email = document.getElementById("form-input-email");
  const query = document.getElementById("form-input-query");
  if (name != "" && email != "" && query != "")
    sendMail(name.value, email.value, query.value);
  name.value = "";
  email.value = "";
  query.value = "";
});

function sendMail(name, email, query) {
  window.location.href =
    "mailto:marijit453@gmail.com?" +
    "subject=Query from " +
    name +
    "&body=" +
    query;
}
function openNav() {
  document.getElementById("mobile-nav").style.width = "50%";
  document.getElementById("mobile-nav").style.padding = "20px";
}
function closeNav() {
  document.getElementById("mobile-nav").style.width = "0";
  document.getElementById("mobile-nav").style.padding = "0";
}
