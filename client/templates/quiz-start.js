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

