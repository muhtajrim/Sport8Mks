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

document
  .getElementById("dataForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Mencegah pengiriman default

    var formData = new FormData(this);

    fetch(
      "https://script.google.com/macros/s/AKfycbxxPVSWCNJJ8hET0BcthXareStGjHvOSHrl7XxyNZB0Z_k98YaLeb_ChepAnNkR_Wht/exec",
      {
        method: "POST",
        body: formData,
      }
    )
      .then((response) => response.text())
      .then((data) => {
        alert(data); // Menampilkan respons

        this.reset();
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  });

// Menutup dropdown jika di luar dropdown diklik
window.addEventListener("click", function (event) {
  if (!dropdown.contains(event.target)) {
    dropdownContent.style.display = "none";
  }
});
// Toggle dropdown menu on mobile when Registrasi is clicked
registrasiBtn.addEventListener("click", (e) => {
  e.preventDefault(); // Mencegah aksi default link
  dropdownContent.classList.toggle("active");
});

// Close dropdown if clicking outside of it
window.addEventListener("click", (e) => {
  if (!e.target.matches("#registrasiBtn") && !e.target.closest(".dropdown")) {
    dropdownContent.classList.remove("active");
  }
});
