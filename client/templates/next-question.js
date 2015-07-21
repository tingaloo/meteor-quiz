
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

  checkAnswer = function(answer, currentQuestion, myQuestions, template){

    if (answer.toLowerCase()==currentQuestion.answer){

      //if last question, game over screen
      if (currentIndex===myQuestions.length-1) {
        gameOver();
      }
      currentIndex++;
      template.find("form").reset();


      //green box hover
      answerAnimate("correct");

      nextQuestion(currentIndex);

      return "right";
      //return "correct"
    } else {

      answerAnimate("incorrect");
      template.find("form").reset();
      return "wrong";
      // return "incorrect"
    }
  }
  var $newcircle = '<span class="circle"></span>';

nextQuestion = function(num){
  Session.set("notification", myCorrectNotifications[Math.floor(Math.random() * myCorrectNotifications.length)]);
  $('.question-header').slideUp("300", function(){
    $('.notification').toggle();
  });

  $('.question').slideUp("300", function() {

    currentIndex=num;
    currentQuestion=myQuestions[currentIndex];
    Session.set("questionNumber",currentIndex + 1);
    Session.set("nextQuestion", currentQuestion);


      Session.set("notification", " ");
    $('.progress-bar').append($newcircle);
    $('p').fadeIn();
    $('h2').fadeIn();
  });
}
