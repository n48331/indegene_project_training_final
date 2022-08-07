(function ($) {
  $(function () {
    $("nav ul li a:not(:only-child)").click(function (e) {
      $(this).siblings(".nav-dropdown").toggle();

      $(".nav-dropdown").not($(this).siblings()).hide();
      e.stopPropagation();
    });
    $("html").click(function () {
      $(".nav-dropdown").hide();
    });
    $("#nav-toggle").click(function () {
      $("nav ul").slideToggle();
    });
    $("#nav-toggle").on("click", function () {
      this.classList.toggle("active");
    });
  });
  $(function () {
    $("#insta").tooltip({
      show: null,
      position: {
        my: "left-25 bottom",
        at: "left top-5",
      },
      open: function (event, ui) {
        ui.tooltip.animate({ top: ui.tooltip.position().top + 5 }, "fast");
      },
    });
    $("#fb").tooltip({
      show: null,
      position: {
        my: "left-25 bottom",
        at: "left top-5",
      },
      open: function (event, ui) {
        ui.tooltip.animate({ top: ui.tooltip.position().top + 5 }, "fast");
      },
    });
    $("#in").tooltip({
      show: null,
      position: {
        my: "left-25 bottom",
        at: "left top-5",
      },
      open: function (event, ui) {
        ui.tooltip.animate({ top: ui.tooltip.position().top + 5 }, "fast");
      },
    });
  });
})(jQuery);
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
  // $("form").submit(function () {
  //   if ($("input").val() !== "") alert("Submitted");
  // });
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
          required: false,
          minlength: 4,
        },
        email: {
          required: true,
          email: true,
        },

        phone: {
          required: true,
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
          required: "Your phone number is required",
          minlength: "10 digits is required",
          maxlength: "Not valid number.Enter only 10 digits",
        },
        message: {
          required: "Write some message",
        },
      },

      errorElement: "label",
      errorPlacement: function (error, element) {
        if (element.attr("name") == "fname") error.insertAfter(".fname-error");
        else if (element.attr("name") == "lname")
          error.insertAfter(".lname-error");
        else if (element.attr("name") == "email")
          error.insertAfter(".email-error");
        else if (element.attr("name") == "phone")
          error.insertAfter(".phone-error");
        else if (element.attr("name") == "message")
          error.insertAfter(".message-error");
        else error.insertAfter(element);
      },
    });
  });
}

function about() {
  function counter(id, start, end, duration) {
    let obj = document.getElementById(id),
      current = start,
      range = end - start,
      increment = end > start ? 1 : -1,
      step = Math.abs(Math.floor(duration / range)),
      timer = setInterval(() => {
        current += increment;
        obj.textContent = current;
        if (current == end) {
          clearInterval(timer);
        }
      }, step);
  }
  counter("walk", 0, 3241, 5000);
  counter("plane", 0, 787, 5000);
  counter("apartment", 0, 1203, 5000);
  counter("ship", 5000, 9874, 5000);
}
