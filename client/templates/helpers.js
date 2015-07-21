var currentIndex=0;
var myQuestions;
var myCorrectNotifications;
var myWrongNotifications;

initializeQuestions = function(myQuestions){
    currentIndex=0;
    if(currentIndex===myQuestions.length){
      currentIndex = 0;
    }
    var currentQuestion= myQuestions[currentIndex];
    Session.set("nextQuestion",currentQuestion);
    console.log(currentQuestion);
  }

initializeCorrectResponses = function(myNotifications){
  var notification= myNotifications[0];
    Session.set("notification", notification);
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

loadCorrectNotifications = function(){
  Meteor.call("loadCorrectNotifications",function(error,result){
  if(error){
   console.warn("error getting notifications");
  }else{

    myCorrectNotifications = result;
  }
  });
    return myCorrectNotifications;
}

loadWrongNotifications=function(){
  Meteor.call("loadWrongNotifications",function(error,result){
  if(error){
   console.warn("error getting notifications");
  }else{

    myWrongNotifications = result;
  }
  });
    return myWrongNotifications;
}
