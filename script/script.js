$(document).ready(function () {
  const $sidebar = $("#sidebar");
  const $icon = $("#custom-icon");
  const $sidebarItems = $(".sidebar-item");
  const bar = $("#bar-icon");
  const mobileViewMenu = $(".mobile-view-menu")

  bar.hide();
  // console.log(bar)
  if ($(window).width() > 425) {
    // Hide the element when window width is greater than 425px
    $icon.on("click", function () {
      $icon.hide();
      bar.show(500);
      $sidebar.addClass("hidden");
      $sidebarItems.addClass("sidebar-item-hidden");
      // console.log('object');
    });
    bar.on("click", function () {
      $icon.show(500);
      bar.hide();
      $sidebar.removeClass("hidden");
      $sidebarItems.removeClass("sidebar-item-hidden");
    });
  } else {
    // Show the element when window width is less than or equal to 425px
    // $("#yourElement").show();
    
    mobileViewMenu.on("click", function(){
      $sidebar.addClass('addNav')
      // $sidebar.slideToggle(500);
      console.log('click me')
    })
    $icon.on("click", function(){
      $sidebar.removeClass('addNav')
    })
  }

  $(".dark").click(function () {
    $(".dark").attr("hidden", true);
    $(".light").attr("hidden", false);
  });
  $(".light").click(function () {
    $(".light").attr("hidden", true);
    $(".dark").attr("hidden", false);
  });

  // active route
  var path = window.location.pathname.replace(/^\/|\/$/g, "");

  $("#sidebar ul li a").each(function () {
    // Get the href attribute and normalize it
    var href = $(this)
      .attr("href")
      .replace(/^\/|\/$/g, "");

    // Check if the href matches the current path
    if (href === path || (href === "" && path === "/")) {
      $(this).addClass("nav-active");
    } else {
      $(this).removeClass("nav-active");
    }
  });

  // finance page tab

  $(".tab-item").click(function () {
    $(".tab-item").removeClass("active-tab");

    $(this).addClass("active-tab");
  });

  // input file upload
  $("#file-upload").on("change", function (event) {
    const [file] = event.target.files;

    if (file && (file.name.endsWith(".jpg") || file.name.endsWith(".png"))) {
      const reader = new FileReader();
      $(".custom-file-upload").hide();
      $("#show-filename").append(file?.name).addClass("file-name").show();
      $(".delete-icon").show();
      // Load the image and display it
      reader.onload = function (event) {
        $("#preview-img").attr("src", event.target.result);
        $("#image-preview").show();
      };

      reader.readAsDataURL(file);
    } else {
      alert("Please upload an image with a .jpg or .png extension.");
      $("#file-upload").val("");
      $("#image-preview").hide();
    }
  });

  $(".delete-icon").click(function () {
    const value = $("#file-upload").val("");
    $("#show-filename").remove();
    $("#preview-img").attr("src", "");
    $("#image-preview").hide();
    $(".custom-file-upload").show();
    $(".delete-icon").hide();
  });

  $("#amount-value").on("click", function () {
    $("#amount-field").val("");
    // console.log($("#amount-value").val());
  });

  var option = $(".option-group");
  // option.hide();
  $("#method-field").click(function () {
    option.toggle();
    const icon = $("#method-field-icon i");
    if (icon.hasClass("fa-caret-down")) {
      icon.removeClass("fa-caret-down").addClass("fa-caret-up");
    } else {
      icon.removeClass("fa-caret-up").addClass("fa-caret-down");
    }
  });

  var method = $("#method-field");

  $("#bank").click(function () {
    const content = $("#bank").text();
    method.val(content);
    option.hide();
  });
  $("#crypto").click(function () {
    const content = $("#crypto").text();
    method.val(content);
    option.hide();
  });

  $(".btn-ripple").on("click", function (e) {
    let x_coord = e.clientX;
    let y_coord = e.clientY;

    let btn_top_pos = $(this).offset().top;
    let btn_left_pos = $(this).offset().left;

    let x = x_coord - btn_left_pos;
    let y = y_coord - btn_top_pos;

    // Create the ripple effect (span element)
    const $span = $("<span class='ripple'></span>");
    $span.css({
      top: `${y}px`,
      left: `${x}px`,
    });

    $(this).append($span);

    setTimeout(() => {
      $span.remove();
    }, 1000);
  });
});
