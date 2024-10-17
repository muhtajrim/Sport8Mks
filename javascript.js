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
// Optional: Handle click event for dropdown (if needed)
document.querySelectorAll(".dropbtn").forEach((button) => {
  button.addEventListener("click", function (event) {
    const dropdownContent = this.nextElementSibling;
    dropdownContent.style.display =
      dropdownContent.style.display === "block" ? "none" : "block";
    event.stopPropagation(); // Prevent click event from propagating
  });
});

// Close dropdown if clicked outside
window.addEventListener("click", function () {
  document.querySelectorAll(".dropdown-content").forEach((content) => {
    content.style.display = "none";
  });
});
// Menutup dropdown saat mengklik di luar
window.addEventListener("click", function (event) {
  dropdowns.forEach((dropdown) => {
    if (!dropdown.contains(event.target)) {
      dropdown.querySelector(".dropdown-content").style.display = "none";
      const nestedDropdowns = dropdown.querySelectorAll(
        ".nested-dropdown-content"
      );
      nestedDropdowns.forEach((nestedDropdown) => {
        nestedDropdown.style.display = "none"; // Menutup nested dropdown juga
      });
    }
  });
});

// Menampilkan atau menyembunyikan dropdown saat hover
dropdowns.forEach((dropdown) => {
  dropdown.addEventListener("mouseenter", () => {
    dropdown.querySelector(".dropdown-content").style.display = "block";
  });

  dropdown.addEventListener("mouseleave", () => {
    dropdown.querySelector(".dropdown-content").style.display = "none";
  });

  // Menangani nested dropdown untuk setiap opsi S1 hingga S8
  const nestedDropdowns = dropdown.querySelectorAll(".nested-dropdown");

  nestedDropdowns.forEach((nestedDropdown) => {
    const mainLink = nestedDropdown.previousElementSibling; // Ambil link utama (S1, S2, dst)

    mainLink.addEventListener("mouseenter", () => {
      nestedDropdown.querySelector(".nested-dropdown-content").style.display =
        "block";
    });

    nestedDropdown.addEventListener("mouseleave", () => {
      nestedDropdown.querySelector(".nested-dropdown-content").style.display =
        "none";
    });
  });
});
document.addEventListener("DOMContentLoaded", function () {
  if (window.innerWidth <= 768) {
    var video = document.querySelector("video");
    video.controls = false; // Menonaktifkan kontrol
    video.autoplay = true; // Memastikan video tetap autoplay
  }
});
