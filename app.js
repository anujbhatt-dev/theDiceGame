/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

$(".rules").hide();
$(".rule__btn").click(function() {
  $(".rules").slideToggle();
});



var flag,currentScore,globalScore0,globalScore1,randomNum;

currentScore= 0;
globalScore0 = 0;
globalScore1 = 0;

flag=0;

function randomNumFunc() {
  let ranGenNum = Math.floor(Math.random()*6 + 1);
  // alert(flag);
  return ranGenNum;
}

$(".btn-roll").click(function() {
    randomNum = randomNumFunc();



  var  src = "dice-"+randomNum+".png";
    $(".dice").attr("src",src);
    $("#current-"+flag).text(currentScoreActive());

    if(randomNum==1){
      // alert("in");
      if(flag==1){flag=0;}
      else{flag=1;}
      $(".player-0-panel").toggleClass("active");
      $(".player-1-panel").toggleClass("active");
    }
});

function currentScoreActive(){
      currentScore = currentScore + randomNum;
      if(randomNum==1){
       currentScore = 0;
      return currentScore;
      }

      return currentScore;
}
$(".btn-new").click(function(){
  $(".player-score").text("0");
  $(".player-current-score").text("0");
  $("#name-0").text("PLAYER 1");
  $("#name-1").text("PLAYER 2");
  currentScore= 0;
  globalScore0 = 0;
  globalScore1 = 0;
  flag=0;
});

$(".btn-hold").click(function() {
  $("#current-"+flag).text("0");
  if(flag==0){
    globalScore0+= currentScore;
  $("#score-"+flag).text(globalScore0);

  if((globalScore0)>=100){
    $("#name-"+flag).text("🤴winner🤙")
  }
  }else{
    globalScore1+= currentScore;
    $("#score-"+flag).text(globalScore1);
    if((globalScore1)>=100){
      $("#name-"+flag).text("🤴winner🤙")
    }
  }


  currentScore = 0;
    if(flag==1){flag=0;}
    else{flag=1;}
    $(".player-0-panel").toggleClass("active");
    $(".player-1-panel").toggleClass("active");
});
