$(document).ready(function() {

  $(window).on("scroll", function() {
  if ($(window).scrollTop() > 25) {
    $("header").css("top", "0");
      $(".main_asidecontainer").css("margin-top", "86px");
    $("header").css("transition", " 0.1s ease");
  } else {
    $("header").css("top", "40px");
    $(".main_asidecontainer").css("margin-top", "130px");
  }
});

/***************header*******************/

$(".mob_menu").click(function() {
  $(".sub_menumob").css("top", "0");
});

$(".sub_close").click(function() {
  $(".sub_menumob").css("top", "-2000px");
});

//***** assestmentt create coruse********/

$(".asses").click(function() {
  $(".assestmentt").css("display", "block");
  $(".sectionn").css("display", "none");
});

$(".sess").click(function() {
  $(".assestmentt").css("display", "none");
  $(".sectionn").css("display", "block");
});


/*********** show-create******/
 $(".next").click(function() {
       $(".three").css("display", "block");
       $(".one").css("display", "none");
       $(".one").addClass('active');
       $(".three").removeClass('active');
     });
  /************************** scroll ******************************************/
  $(window).on("scroll", function() {
    if ($(window).scrollTop() > 55) {
      $(".subnav_container").addClass("fixed_head");
    } else {
      $(".subnav_container").removeClass("fixed_head");
    }
  });
  /*******************************************************************************/

  $('#upload').click(function() {
    $('.upload_float').css("display","block");

  });

  /********************* aside navigation ************************************/

  $('.purchase_submenu').hide();
  $('.purchase').click(function() {
    $('.purchase_submenu').slideToggle(250);

  });

  $('.purchase_reg_submenu').hide();
  $('.purchase_reg').click(function() {
    $('.purchase_reg_submenu').slideToggle(250);

  });

  $('.sales_submenu').hide();
  $('.sales').click(function() {
    $('.sales_submenu').slideToggle(250);

  });

  $('.sales_reg_submenu').hide();
  $('.sales_reg').click(function() {
    $('.sales_reg_submenu').slideToggle(250);

  });

  $('.stock_submenu').hide();
  $('.stock').click(function() {
    $('.stock_submenu').slideToggle(250);

  });

  /******************************** aside push button animate **********************************/

  $(".aside_push").hover(function() {
      $(this).animate({
        'right': '-25px'
      }, 250);

    },
    function() {
      $(this).animate({
        'right': '-12px'
      }, 250);
    });

  $(".aside_push_rt").hover(function() {
      $(this).animate({
        'right': '-25px'
      }, 250);

    },
    function() {
      $(this).animate({
        'right': '-12px'
      }, 250);
    });

  /******************************** aside push **********************************/

  $(".aside_push").click(function() {
    $(".main_asidecontainer").animate({
      'width': '80px'
    }, 50);

    $(".aside_container").css("display", "none");
    $(".aside_container_mini").css("display", "block");
	$(".aside_container_mini").addClass("minim");

    $(this).css("display", "none");
    $(".aside_push_rt").css("display", "block");

    //  $(".aside_push").click(function() {
    //     $(".aside_container").css("display", "block");
    // $(".aside_container_mini").css("display", "none");
    //  });

    $(".login_logo").animate({
      'width': '80px'
    }, 50);

    $('.logo_big').css("display", "none");
    $('.logo_small').css("display", "block");


    $('.placeholder_container').addClass("elongate");
    $('.subnav_container').addClass("elongate");
    $('.placeholder_container').css("transition", " 0.3s ease");
    $('.subnav_container').css("transition", " 0.3s ease");

    $('.main_contentcontainer').addClass("elongate");
    $('.main_contentcontainer').css("transition", " 0.3s ease");

    $('.main_dashboardcontainer').addClass("elongate");
    $('.main_dashboardcontainer').css("transition", " 0.3s ease");

    // $('.graph_holder').css("width", "62.5%");
    // $('.graph_holder').css("transition", " 0s ease");

  });

  $(".aside_push_rt").click(function() {

    $('.placeholder_container').removeClass("elongate");
    $('.subnav_container').removeClass("elongate");
    $('.placeholder_container').css("transition", " 0s ease");
    $('.subnav_container').css("transition", " 0s ease");

    $('.main_contentcontainer').removeClass("elongate");
    $('.main_contentcontainer').css("transition", " 0s ease");

    $('.main_dashboardcontainer').removeClass("elongate");
    $('.main_dashboardcontainer').css("transition", " 0s ease");

    // $('.graph_holder').css("width", "70%");
    // $('.graph_holder').css("transition", " 0s ease");

    $(".main_asidecontainer").animate({
      'width': '250px'
    }, 50);

    $(".aside_container").css("display", "block");
    $(".aside_container_mini").css("display", "none");
	$(".aside_container_mini").removeClass("minim");

    $(this).css("display", "none");
    $(".aside_push").css("display", "block");

    $(".login_logo").animate({
      'width': '250px'
    }, 50);

    $('.logo_small').css("display", "none");
    $('.logo_big').css("display", "block");

  });

  /******************************** shop animate **********************************/

  $("#shop").click(function() {
    $(".shop_select").css("display", "block");
  });


  $("#shop-data").on("click", "a", function(e) {
    e.preventDefault();
    var $this = $(this).parent();
    $("#shop").val($this.data("value"));
    $(".shop_select").css("display", "none");
  });

  /************************************************************************************/

  /******************************** supplier animate **********************************/

  $("#supplier").click(function() {
    $(".supplier_select").css("display", "block");
  });


  $("#supplier-data").on("click", "a", function(e) {
    e.preventDefault();
    var $this = $(this).parent();
    $("#supplier").val($this.data("value"));
    $(".supplier_select").css("display", "none");
  });

  /************************************************************************************/

  /******************************** agent animate **********************************/

  $("#agent").click(function() {
    $(".agent_select").css("display", "block");
  });


  $("#agent-data").on("click", "a", function(e) {
    e.preventDefault();
    var $this = $(this).parent();
    $("#agent").val($this.data("value"));
    $(".agent_select").css("display", "none");
  });

  /************************************************************************************/

  /******************************** transp animate **********************************/

  $("#transp").click(function() {
    $(".transp_select").css("display", "block");
  });


  $("#transp-data").on("click", "a", function(e) {
    e.preventDefault();
    var $this = $(this).parent();
    $("#transp").val($this.data("value"));
    $(".transp_select").css("display", "none");
  });

  /************************************************************************************/

  /******************************** tax animate **********************************/

  $("#taxx").click(function() {
    $(".taxx_select").css("display", "block");
  });


  $("#taxx-data").on("click", "a", function(e) {
    e.preventDefault();
    var $this = $(this).parent();
    $("#taxx").val($this.data("value"));
    $(".taxx_select").css("display", "none");
  });

  /************************************************************************************/

  /******************************** disct animate **********************************/

  $("#disct").click(function() {
    $(".disct_select").css("display", "block");
  });


  $("#disct-data").on("click", "a", function(e) {
    e.preventDefault();
    var $this = $(this).parent();
    $("#disct").val($this.data("value"));
    $(".disct_select").css("display", "none");
  });

  /************************************************************************************/

  /************************************** checkbox others ***********************/


  $("#others").click(function() {
    $(".others_list").css("display", "block");
  });

  /***********************************************************************************/
  $('.entry_boxcontainer').hide();
  $('.entry_box').click(function() {
    $('.entry_boxcontainer').slideToggle(250);

  });


});

