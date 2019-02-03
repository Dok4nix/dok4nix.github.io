$(document).ready(function() {
  console.log("Helo1");
  $(".box").on('click', (event) => {
    let number = (() => {
      if ($(event.target).hasClass("1")) {
        return ".1";
      } else if ($(event.target).hasClass("2")) {
        return ".2";
      } else {
        return ".3";
      }
    })();
    console.log(number);
    $(event.target).toggleClass("toggled");
    $(event.target).prev().toggleClass("toggled");
    $(event.target).next().toggleClass("toggled");
    $(event.target).parent().prev().find(number).toggleClass("toggled");
    $(event.target).parent().next().find(number).toggleClass("toggled");
  })

});
