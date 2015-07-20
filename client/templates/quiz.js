
if (Meteor.isClient) {

    Template.quiz.rendered= function(){

      grabQuestionSet("One");
      Session.set("questionNumber", 1);
  }



  Template.quiz.helpers({
    Question: function() {
      return Session.get("nextQuestion");
    },
    Number: function(){
      return Session.get("questionNumber");
    }
  });

  Template.quiz.events({

    'submit form': function(event, template){
      event.preventDefault();
      var answer = event.target.text.value;
      var currentQuestion = myQuestions[currentIndex];
      var output = checkAnswer(answer, currentQuestion, myQuestions, template);

      // changeQuestion(output);
      currentIndex=output;
      currentQuestion=myQuestions[currentIndex];
      Session.set("questionNumber",currentIndex + 1);
      Session.set("nextQuestion", currentQuestion);

    },

    'click #startQuiz' : function(){
      //removes button and renders template
      startQuizAnimate();

      //loads questions
      myQuestions =grabQuestionSet("One");
      currentIndex=0;
      iterateQuestions(myQuestions);
      $(':input').focus();
    }
  })

  Template.quiz.startQuiz = function(){
    return Session.get("quizStarted");
  }


}




