function emailSend() {
  Email.send({
    Host: "smtp.elasticemail.com",
    Username: "username",
    Password: "password",
    To: "them@website.com",
    From: "you@isp.com",
    Subject: "This is the subject",
    Body: "And this is the body",
  }).then((message) => alert(message));
}

const items = document.querySelectorAll(".accordion button");

function toggleAccordion() {
  const itemToggle = this.getAttribute("aria-expanded");

  for (i = 0; i < items.length; i++) {
    items[i].setAttribute("aria-expanded", "false");
  }

  if (itemToggle == "false") {
    this.setAttribute("aria-expanded", "true");
  }
}

items.forEach((item) => item.addEventListener("click", toggleAccordion));

const scriptURL =
  "https://script.google.com/macros/s/AKfycbz4v3mkoNuiPbDmfVgj0N816YsMEGBJGa0csMhnNDOLPMOK9XW68FSWUPAtEM5isJmf/exec";

const form = document.querySelector("#form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  console.log(form);
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      alert("Success!", response);
    })
    .catch((error) => {
      alert("Error!", error.message);
    });
});

$(".menu").click(function () {
  $(this).toggleClass("open");
});

document.getElementById("tankImage").addEventListener("click", function () {
  this.requestFullscreen();
});
