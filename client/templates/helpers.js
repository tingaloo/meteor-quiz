var currentIndex=0;
var myQuestions;

iterateQuestions = function(myQuestions){
    currentIndex=0;
    if(currentIndex===myQuestions.length){
      currentIndex = 0;
    }
    var currentQuestion= myQuestions[currentIndex];
    Session.set("nextQuestion",currentQuestion);
    console.log(currentQuestion);
  }

  gameOver = function(){
    // alert("congrats, you can go back to work or try the next quiz!");
    Router.go('home');
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


      //animates next question
      nextQuestionAnimate(currentIndex);
      changeQuestion(currentIndex);
      return currentIndex;
      //return "correct"
    } else {

      answerAnimate("incorrect");
      template.find("form").reset();
      return currentIndex;
      // return "incorrect"
    }
  }

  grabQuestionSet = function(number){
      Meteor.call("getQuestionSet"+number,function(error,result){
    if(error){
     console.warn("error getting names!");
    }else{
      myQuestions = result;
    }
    });
      return myQuestions;
}

changeQuestion = function(num){
  currentIndex=num;
  currentQuestion=myQuestions[currentIndex];
  Session.set("questionNumber",currentIndex + 1);
  Session.set("nextQuestion", currentQuestion);
}
