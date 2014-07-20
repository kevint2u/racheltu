var app = angular.module("racheltu", ['ui.router','shoppinpal.mobile-menu']).config(function() {

});

// routing logic
app.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/'); // default
    $stateProvider
    .state('home', {
        url: '/',
        templateUrl: 'html/home.html',
        controller: 'homeController'
    })
    .state('graphicDesign', {
        url: '/graphicdesign',
        templateUrl: 'html/graphicDesign.html',
        controller: 'graphicDesignController'
    })
    .state('mixedMedia', {
        url: '/mixedmedia',
        templateUrl: 'html/mixedMedia.html',
        controller: 'mixedMediaController'
    })
    .state('observational', {
        url: '/observational',
        templateUrl: 'html/observational.html',
        controller: 'obaservationalController'
    })
    .state('installation', {
        url: '/installation',
        templateUrl: 'html/installation.html',
        controller: 'installationController'
    })
    .state('resume', {
        url: '/resume',
        templateUrl: 'html/resume.html',
        controller: 'resumeController'
    })
    .state('about', {
        url: '/about',
        templateUrl: 'html/about.html',
        controller: 'aboutController'
    });
})

app.run(function($spMenu, $rootScope) {
    $("#menuButton").click(function(e) { e.stopPropagation();$spMenu.toggle();$("#menu-logo").attr("src","resources/R1.png");});
    $('.closeMenu').click(function(){$("#menu-logo").attr("src","resources/menubutton.png");});
    // var menuHoverEnter = function(){
    //     $("#menu-logo").attr("src","resources/R1.png");
    // }
    // var menuHoverLeave = function(){
    //     $("#menu-logo").attr("src","resources/menubutton.png");
    // }
    // $("#menuButton")
    //     .mouseenter(menuHoverEnter)
    //     .mouseleave(menuHoverLeave);
    $rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams) {
        if(toState.name == "home"){
            $('#content').css("margin-top","0px");
        }
        else{
            $('#content').css("margin-top","75px");
        }
    });
});

app.controller("racheltuController", function($scope){

});
app.controller("homeController", function($scope){
    
});
app.controller("graphicDesignController", function($scope){

});
app.controller("mixedMediaController", function($scope){

});
app.controller("obaservationalController", function($scope){

});
app.controller("installationController", function($scope){

});
app.controller("resumeController", function($scope){

});
app.controller("aboutController", function($scope){

});