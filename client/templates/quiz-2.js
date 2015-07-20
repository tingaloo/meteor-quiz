if (Meteor.isClient) {
  var currentIndex = 0;
  var myQuestions;
  var currentQuestion;
  var answer;
  var currentUser;

    Template.quiz2.rendered= function(){

      grabQuestionSet("Two");
      Session.set("questionNumber", 1);
  }

  Template.quiz2.helpers({
    Question: function() {
      return Session.get("nextQuestion");
    },
    Number: function(){
      return Session.get("questionNumber");
    }
  });

  Template.quiz2.events({

    'submit form': function(event, template){
      event.preventDefault();
      answer = event.target.text.value;
      currentUser = Meteor.userId();
      currentQuestion = myQuestions[currentIndex];

      var output=checkAnswer(answer, currentQuestion, myQuestions, template);

      currentIndex=output;
      currentQuestion=myQuestions[currentIndex];
      Session.set("questionNumber",currentIndex + 1);
      Session.set("nextQuestion", currentQuestion);
    },

    'click #startQuiz' : function(){

      startQuizAnimate();

      myQuestions =grabQuestionSet("Two");
          currentIndex=0;
          iterateQuestions(myQuestions);
    },

    'click a' : function(event){
      event.preventDefault();
      console.log("quiz paused");
      Session.set("quizStarted", false);
    }



  });



  Template.quiz2.startQuiz = function(){
    return Session.get("quizStarted");
  }
}

