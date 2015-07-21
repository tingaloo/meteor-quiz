wrongAnswerNotification = function(){
  $('.notification > p').fadeIn();
      Session.set("notification", myWrongNotifications[Math.floor(Math.random() * myWrongNotifications.length)]);
      Tracker.afterFlush(function(){

      $('.notification > p').fadeOut(function(){
        Session.set("notification", " ");
        $('.notification > p').fadeIn();
      });

      });
}
