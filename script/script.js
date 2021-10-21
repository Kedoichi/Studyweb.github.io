$(document).ready(function () {
  //Close the dropdown
  $(".value-list").removeClass("open");

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
});
