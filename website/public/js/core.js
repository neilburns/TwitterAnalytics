var app = angular.module('expdemAnalytics', ['userService','tweetService','wordService',
	'expdemController','hashtagService','pascalprecht.translate'])

app.config(['$translateProvider', function($translateProvider) {
	$translateProvider
    .translations('es', {
      'DROPDOWN_PROYECTOS': 'Proyectos',
    })
    .translations('en', {
      'DROPDOWN_PROYECTOS': 'Projects',
    })
    .preferredLanguage('es');
}])