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

  $(".needy-knob table")
    .find("td:nth-child(5)")
    .addClass("imp")
    .end()
    .find("tr:nth-child(2)").each(function(i2, e) {
      console.log(e);
      $(e).find("td").each(function(index, f) {
        if(index > 2) {
          $(this).addClass("imp");
        }
      });
    });

});
