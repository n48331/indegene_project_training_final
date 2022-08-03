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
function index() {
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

  $(function () {
    var owl = $(".owl-carousel");
    owl.owlCarousel({
      smartSpeed: 450,
      autoplay: true,
      autoplayTimeout: 3000,
      items: 1,
      margin: 20,
      loop: true,
      nav: false,
      responsiveClass: true,
      responsive: {
        0: {
          items: 1,
        },
        800: {
          items: 1,
        },
      },
    });
  });
}
function contact() {
  // Contact US
  $(document).ready(function () {
    $("#contact__form").validate({
      errorClass: "error fail-alert",
      validClass: "valid",
      rules: {
        fname: {
          required: true,
          minlength: 4,
        },
        lname: {
          required: true,
          minlength: 4,
        },
        email: {
          required: true,
          email: true,
        },

        phone: {
          number: false,
          minlength: 10,
          maxlength: 10,
        },
        message: {
          required: true,
          minlength: 10,
        },
      },

      messages: {
        fname: {
          required: "Your first name is required",
          minlength: "Enter at least 4 characters",
          // pattern: "Numbers are not allowed",
        },
        lname: {
          required: "Your last name is required",
          minlength: "Enter at least 4 characters",
          // pattern: "Numbers are not allowed",
        },
        email: {
          required: "Your email is required",
          email: "Enter a valid email",
        },

        phone: {
          minlength: "10 digits is required",
          maxlength: "Not valid number.Enter only 10 digits",
        },
        message: {},
      },

      errorElement: "li",
      errorPlacement: function (error, element) {
        var placement = $(element).data("error");

        if (placement) {
          $(placement).append(error);
        } else {
          error.insertBefore(element);
        }
      },
    });
  });
}
