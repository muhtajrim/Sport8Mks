//menu
var tombolMenu = $(".tombol-menu");
var menu = $("nav .menu ul");

function klikMenu() {
  tombolMenu.click(function () {
    menu.toggle();
  });
  menu.click(function () {
    menu.toggle();
  });
}
$(document).ready(function () {
  var width = $(window).width();
  if (width < 990) {
    klikMenu();
  }
});

//check lebar
$(window).resize(function () {
  var width = $(window).width();
  if (width > 989) {
    menu.css("display", "block");
    //display:block
  } else {
    menu.css("display", "none");
  }
  klikMenu();
});

//efek scroll
$(document).ready(function () {
  var scroll_pos = 0;
  $(document).scroll(function () {
    scroll_pos = $(this).scrollTop();
    if (scroll_pos > 0) {
      $("nav").addClass("putih");
    } else {
      $("nav").removeClass("putih");
    }
  });
});

let url =
  "https://script.google.com/macros/s/AKfycbyvTg4a_9MqWEl8YmeCsLBxFiqbMQsfznpLww6pxF75XiRmvA4Ko2b-SRSqwo6cmybQ6A/exec";
let form = document.querySelector("#form");
form.addEventListener("submit", (e) => {
  e.target.btn.innerHTML = "Submitting";
  let d = new FormData(form);
  fetch(url, {
    method: "POST",
    body: d,
  })
    .then((res) => res.text())
    .then((finalRes) => {
      e.target.btn.innerHTML = "Submit";
    });
  console.log(finalRes);
  e.preventDefault();
});
