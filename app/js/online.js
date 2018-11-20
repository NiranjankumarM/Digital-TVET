$(document).ready(function() {

    /* disable zoom */

    if (event.ctrlKey == true && (event.which == '61' || event.which == '107' || event.which == '173' || event.which == '109' || event.which == '187' || event.which == '189')) {
        event.preventDefault();
    }
    // 107 Num Key  +
    // 109 Num Key  -
    // 173 Min Key  hyphen/underscor Hey
    // 61 Plus key  +/= key

    $(window).bind('mousewheel DOMMouseScroll', function(event) {
        if (event.ctrlKey == true) {
            event.preventDefault();
        }

    });

    $('#sign').click(function() {

        var username = $('#username').val(),
            pwd = $('#pwd').val();

        if (username == '') {
            $('#username').css("border-bottom", "1px solid #ff3f3f");
            setTimeout(function() {
                $('#username').css("border-bottom", "1px solid #d3d3d3");
            }, 2000);
        } else {
            $('#username').css("border-bottom", "1px solid #d3d3d3");
        }

        if (pwd == '') {
            $('#pwd').css("border-bottom", "1px solid #ff3f3f");
            setTimeout(function() {
                $('#pwd').css("border-bottom", "1px solid #d3d3d3");
            }, 2000);
        } else {
            $('#pwd').css("border-bottom", "1px solid #d3d3d3");
        }
    });

    $('.sales_submenu').hide();
    $('.sales_reg').click(function() {
        $('.sales_submenu').toggle();
        $('.sales_submenu').css("transition", " 2.5s ease");
        $('.order_submenu').hide();
    });

    $('.order_submenu').hide();
    $('.order_reg').click(function() {
        $('.order_submenu').toggle();
        $('.order_submenu').css("transition", " 2.5s ease");
        $('.sales_submenu').hide();
    });

    $("#filter1").click(function() {
        $(".selector1").css("display", "block");
    });


    $("#filter-data1").on("click", "a", function(e) {
        e.preventDefault();
        var $this = $(this).parent();
        $("#filter1").val($this.data("value"));
        $(".selector1").css("display", "none");
    });


    $("#filter2").click(function() {
        $(".selector2").css("display", "block");
    });


    $("#filter-data2").on("click", "a", function(e) {
        e.preventDefault();
        var $this = $(this).parent();
        $("#filter2").val($this.data("value"));
        $(".selector2").css("display", "none");
    });


    $("#filter3").click(function() {
        $(".selector3").css("display", "block");
    });


    $("#filter-data3").on("click", "a", function(e) {
        e.preventDefault();
        var $this = $(this).parent();
        $("#filter3").val($this.data("value"));
        $(".selector3").css("display", "none");
    });

    $("#filter4").click(function() {
        $(".selector4").css("display", "block");
    });


    $("#filter-data4").on("click", "a", function(e) {
        e.preventDefault();
        var $this = $(this).parent();
        $("#filter4").val($this.data("value"));
        $(".selector4").css("display", "none");
    });


    $("#filter5").click(function() {
        $(".selector5").css("display", "block");
    });


    $("#filter-data5").on("click", "a", function(e) {
        e.preventDefault();
        var $this = $(this).parent();
        $("#filter5").val($this.data("value"));
        $(".selector5").css("display", "none");
    });



    $("#checkbox_filter").click(function() {
        $(".checkbox_selector").css("display", "block");
    });

    var max_range = $('.qty').text();

    $("#order_num").attr({
        "max": max_range,
        "min": 0
    });

    $("#order_num").keydown(function() {
        $(this).data("old", $(this).val());
    });
    $("#order_num").keyup(function() {
        if (parseInt($(this).val()) <= max_range && parseInt($(this).val()) >= 0)
        ;
        else
            $(this).val($(this).data("old"));
    });


/*
    $("#apply").click(function() {
        /*    var value = null;
            var shop = document.getElementsByClassName('shop');
            for (var i = 0; shop[i]; ++i) {
                if (shop[i].checked) {
                    value = shop[i].value;
                    break;
                }
            }

        var shop = document.getElementById('order_num').value;
        console.log(shop);
    });

    /*
        $('.checkbox_selector input[type="checkbox"]').on('click', function() {

            var title = $(this).closest('.checkbox_selector').find('input[type="checkbox"]').val(),
                title = $(this).val() + ",";

            if ($(this).is(':checked')) {
                var html = title;

                console.log(html);
            }
            $('#checkbox_filter').val(title);
        });*/

});

$(document).mouseup(function(e) {
    var $container = $(".selector1"),
        $container2 = $(".selector2"),
        $container3 = $(".selector3"),
        $container4 = $(".selector4"),
        $container5 = $(".selector5");

    // if the target of the click isn't the container nor a descendant of the container
    if (!$container.is(e.target) && $container.has(e.target).length === 0) {
        $container.hide();
    }

    if (!$container2.is(e.target) && $container2.has(e.target).length === 0) {
        $container2.hide();
    }

    if (!$container3.is(e.target) && $container3.has(e.target).length === 0) {
        $container3.hide();
    }

    if (!$container4.is(e.target) && $container4.has(e.target).length === 0) {
        $container4.hide();
    }

    if (!$container5.is(e.target) && $container5.has(e.target).length === 0) {
        $container5.hide();
    }
});


$(document).mouseup(function(e) {
    var $container = $(".checkbox_selector");

    // if the target of the click isn't the container nor a descendant of the container
    if (!$container.is(e.target) && $container.has(e.target).length === 0) {
        $container.hide();
    }
});
