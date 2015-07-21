
if (Meteor.isClient) {

    Template.quiz.rendered= function(){

      grabQuestionSet(Session.get("quizNumber"));
      loadCorrectNotifications();
      loadWrongNotifications();
      Session.set("questionNumber", 1);
      Session.set("quizStarted", false);
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
    },
    QuizNumber: function(){
      return Session.get("quizNumber");
    }

  });

  Template.quiz.events({

    'submit form': function(event, template){
      event.preventDefault();
      var answer = event.target.text.value;
      var currentQuestion = myQuestions[currentIndex];
      var output = checkAnswer(answer, currentQuestion, myQuestions, template);

      console.log(currentQuestion.question);
    },

    'click #startQuiz' : function(){
      //removes button and renders template
      startQuizAnimate();

      //loads questions
      myQuestions =grabQuestionSet(Session.get("quizNumber"));
      myCorrectNotifications =loadCorrectNotifications();
      myWrongNotifications=loadWrongNotifications();
      Session.set("notification", " ");

      currentIndex=0;
      initializeQuestions(myQuestions);
    },

    'click #back' : function(event){
      event.preventDefault();
      $('p').slideUp(function(){
        Router.go('/');
      });
    }
  })

  Template.quiz.startQuiz = function(){
    return Session.get("quizStarted");
  }



}




