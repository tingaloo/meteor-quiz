Router.configure({
    layoutTemplate: 'main'
});
Router.route('/register');
Router.route('/login');
Router.route('/quiz', function(){
  Session.set('quizNumber', 'One');
  this.render('quiz');
});
Router.route('/quiz2', function () {
  Session.set('quizNumber', 'Two');
  this.render('quiz');
});
Router.route('/quiz3', function(){
  Session.set('quizNumber', 'Three');
  this.render('quiz');
});
Router.route('/', {
  name: 'home',
  template: 'home'
});

Router.onBeforeAction(function(){
  // $('li').slideUp();
  this.next();
});
