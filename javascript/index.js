var app = angular.module("racheltu", ['ui.router','shoppinpal.mobile-menu','ngDialog']).config(function() {

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
        controller: 'observationalController'
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

app.run(function($spMenu, $rootScope, $state, $window) {
    $("#menuButton").click(function(e) { 
        e.stopPropagation();
        $spMenu.toggle();
        if($("#menu-logo").attr("src") != "resources/R1.png"){
            $("#menu-logo").attr("src","resources/R1.png");
        } else {
            $("#menu-logo").attr("src","resources/menu-straight-01.png");
        }
    });
    $('.closeMenu').click(function(){$("#menu-logo").attr("src","resources/menu-straight-01.png");});

    $rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams) {
        if(toState.name == "home"){
            $('#content').css("margin-top","0px");
        }
        else{
            $('#content').css("margin-top","75px");
        }
    });
    $rootScope.goHome = function(){
        $state.go('home');
    };
    $rootScope.descriptions = {
        "observational1.png":{
            "title":"Naked Woman 1",
            "description":"Filler Text Goes Here"
        },
        "observational2.png":{
            "title":"Naked Woman 2",
            "description":"Filler Text Goes Here"
        },
        "observational3.png":{
            "title":"Naked Woman 3",
            "description":"Filler Text Goes Here"
        },
        "observational4.png":{
            "title":"Naked Woman 4",
            "description":"Filler Text Goes Here"
        },
        "observational5.png":{
            "title":"Naked Woman 5",
            "description":"Filler Text Goes Here"
        },
        "observational6.png":{
            "title":"Naked Woman 6",
            "description":"Filler Text Goes Here"
        }
    }
});
app.service('gridSetupService', function () { 
    this.setup3img1big2smallRow = function(){
        var row_height = parseInt($('.row-3img-1big-2small-left').css("width"))*0.75/2;
        // set container sizes
        $('.row-3img-1big-2small-left').css("height", row_height);
        $('.row-3img-1big-2small-right').css("height", row_height);
        $('.row-3img-1big-2small-right-top').css("height", row_height/2);
        $('.row-3img-1big-2small-right-bottom').css("height", row_height/2);
        // set image sizes
        $('.row-3img-1big-2small-left-image').css("height", row_height);
        $('.row-3img-1big-2small-left-image').css("width", row_height);
        $('.row-3img-1big-2small-right-top-image').css("height", row_height/2);
        $('.row-3img-1big-2small-right-top-image').css("width", row_height);
        $('.row-3img-1big-2small-right-bottom-image').css("height", row_height/2);
        $('.row-3img-1big-2small-right-bottom-image').css("width", row_height);
    },
    this.setup3img3acrossRow = function(){
        var row_height = parseInt($('.row-3img-3across').css("width"))*0.75/3;
        $('.row-3img-3across-image').css("height", row_height-1);
        $('.row-3img-3across-image').css("width", row_height-1);
    },
    this.setupOverlayHeights = function(){
        $('.overlay').each(function(){
            var div_height = $(this).parent('div').height();
            $(this).css('lineHeight', div_height + "px");
        });
    }
});
app.controller("racheltuController", function($scope){

});
app.controller("homeController", function($scope){
    
});
app.controller("graphicDesignController", function($scope){

});
app.controller("mixedMediaController", function($scope){

});
app.controller("observationalController", function($scope, gridSetupService, ngDialog){
    gridSetupService.setup3img1big2smallRow();
    gridSetupService.setup3img3acrossRow();
    gridSetupService.setupOverlayHeights();
    $scope.clickToOpen = function (picture) {
        $scope.picture = picture;
        $scope.title = $scope.descriptions[picture]['title']
        $scope.description = $scope.descriptions[picture]['description']
        ngDialog.open({ 
            template: 'html/popup.html', 
            controller: 'popupController', 
            className: 'ngdialog-theme-default', 
            scope: $scope});
    };
});
app.controller("installationController", function($scope){

});
app.controller("resumeController", function($scope){

});
app.controller("aboutController", function($scope){

});
app.controller('popupController', function ($scope, ngDialog) {
    
});