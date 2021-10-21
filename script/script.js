$(document).ready(function () {
  //Setup - Close the dropdown + first animation
  $(".value-list").removeClass("open");
  $(".Settings").addClass("flyin");
  $(".features").addClass("open");
  $(".features .more i").addClass("open");
  //Find feature
  $(".chosen-value").keyup(function () {
    let inputValue = $(this).val().toLowerCase();

    if (inputValue.length > 0) {
      $(".value-list > li").each(function () {
        if (
          !(
            inputValue.substring(0, inputValue.length) ===
            $(this).text().substring(0, inputValue.length).toLowerCase()
          )
        ) {
          $(this).addClass("closed");
        } else {
          $(this).removeClass("closed");
        }
      });
    } else {
      for (let i = 0; i < dropdownArray.length; i++) {
        $(this).removeClass("closed");
      }
    }
  });

  $(".chosen-value").click(function () {
    $(this).attr("placeholder", "Type to filter");
    $(this).addClass("open");
    $(".value-list > li").removeClass("closed");
  });

  //Select Theme => Change layout
  $(".value-list li").each(function () {
    $(this).on("click", function () {
      $(".chosen-value").val($(this).text());
      $(".chosen-value").removeClass("open");
    });
  });

  $(".ThemSelection").mouseleave("click", function () {
    $(".chosen-value").removeClass("open");
  });

  $(".more").click(function () {
    if ($(".features .more i").hasClass("open")) {
      $(".features .more i").removeClass("open");
      $(".Settings").addClass("flyout");
      $(".Settings").removeClass("flyin");
      $(".features").removeClass("open");
    } else {
      $(".features .more i").addClass("open");
      $(".Settings").addClass("flyin");
      $(".Settings").removeClass("flyout");
      $(".features").addClass("open");
    }
  });
});