$(document).mouseup(function(e) {
  var $container = $(".selector"),
    $container2 = $(".selector2"),
    $container3 = $(".selector3"),
    $container4 = $(".selector4"),
    $container5 = $(".selector5"),

    $input = $(".shop_select"),
    $input1 = $(".supplier_select"),
    $input2 = $(".agent_select"),
    $input3 = $(".transp_select"),
    $input4 = $(".taxx_select"),
    $input5 = $(".disct_select"),

    $check = $(".others_list"),
    $otherr = $(".other_select");

  //////////////////////////////////////////////////////////////////////////////////////////////
  if (!$container.is(e.target) && $container.has(e.target).length === 0) {
    $(".purchase_submenu").hide();
  }

  if (!$container2.is(e.target) && $container2.has(e.target).length === 0) {
    $(".purchase_reg_submenu").hide();
  }

  if (!$container3.is(e.target) && $container3.has(e.target).length === 0) {
    $(".sales_submenu").hide();
  }

  if (!$container4.is(e.target) && $container4.has(e.target).length === 0) {
    $(".sales_reg_submenu").hide();
  }

    if (!$container5.is(e.target) && $container5.has(e.target).length === 0) {
      $(".stock_submenu").hide();
    }

  ////////////////////////////////////////////////////////////////////////////////////////
  if (!$input.is(e.target) && $input.has(e.target).length === 0) {
    $input.hide();
  }

  if (!$input1.is(e.target) && $input1.has(e.target).length === 0) {
    $input1.hide();
  }

  if (!$input2.is(e.target) && $input2.has(e.target).length === 0) {
    $input2.hide();
  }

  if (!$input3.is(e.target) && $input3.has(e.target).length === 0) {
    $input3.hide();
  }

  if (!$input4.is(e.target) && $input4.has(e.target).length === 0) {
    $input4.hide();
  }

  if (!$input5.is(e.target) && $input5.has(e.target).length === 0) {
    $input5.hide();
  }

  //////////////////////////////////////////////////////////////////////////////////////////////
  if (!$check.is(e.target) && $check.has(e.target).length === 0) {
    $check.hide();
  }

  if (!$otherr.is(e.target) && $otherr.has(e.target).length === 0) {
    $otherr.hide();
  }


});
