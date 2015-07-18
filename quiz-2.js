if (Meteor.isClient) {
  var currentIndex = 0;
  var myQuestions;
  var currentQuestion;
  var answer;
  var currentUser;

    Template.quiz2.rendered= function(){

      grabQuestionSet("Two");
  }

  Template.quiz2.events({

    'submit form': function(event, template){
      event.preventDefault();
      answer = event.target.text.value;
      currentUser = Meteor.userId();
      currentQuestion = myQuestions[currentIndex];

      var output=checkAnswer(answer, currentQuestion, myQuestions, template);

      currentIndex=output;
      currentQuestion=myQuestions[currentIndex];
      Session.set("nextQuestion", currentQuestion);

    },

    'click #startQuiz' : function(){
      myQuestions = grabQuestionSet("Two");
      currentIndex=0;
      Session.set("nextQuestion", myQuestions[0]);
      iterateQuestions(myQuestions);
    }
  });

  Template.quiz2.helpers({
    Question: function() {
      return Session.get("nextQuestion");
    }
  });
}

