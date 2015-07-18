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
    alert("congrats, you can go back to work or try the next quiz!");
    Router.go('home');
  }

  checkAnswer = function(answer, currentQuestion, myQuestions, template){

    if (answer.toLowerCase()==currentQuestion.answer){
      console.log(currentIndex);
      console.log(myQuestions.length-1);
      if (currentIndex===myQuestions.length-1) {
        console.log("GAME OVER");
        gameOver();
      }
      currentIndex++;
      template.find("form").reset();
      return currentIndex;
    } else {
      console.log("try again");
      return currentIndex;
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
