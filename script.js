$(document).ready(function () {

    var turnMessage;
    var j = 0;
    var i = 0;
    var circle = false;
    var currentClass;
    var turnClass;
    var winCondition = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    // ..................................restart button...........................................

    $("#clear").on('click', function () {

        $(".xgrade").text("-");
        $(".ograde").text("-");
        $(".xgrade").data("count", 1);
        $(".ograde").data("count", 1);

        $(".first").removeClass("x o");
        $(".Second").removeClass("xonyeki").removeClass("oonyeki");

        $(".cell").unbind('click').one("click", function () {
            if (circle) {
                currentClass = 'o';
                turnClass = 'oonyeki';
                circle = false;
                turnMessage = 'x Turn';
            } else {
                currentClass = 'x';
                turnClass = 'xonyeki';
                circle = true;
                turnMessage = 'o Turn';
            }

            $(this).children('div').eq(0).addClass(currentClass);
            $(this).children('div').eq(1).addClass(turnClass);
            $("#screen").text(turnMessage);

            if (checkwin(currentClass)) {
                $("#winning-message-text").text(currentClass + ' wins!');
                $("#winning-message").addClass("show");
            } else if (draw()) {
                $("#winning-message-text").text('Draw!');
                $("#winning-message").addClass("show");
            }
        });

        $("#screen").text('START GAME');
        circle = false;
    });

    // ......................................play again button.............................................

    $("#restart").on('click', function () {

        if (draw()) {

        } else {
            counter(circle);
        };

        $("#winning-message").removeClass("show");
        $(".first").removeClass("x o");
        $(".Second").removeClass("xonyeki").removeClass("oonyeki");

        $(".cell").unbind('click').one("click", function () {
            if (circle) {
                currentClass = 'o';
                turnClass = 'oonyeki';
                circle = false;
                turnMessage = 'x Turn';
            } else {
                currentClass = 'x';
                turnClass = 'xonyeki';
                circle = true;
                turnMessage = 'o Turn';
            }

            $(this).children('div').eq(0).addClass(currentClass);
            $(this).children('div').eq(1).addClass(turnClass);
            $("#screen").text(turnMessage);

            if (checkwin(currentClass)) {
                $("#winning-message-text").text(currentClass + ' wins!');
                $("#winning-message").addClass("show");
            } else if (draw()) {
                $("#winning-message-text").text('Draw!');
                $("#winning-message").addClass("show");
            }
        });

        $("#screen").text('START GAME');

        circle = false;

    });




    // .......................................main.............................................






    $(".cell").each(function () {
        $(this).one('click', function () {



            if (circle) {
                currentClass = 'o';
                turnClass = 'oonyeki';
                circle = false;
                turnMessage = 'x Turn';
            } else {
                currentClass = 'x';
                turnClass = 'xonyeki';
                circle = true;
                turnMessage = 'o Turn';
            }

            $(this).children('div').eq(0).addClass(currentClass);
            $(this).children('div').eq(1).addClass(turnClass);
            $("#screen").text(turnMessage);

            if (checkwin(currentClass)) {

                $("#winning-message-text").text(currentClass + ' wins!');
                $("#winning-message").addClass("show");

            } else if (draw()) {
                $("#winning-message-text").text('Draw!');
                $("#winning-message").addClass("show");
            }

        });
    });






    // .....................................functions.........................................





    function draw() {


        if (($(".first").eq(0).hasClass("o") || $(".first").eq(0).hasClass("x")) &&
            ($(".first").eq(1).hasClass("o") || $(".first").eq(1).hasClass("x")) &&
            ($(".first").eq(2).hasClass("o") || $(".first").eq(2).hasClass("x")) &&
            ($(".first").eq(3).hasClass("o") || $(".first").eq(3).hasClass("x")) &&
            ($(".first").eq(4).hasClass("o") || $(".first").eq(4).hasClass("x")) &&
            ($(".first").eq(5).hasClass("o") || $(".first").eq(5).hasClass("x")) &&
            ($(".first").eq(6).hasClass("o") || $(".first").eq(6).hasClass("x")) &&
            ($(".first").eq(7).hasClass("o") || $(".first").eq(7).hasClass("x")) &&
            ($(".first").eq(8).hasClass("o") || $(".first").eq(8).hasClass("x"))) {

            return true;

        }

        //  $(".first").each(function(){
        //     if ($(this).children().eq(0).hasClass("o") || 
        //         $(this).children().eq(0).hasClass("x")){
        //             return true;
        //         }
        // });

    };


    function checkwin(current) {
        var win = false;
        for (let i = 0; i < winCondition.length; i++) {


            if ($(".cell").eq(winCondition[i][0]).children(".first").hasClass(current) &&
                $(".cell").eq(winCondition[i][1]).children(".first").hasClass(current) &&
                $(".cell").eq(winCondition[i][2]).children(".first").hasClass(current)) {

                win = true;
                return win;
            }

        }
    }

    function counter(turn) {

        if (turn) {
            i = $(".xgrade").data('count');
            $(".xgrade").text(i);
            i = i + 1;
            $(".xgrade").data("count", i);
        } else {
            j = $(".ograde").data('count');
            $(".ograde").text(j);
            j = j + 1;
            $(".ograde").data("count", j);
        }
    };



});
















