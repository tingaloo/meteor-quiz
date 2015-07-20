var currentIndex=0;
var myQuestions;

initializeQuestions = function(myQuestions){
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

