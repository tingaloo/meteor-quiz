

Router.configure({
    layoutTemplate: 'main'
});

QuestionList = new Mongo.Collection("questionlist");



if (Meteor.isClient) {
  // counter starts at 0
  Session.setDefault('counter', 0);

  Template.home.helpers({
    counter: function () {
      return Session.get('counter');
    }
  });

  Template.home.events({
    'click button': function () {
      // increment the counter when button is clicked
      Session.set('counter', Session.get('counter') + 1);
    }
  });

  Template.register.events({
    'submit form': function(event) {
      event.preventDefault();
      var email= $('[name=email]').val();
      var password = $('[name=password]').val();
      Accounts.createUser({
            email: email,
            password: password
        }, function(error){
          if (error){
            console.log(error.reason);
          } else {
            Router.go('home');
          }
        });
    }
  });

  Template.login.events({
    'submit form': function(event) {
      event.preventDefault();
      var email= $('[name=email]').val();
      var password = $('[name=password]').val();
      Meteor.loginWithPassword(email, password, function(error){
        if (error){
          console.log(error.reason);
        } else {
          Router.go("home");
        }
      });
    }
  });

  //   Template.quiz.rendered= function(){

  // }

  Template.quiz.helpers({
    Question: function() {
      return Session.get("nextQuestion");
      // return QuestionList.find();
    }

    // questions: function () {
    //   return QuestionList.find();
    // }
  });

  var currentIndex = 0;
  var myQuestions;

  Template.quiz.events({

    'submit form': function(event){
      event.preventDefault();
      currentIndex++;
      var answer = event.target.text.value;
      var currentUser = Meteor.userId();

      // load data once
      if(!myQuestions){
        myQuestions = QuestionList.find({}).fetch();
      }
      if(currentIndex===myQuestions.length){
        currentIndex=0;
      }
      var currentQuestion = myQuestions[currentIndex];
      Session.set("nextQuestion", currentQuestion);
    }

    // 'click #startQuiz' : function(){
    //   Session.set("nextQuestion, ")
    // }
  })


  Template.navigation.events({
    'click .logout': function(event){
      event.preventDefault();
      Meteor.logout();
      Router.go('login');
    }
  })
}

if (Meteor.isServer){
  Meteor.startup(function () {
  if (QuestionList.find().count() === 0) {
    var names = [
      ["What is a city that sounds like Natalie Portman's last name?",
      "portland"],
      ["What is the New York park that starts with a P",
      "prospect park"]
    ];

    _.each(names, function (name) {
      QuestionList.insert({
        question: name[0],
        answer: name[1]
      });
    });
  }
});
}


Router.route('/register');
Router.route('/login');
Router.route('/quiz');
Router.route('/', {
  name: 'home',
  template: 'home'
});


