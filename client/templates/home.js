
if (Meteor.isClient) {

 Template.home.events({
'click a' : function(event){
  // event.preventDefault();

    Session.set("quizStarted", false);
    return true;
  }
  })

 Template.home.rendered = function(){
  // $('li').slideDown();
 }



}
