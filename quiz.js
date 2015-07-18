

Router.configure({
    layoutTemplate: 'main'
});



if (Meteor.isClient) {

    Template.quiz.rendered= function(){

      grabQuestionSet("One");
  }



  Template.quiz.helpers({
    Question: function() {
      return Session.get("nextQuestion");
    }
  });

  Template.quiz.events({

    'submit form': function(event, template){
      event.preventDefault();
      var answer = event.target.text.value;
      var currentUser = Meteor.userId();
      var currentQuestion = myQuestions[currentIndex];

      var output=checkAnswer(answer, currentQuestion, myQuestions, template);

      currentIndex=output;
      currentQuestion=myQuestions[currentIndex];
      Session.set("nextQuestion", currentQuestion);

    },

    'click #startQuiz' : function(){
      myQuestions =grabQuestionSet("One");
      currentIndex=0;
      iterateQuestions(myQuestions);
    }
  })
}
Router.route('/register');
Router.route('/login');
Router.route('/quiz');
Router.route('/quiz2');
Router.route('/quiz3');
Router.route('/', {
  name: 'home',
  template: 'home'
});





