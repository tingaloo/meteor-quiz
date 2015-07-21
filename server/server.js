
if (Meteor.isServer){
  Meteor.startup(function () {
  if (QuestionList.find().count() === 0) {
    var names = [
      ["What is a city that sounds like Natalie Portman's last name?",
      "portland"],
      ["Shake Shack lives in this park complete with ping pong tables",
      "madison square park"],
      ["Before Reddit, there was _____ ",
      "digg"],
      ["An American who served on an ambulance during the Spanish Civil War",
      "hemingway"],
      ["Two black detectives that wind up in Fargo",
      "key and peele"],
      ["Single-take movie starring a superhero",
      "birdman"]

    ];

    _.each(names, function (name) {
      QuestionList.insert({
        question: name[0],
        answer: name[1]
      });
    });
  }

  if (QuestionList2.find().count() === 0) {
  names = [
      ["ACTOR: The man can both defuse bombs and fire arrows",
      "jeremy renner"],
      ["CHARACTER: This man died in one movie, and lives in another superhero movie. Vague Hint: Previous answer",
      "quicksilver"],
      ["An indie feel-good movie with Steve Carrell",
      "little miss sunshine"],
      ["A movie featuring hemingway and a bunch of other expatriates",
      "midnight in paris"],
      ["_____, New York. Hint: PSH",
      "synecdoche"],
      ["A war movie featuring the man from Cast Away",
      "saving private ryan"],
      ["If your life were a t.v show",
      "the truman show"],
      ["lisa, you're tearing me apart",
      "the room"],
      ["You can bring me the boy. You can bring me the boy. You can bring me the boy.",
      "babadook"],
      ["'You said it yourself bitch, we're the ________",
      "guardians of the galaxy"],
      ["A rom-com featuring everybody's favorite neurotic director",
      "annie hall"]
    ];

    _.each(names, function (name) {
      QuestionList2.insert({
        question: name[0],
        answer: name[1]
      });
    });
  }

  //Load response list.
  if (CorrectNotifications.find().count() === 0) {
  var responses = [
      ["Correct!"],
      ["Nice!"],
      ["Right!"],
      ["Close enough!"],
      ["Got em!"],
      ["Yup!"],
      ["Yah!"],
      ["Mhm"],
      ["You go girl!"],
      ["slammin"]
    ];

    _.each(responses, function (response) {
      CorrectNotifications.insert({
        response: response[0]
      });
    });
  }

  if (WrongNotifications.find().count() === 0) {
    responses = [
      ["Damn."],
      ["Keep at em!"],
      ["Turn Right!"],
      ["Doh!"],
      ["Ha! Goteeeem"],
      ["Mmm..nah"],
      ["Nope"],
      ["Close, but no cigar"],
      ["yada yada yada"],
      ["not smooth"],
      ["heh"],
      ["woops"],
      ["no rush"],
      ["here's a hint, and not."]
    ];

    _.each(responses, function (response) {
      WrongNotifications.insert({
        response: response[0]
      });
    });
  }

});

  Meteor.methods({
  "getQuestionSetOne":function(){
    return QuestionList.find().fetch();
  },
  "getQuestionSetTwo":function(){
    return QuestionList2.find().fetch();
  },
  "loadCorrectNotifications":function(){
    return CorrectNotifications.find().fetch();
  },
  "loadWrongNotifications":function(){
    return WrongNotifications.find().fetch();
  }
  });
}


