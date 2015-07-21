
if (Meteor.isClient) {

    Template.quiz.rendered= function(){

      grabQuestionSet("One");
      loadCorrectNotifications();
      Session.set("questionNumber", 1);
  }



  Template.quiz.helpers({
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

  Template.quiz.events({

    'submit form': function(event, template){
      event.preventDefault();
      var answer = event.target.text.value;
      var currentQuestion = myQuestions[currentIndex];
      var output = checkAnswer(answer, currentQuestion, myQuestions, template);

      Session.set("answerSubmitted", true);
      // $('.notification').slideUp("300");
      // Session.set("answerSubmitted", false);
      console.log(currentQuestion.question);
    },

    'click #startQuiz' : function(){
      //removes button and renders template
      startQuizAnimate();

      //loads questions
      myQuestions =grabQuestionSet("One");
      myCorrectNotifications =loadCorrectNotifications();
      Session.set("notification", " ");

    //   var correctNotification= myNotifications[0];
    // Session.set("notification",correctNotification.response);
    // initializeCorrectResponses(myNotifications);
      currentIndex=0;
      initializeQuestions(myQuestions);
    }
  })

  Template.quiz.startQuiz = function(){
    return Session.get("quizStarted");
  }



}




