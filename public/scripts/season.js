$(document).ready(function () {

    var seasonName;
    var numberRounds;
    var startDate;

    $("#drawDiv").hide();

    $("#seasonSave").click(function () {
        $("#createDraw").toggleClass("disabled");
    });

    $("#createDraw").click(function () {
        $("#viewDraw").toggleClass("disabled");
    });

    $("#seasonStartDate").change(function () {
        numberRounds = $("#seasonNumberRounds").val();
        startDate = new Date($("#seasonStartDate").val());
        updateDates();
    });

    $("#seasonNumberRounds").change(function () {

        numberRounds = $("#seasonNumberRounds").val();
        if (numberRounds <= 16) {
            startDate = new Date($("#seasonStartDate").val());
            updateDates();
        }
    });

    $("#viewDraw").click(function () {
        $("#seasonDiv").fadeOut("fast", function () {
            $("#drawDiv").fadeIn("fast");
        });
    });


    $("#seasonBack").click(function () {
        $("#drawDiv").fadeOut("fast", function () {
            $("#seasonDiv").fadeIn("fast");
        });
    });

    $('.ui.dropdown')
        .dropdown();

    function updateDates() {
        var tempDate = startDate;

        console.log(tempDate);
        console.log(startDate);

        $("#tableBody").empty();
        for (i = 0; i < numberRounds; i++) {
            $("#tableBody").append("<tr><td data-label='Round'>Round " + (i + 1) + "</td><td data-label='Date'>" + tempDate.toDateString() + "</td></tr>");
            tempDate.setDate(tempDate.getDate() + 7);
        }
    }
});