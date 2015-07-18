// server side

if (Meteor.isServer){
  Meteor.startup(function () {
  if (QuestionList.find().count() === 0) {
    var names = [
      ["What is a city that sounds like Natalie Portman's last name?",
      "portland"],
      ["What is the New York park that starts with a P",
      "prospect park"],
      ["Who was the woman back in 1998 who had it going on? ",
      "stacy's mom"],
      ["The American who wrote a book on the Spanish Civil War in 1940",
      "hemingway"],
      ["Two black detectives that wound up in Fargo",
      "key and peele"]
    ];

    _.each(names, function (name) {
      QuestionList.insert({
        question: name[0],
        answer: name[1]
      });
    });
  }

  if (QuestionList2.find().count() === 0) {
  var names2 = [
      ["The man was in a Bourne movie and shoots arrows in another.",
      "jeremy renner"],
      ["This superhero died in one movie, and lives in another superhero movie. Vague Hint: Previous answer",
      "quicksilver"],
      ["An indie feel-good movie with Steve Carrell",
      "little miss sunshine"],
      ["A movie featuring hemingway and a bunch of other playwrights",
      "midnight in paris"],
      ["The man finds the true meaning of love in the depths of space and time",
      "matthew mcconaughy"]
    ];

    _.each(names2, function (name) {
      QuestionList2.insert({
        question: name[0],
        answer: name[1]
      });
    });
  }
});
