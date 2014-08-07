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
    .state('twoDimensional', {
        url: '/twodimensional',
        templateUrl: 'html/twodimensional.html',
        controller: 'twoDimensionalController'
    })
    .state('threeDimensional', {
        url: '/threedimensional',
        templateUrl: 'html/threedimensional.html',
        controller: 'threeDimensionalController'
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

app.run(function($spMenu, $rootScope, $state, $window, ngDialog) {
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
        if(toState.name == "home" || toState.name == "resume" || toState.name == "about"){
            $('#content').css("margin-top","0px");
        }
        else{
            $('#content').css("margin-top","75px");
        }
    });
    $rootScope.goHome = function(){
        $state.go('home');
    };
    $rootScope.clickToOpen = function (group, pictures) {
        $rootScope.group = group;
        $rootScope.pictures = {}
        for (var index in pictures){
            var picture = pictures[index];
            $rootScope.pictures[picture] = {
                "src":picture,
                "title":$rootScope.descriptions[picture]['title'],
                "description":$rootScope.descriptions[picture]['description']
            }
        }
        // $rootScope.picture = picture;
        // $rootScope.title = $rootScope.descriptions[picture]['title']
        // $rootScope.description = $rootScope.descriptions[picture]['description']
        ngDialog.open({ 
            template: 'html/popup.html', 
            controller: 'popupController', 
            className: 'ngdialog-theme-default', 
            scope: $rootScope});
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
        },


        "threedimensional1-1.jpg":{
            "title":"Fetus",
            "description":"Filler Text Goes Here"
        },
        "threedimensional1-2.jpg":{
            "title":"Fetus 2",
            "description":"Filler Text Goes Here"
        },
        "threedimensional2.jpg":{
            "title":"Branching Out",
            "description":"Filler Text Goes Here"
        },
        "threedimensional3.jpg":{
            "title":"Tic Tac Toe",
            "description":"Filler Text Goes Here"
        },
        "threedimensional4.jpg":{
            "title":"Angles and Light",
            "description":"Filler Text Goes Here"
        },
        "threedimensional5-1.jpg":{
            "title":"Man vs. Nature",
            "description":"Filler Text Goes Here"
        },
        "threedimensional5-2.jpg":{
            "title":"Man vs. Nature 2",
            "description":"Filler Text Goes Here"
        },
        "threedimensional6.jpg":{
            "title":"Skewer",
            "description":"Filler Text Goes Here"
        },
        "threedimensional7-1.jpg":{
            "title":"Wearable Fashion",
            "description":"Filler Text Goes Here"
        },
        "threedimensional7-2.jpg":{
            "title":"Wearable Fashion",
            "description":"Filler Text Goes Here"
        },
        "threedimensional7-3.jpg":{
            "title":"Wearable Fashion",
            "description":"Filler Text Goes Here"
        },
        "threedimensional7-4.jpg":{
            "title":"Wearable Fashion",
            "description":"Filler Text Goes Here"
        },
        "threedimensional7-5.jpg":{
            "title":"Wearable Fashion",
            "description":"Filler Text Goes Here"
        }
    }
});
app.service('gridSetupService', function () { 
    this.setup3img1big2smallRow = function(){
        var row_height = parseInt($('.row-3img-1big-2small-left').css("width"))*0.5/2;
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
        var row_height = parseInt($('.row-3img-3across').css("width"))*0.5/3;
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
    // function blink(selector){
    //     $('#menuButton').fadeOut('slow', function(){
    //         $(this).fadeIn('slow', function(){
    //             blink(this);
    //         });
    //     });
    // }
    // blink('#menuButton');
});
app.controller("graphicDesignController", function($scope, gridSetupService, ngDialog){

});
app.controller("observationalController", function($scope, gridSetupService, ngDialog){
    gridSetupService.setup3img1big2smallRow();
    gridSetupService.setup3img3acrossRow();
    gridSetupService.setupOverlayHeights();
});
app.controller("installationController", function($scope, gridSetupService, ngDialog){

});
app.controller("resumeController", function($scope){

});
app.controller("aboutController", function($scope){

});
app.controller("threeDimensionalController", function($scope, gridSetupService, ngDialog){
    gridSetupService.setup3img1big2smallRow();
    gridSetupService.setup3img3acrossRow();
    gridSetupService.setupOverlayHeights();
});
app.controller("twoDimensionalController", function($scope, gridSetupService, ngDialog){

});
app.controller('popupController', function ($scope, ngDialog) {
    
});