$(document).ready(function() {
  $("form#beepboop").submit(function() {
    event.preventDefault();

    var input = parseInt($("input#number").val());
    if (input === "") {
      alert("Please enter a number");
      return;
    }
    if (Number.isNaN(input)) {
      alert("Please enter a number");
      return;
    }
    if (input < 0) {
      alert("Please enter a number > 1");
      return;
    }
    var array = [];

    for (i = 0; i <= input; i++) {
      var convertTostr = i.toString();

      if (convertTostr.includes("3")) {
        array.push("'I'm sorry, Dave. I'm afraid I can't do that.'");
      } else if (convertTostr.includes("2")) {
        array.push("Boop!");
      } else if (convertTostr.includes("1")) {
        array.push("Beep!");
      } else {
        array.push(" " + i);
      }
    }
    var result = $("#result ul").empty();

    array.forEach(function(val, i) {
      $("<li>")
        .addClass(i % 2 == 0 ? "odd" : "even")
        .text(val)
        .appendTo(result);
    });
  });
});
