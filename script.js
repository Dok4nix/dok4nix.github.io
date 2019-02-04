$(document).ready(function() {

$("#reset").on('click', () => {
  $("#reset").text("Reset");
  $(".box").each(function() {
    const randomNumber = () => Math.round(Math.random());
    if(randomNumber()===1) {
      $(this).toggleClass("toggled");
    }
  })
});
const winCondition = () => {
  let won = 1;
  $(".box").each(function() {
    if(!$(this).hasClass("toggled")) {
      won = 0;
    }
  })
  return won;
}

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

    $(event.target).toggleClass("toggled");
    $(event.target).prev().toggleClass("toggled");
    $(event.target).next().toggleClass("toggled");
    $(event.target).parent().prev().find(number).toggleClass("toggled");
    $(event.target).parent().next().find(number).toggleClass("toggled");
    if(winCondition()) {
      $("#reset").text("Wygrana");
    }
  })

});
