
if (Meteor.isServer){
  Meteor.startup(function () {
  if (QuestionList.find().count() === 0) {
    var names = [
      ["What is a city that sounds like Natalie Portman's last name?",
      "portland"],
      ["Shake Shack lives in this park complete with ping pong tables",
      "madison square park"],
      ["Two words: Clinton Affair ",
      "monica lewinsky"],
      ["The American who wrote a book on the Spanish Civil War in 1940",
      "hemingway"],
      ["Two black detectives that wound up in Fargo",
      "key and peele"],
      ["Single-take movie that follows a shallow actor",
      "birdman"],

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
      ["The man was in a Bourne movie and shoots arrows in another.",
      "jeremy renner"],
      ["This superhero died in one movie, and lives in another superhero movie. Vague Hint: Previous answer",
      "quicksilver"],
      ["An indie feel-good movie with Steve Carrell",
      "little miss sunshine"],
      ["A movie featuring hemingway and a bunch of other expatriates",
      "midnight in paris"],
      ["_____, New York. Hint: PSH",
      "synecdoche"],
      ["A WW2 movie featuring the man from Cast Away",
      "saving private ryan"],
      ["If your life were a t.v show",
      "the truman show"],
      ["you're tearing me apart",
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

  if (QuestionList3.find().count() === 0) {
  names = [
      ["Don't overthink the think, overdo the __",
      "do"],
      ["What is the acronym for an all javascript stack?",
      "mean"],
      ["A surreal point and click adventure that follows a man and his dog",
      "kentucky route zero"],
      ["Brooklyn's favorite vegetable, hint: use Bing",
      "pizza"],
      ["Who will be the next president? hint: he's rich","donald trump"],
      ["A podcast that airs after Car Talk on NPR",
      "wait wait don't tell me"],
      ["The most popular *nix system",
      'osx'],
      ["He fought the world, and her exes",
      "scott pilgrim"]
    ];

    _.each(names, function (name) {
      QuestionList3.insert({
        question: name[0],
        answer: name[1]
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
  }
  });
}


