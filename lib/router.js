Router.configure({
    layoutTemplate: 'main'
});
Router.route('/register');
Router.route('/login');
Router.route('/quiz');
Router.route('/quiz2');
Router.route('/quiz3');
Router.route('/', {
  name: 'home',
  template: 'home'
});
