(function ($) {
  // Begin jQuery
  $(function () {
    // DOM ready
    // If a link has a dropdown, add sub menu toggle.
    $("nav ul li a:not(:only-child)").click(function (e) {
      $(this).siblings(".nav-dropdown").toggle();
      // Close one dropdown when selecting another
      $(".nav-dropdown").not($(this).siblings()).hide();
      e.stopPropagation();
    });
    // Clicking away from dropdown will remove the dropdown class
    $("html").click(function () {
      $(".nav-dropdown").hide();
    });
    // Toggle open and close nav styles on click
    $("#nav-toggle").click(function () {
      $("nav ul").slideToggle();
    });
    // Hamburger to X toggle
    $("#nav-toggle").on("click", function () {
      this.classList.toggle("active");
    });
  }); // end DOM ready
})(jQuery); // end jQuery
var sortBtn = document.querySelector(".tabs").children;
var places = document.querySelector(".destination div.cards").children;
document.getElementById("default-filter").classList.add("current");
var default_filter = document
  .getElementById("default-filter")
  .getAttribute("data-target");
for (var k = 0; k < places.length; k++) {
  places[k].classList.remove("active");
  places[k].classList.add("delete");
  if (places[k].getAttribute("data-item") == default_filter) {
    places[k].classList.remove("delete");
    places[k].classList.add("active");
  }
}
for (var i = 0; i < sortBtn.length; i++) {
  sortBtn[i].addEventListener("click", function () {
    for (var j = 0; j < sortBtn.length; j++) {
      sortBtn[j].classList.remove("current");
    }
    this.classList.add("current");
    var targetData = this.getAttribute("data-target");
    for (var k = 0; k < places.length; k++) {
      places[k].classList.remove("active");
      places[k].classList.add("delete");

      if (places[k].getAttribute("data-item") == targetData) {
        places[k].classList.remove("delete");
        places[k].classList.add("active");
      }
    }
  });
}
