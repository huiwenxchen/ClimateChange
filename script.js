// javascript for the quiz page
// (".")
 $(".darkmode").click(function(){
    $("body").css("background-color","#181818");
    });


$(".darkmode").dblclick(function(){
    $("body").css("background-color","#F0FFEE");
    });

$(".Restart").click(function(){
    window. location. reload();
});

var userInput = new Array();
var answers = ["B","E","A","D","D","A","B","A","D","B"]
    tot = answers.length;

function checkAnswer( radioName ){
    var radios = document.getElementsByName( radioName ); // Get radio group by-name
    for(var y=0; y<radios.length; y++)
      if(radios[y].checked) return radios[y].value; // return the checked value
}

function getScore(){
  
  var score = 0;
  for (var i=0; i<tot; i++)
    if(checkAnswer("question"+i)===answers[i]) score += 1; // increment only
  return score;

    
}

function returnScore(){
  alert("Thank you for completing this quiz! Your score is "+ getScore() +"/"+tot);
}
