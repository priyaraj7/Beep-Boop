$(document).ready(function () {
    $("form#beepboop").submit(function () {
        event.preventDefault();

        var input = parseInt($("input#number").val());
        var array = [];
        

        for (i = 1; i <= input; i++) {
            var start = i.toString();

            if (start.includes("1")) {
                array.push("Beep");
            } else if (start.includes("2")) {
                array.push("Boop");
            } else if (start.includes("3")) {
                array.push("'I'm sorry, Dave. I'm afraid I can't do that.'");
            }
            else {
                array.push(" " + i);
            }
        }
        var result = $("#result ul").empty();

        array.forEach(function(val) {
            $('<li>').text(val).appendTo(result);
        });
        
     
    });
});














