$(document).ready(function () {
    $("form#beepboop").submit(function () {
        event.preventDefault();

        var result = $("#result ul");
        var input = parseInt($("input#number").val());
        var str;
        for (i = 1; i <= input; i++) {
            var convertTostring = i.toString();

            if (convertTostring.includes("1")) {
                str = "Beep";
            } else if (convertTostring.includes("2")) {
                str = "Boop";
            } else if (convertTostring.includes("3")) {
                str = "'I'm sorry, Dave. I'm afraid I can't do that.'";
            }
            else {
                str = i;

            }
            $('<li>').text(str).appendTo(result);
        }
        
    });
});














