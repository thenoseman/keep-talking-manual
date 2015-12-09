$(document).ready(function () {
  // Fill in page footers:
  var pageCount = $(".page").size();
  pageCount -= $(".no-page-count").size();
  var currentPage = 0;
  var currentBG = 1;
  $(".page").each(function (index) {
    if ($(this).hasClass("no-page-count") == false) {
      currentPage++;
      $(".page-footer", $(this)).each(function (index) {
        if ($(this).hasClass("no-auto-footer") == false) {
          $(this).html("Page " + currentPage + " of " + pageCount);
        }
      });

      // pages without page count are the main body
      $(this).addClass('page-bg-0' + currentBG);
      currentBG++
        if(currentBG > 7)
        {
          currentBG = 1;
        }
    }
  });

  var text = "";
  $(".needy-knob table").each(function(i3, $table) {
    text = $table.className.replace("knob-","").substr(0,2);
    $($table)
    .find("td:nth-child(5)")
    .addClass("imp")
    .text(text)
    .end()
    .find("tr:nth-child(2)").each(function(i2, e) {
      $(e).find("td").each(function(index, f) {
        if(index > 2) {
          $(this).addClass("imp");
          $(this).text(text);
        }
      });
    });
  })

});
