require.config({
	paths: {
		jquery: 'lib/jquery-min',
		underscore: 'lib/underscore-min',
		backbone: 'lib/backbone-optamd3-min'
	}
});


require(['views/app','backbone'], function(AppView, Backbone){
	var appView =  new AppView;
	appView.render();

	var AppRouter = Backbone.Router.extend({
		routes: {
			'landing': 'landing',
			'about': 'about',
			'': 'default'
		},

		about: function() {
			getPage('/about', Backbone);
		},

		landing: function() {
			getPage('/', Backbone);
		},

		default: function() {

		}
	});

	var appRouter = new AppRouter();
	Backbone.history.start();

}); 


require([
	'../jsdust/landing',
	'views/landing',
	'../jsdust/about',
	'views/about',
	], function(){
	// do nothing.
});

