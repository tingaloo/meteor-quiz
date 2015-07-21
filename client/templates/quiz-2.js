if (Meteor.isClient) {
  // var currentIndex = 0;


    Template.quiz2.rendered= function(){

      grabQuestionSet("Two");
      loadCorrectNotifications();
      loadWrongNotifications();
      Session.set("questionNumber", 1);
  }

  Template.quiz2.helpers({
    Question: function() {
      return Session.get("nextQuestion");
    },
    Number: function(){
      return Session.get("questionNumber");
    },
    Notification: function(){
      return Session.get("notification");
    }
  });

  Template.quiz2.events({

    'submit form': function(event, template){
      event.preventDefault();
      var answer = event.target.text.value;
      var currentQuestion = myQuestions[currentIndex];
      var output = checkAnswer(answer, currentQuestion, myQuestions, template);

    },

    'click #startQuiz' : function(){

      startQuizAnimate();

      myQuestions =grabQuestionSet("Two");
      myCorrectNotifications =loadCorrectNotifications();
      myWrongNotifications=loadWrongNotifications();
      Session.set("notification", " ");

      currentIndex=0;
          initializeQuestions(myQuestions);
    }



  });



  Template.quiz2.startQuiz = function(){
    return Session.get("quizStarted");
  }
}

