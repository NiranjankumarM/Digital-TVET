$(document).ready(function() {

  /******************************** timescale animate **********************************/

  $(".week").click(function() {
    $(this).addClass("activee");
    $(".month").removeClass("activee");
    $(".year").removeClass("activee");
  });

  $(".month").click(function() {
    $(this).addClass("activee");
    $(".week").removeClass("activee");
    $(".year").removeClass("activee");
  });

  $(".year").click(function() {
    $(this).addClass("activee");
    $(".month").removeClass("activee");
    $(".week").removeClass("activee");
  });

  /************************************************************************************/

  /******************************** nav animate **********************************/

  $(".nav_one").click(function() {
    $(this).addClass("active_nav");
    $(".nav_two").removeClass("active_nav");
    $(".nav_three").removeClass("active_nav");
  });

  $(".nav_two").click(function() {
    $(this).addClass("active_nav");
    $(".nav_one").removeClass("active_nav");
    $(".nav_three").removeClass("active_nav");
  });

  $(".nav_three").click(function() {
    $(this).addClass("active_nav");
    $(".nav_two").removeClass("active_nav");
    $(".nav_one").removeClass("active_nav");
  });

  /************************************************************************************/

  $(".lesson1").click(function() {
    $(this).addClass("activee");
    $(".assest").removeClass("activee");
    $(".course_inner").css("display","block");
    $(".assestment_inner").css("display","none");
  });

  $(".assest").click(function() {
    $(this).addClass("activee");
    $(".lesson1").removeClass("activee");
    $(".assestment_inner").css("display","block");
    $(".course_inner").css("display","none");
  });

  /*******line chartttt***************************************************/

var ctx = document.getElementById("myChart");
var myChart = new Chart(ctx, {
  // The type of chart we want to create
  type: 'line',

  // The data for our dataset
  data: {
    labels: ["0", "creative", "Food", "Digital", "Culinary", "Mechatronics"],
    datasets: [
      // {
      //   label: "Courses",
      //   fill: false,
      //   lineTension: 0,
      //   backgroundColor: 'rgba(18,83,164, 17)',
      //   borderColor: 'rgb(18,83,164)',
      //   borderWidth: '50px',
      //   pointRadius: '3.5',
      //   pointHoverBackgroundColor: '#1253a4',
      //   //    pointHoverBorderColor: '#1253a4',
      //   pointBackgroundColor: '#fff',
      //   data: [5, 10, 50, 40, 20, 30, 45]
      // },
      {
        label: "Learners",
        fill: false,
        lineTension: 0,
        backgroundColor: 'rgb(89,134,191)',
        borderColor: 'rgb(89,134,191)',
        borderWidth: '50px',
        pointRadius: '3.5',
        pointHoverBackgroundColor: '#5986bf',
        //    pointHoverBorderColor: '#5986bf',
        pointBackgroundColor: '#fff',
        data: [0, 10, 50, 20, 15, 30, 35, 40]
      }
    ]
  },
  options: {
    responsive: true,
    scales: {
      yAxes: [{
        gridLines: {
          offsetGridLines: true
        },

        ticks: {
          max: 60,
          min: 0,
          stepSize: 15,
          fontColor: '#000'
        }
      }],
      xAxes: [{
        gridLines: {
          display: false,
          //  offsetGridLines: true
        },
        ticks: {
          fontColor: '#000'
        }
      }]
    },
    legend: {

      labels: {
        boxWidth: 12.5,
        fontColor: 'rgb(0, 0, 0)',
        fontSize: 11
      }
    },

    tooltips: {
      backgroundColor: 'rgba(255, 255, 255,1)',
      titleFontColor: '#000',
      titleFontStyle: 'normal',
      bodyFontColor: '#000',
      borderColor: 'rgba(18,83,164,0.5)',
      borderWidth: 1,
      bodySpacing: 15
    }
  }
});

/**************************************************/

new Chart(document.getElementById("pie"), {
  "type": "doughnut",
  "data": {
    "labels": ["This week", "Last week"],
    "datasets": [{
      "label": "My First Dataset",
      "data": [243, 230],
      "backgroundColor": ["rgb(18,83,164)", "rgb(245,245,245)"],
      "hoverBackgroundColor": ["rgb(18,83,164)", "rgb(245,245,245)"],
      "circumference": 80
    }]
  },
  options: {
    responsive: true,
    legend: {

      display: false,
      labels: {
        boxWidth: 12.5,
        fontColor: 'rgb(0, 0, 0)',
        fontSize: 8
      }
    },

    tooltips: {
      backgroundColor: 'rgba(255, 255, 255,1)',
      titleFontColor: '#000',
      titleFontStyle: 'normal',
      bodyFontColor: '#000',
      borderColor: 'rgba(18,83,164,0.5)',
      borderWidth: 1,
      bodySpacing: 15
    }
  }
});





});
/*

$(document).mouseup(function(e) {
    var $container = $(".week"),
        $container2 = $(".month"),
        $container3 = $(".year");

    // if the target of the click isn't the container nor a descendant of the container
    if (!$container.is(e.target) && $container.has(e.target).length === 0) {
        $container.removeClass("activee");
    }

    if (!$container2.is(e.target) && $container2.has(e.target).length === 0) {
        $container2.removeClass("activee");
    }

    if (!$container3.is(e.target) && $container3.has(e.target).length === 0) {
        $container3.removeClass("activee");
    }

});*/
