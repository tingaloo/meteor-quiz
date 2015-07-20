startQuizAnimate = function(){
    $("#startQuiz").animate({
        opacity:0,
        boxShadow: '0 0 100px #00FF00'
      },500,"linear",function() {
          $(this).toggle('fast');
          //quiz template shows after animation finishes
          Session.set("quizStarted", true);
          Tracker.afterFlush(function(){
    $('.answerBox').focus();
  });
        }
      );
  }


answerAnimate = function(correct){

    if (correct=="correct"){
      console.log("animate correct");
      $(":input").animate({
        boxShadow: '0 0 30px #00FF00'
      },200,"linear",function()
        {
          $(this).animate({
            boxShadow: '0 0 0px #00FF00'
          },200,"linear");

        }
      );
    }
    else if (correct=="incorrect"){
      console.log("animate incorrect");
      $(":input").animate({
        // opacity:0,
        boxShadow: '0 0 30px #FF0000'
      },200,"linear",function()
        {
          $(this).animate({
            // opacity:1
            boxShadow: '0 0 0px #FF0000'
          },200,"linear");

        }
      );
    }
  }

nextQuestionAnimate = function(num){
  $('h2').slideUp("300",function() {
    $('h2').fadeIn();
  });
  $('p').slideUp("300", function() {
    $('p').fadeIn();
  });

}
