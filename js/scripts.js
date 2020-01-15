$(document).ready(function() {
    $("form#apt").submit(function(event) {
        event.preventDefault();
        var name = $("input#name").val();
        var date = $("input#date").val();
        var service = $("input#service").val();
        var start = $("input#start").val();
        var end = $("input#end").val();
        $(".result").show();
        $(".name").text(name);
        $(".date").text(date);
        $(".service").text(service);
        $(".start").text(start);
        $(".end").text(end);
    })
});