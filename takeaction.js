// $(".communityinvolvement").hide();
$(".civicengagement").hide();
$(".individualaction").hide();
$(".communityinvolvement").hide();

  let displayCategory;

$(".select-category").on("click", selectCategory);

function selectCategory() {
    let category = $("input").val();

    if (category === "Civic Engagement" ){
      $(".civicengagement").fadeIn();
        $(".communityinvolvement").hide();
        $(".individual").hide();
        $(".actionitems").css("background-color", "#B0CC99");
    }

    else if (category === "Individual Action")
    {
      $(".individualaction").fadeIn();
        $(".civicengagement").hide();
        $(".communityinvolvement").hide();
        $(".actionitems").css("background-color", "#B0CC99");
    }

    else if (category === "Community Involvement")
    {
      $(".communityinvolvement").fadeIn();
        $(".civicengagement").hide();
        $(".individualaction").hide();
        $(".actionitems").css("background-color", "#B0CC99");
    }

    else {
      window. location. reload();;
   
    }
    }
    
    console.log(selectCategory);
    console.log(displayCategory);
    
    $(".darkmode").click(function(){
      $("body").css("background-color","#181818");
    });

     $(".darkmode").dblclick(function(){
      $("body").css("background-color","#F0FFEE");
    });

