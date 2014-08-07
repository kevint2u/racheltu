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
        ngDialog.open({ 
            template: 'html/popup.html', 
            controller: 'popupController', 
            className: 'ngdialog-theme-default', 
            scope: $rootScope});
    };
    $rootScope.descriptions = {

        "graphicdesign1.jpg":{
            "title":"Fish",
            "description":"Filler Text Goes Here"
        },
        "graphicdesign2.jpg":{
            "title":"Project Runway",
            "description":"Filler Text Goes Here"
        },
        "graphicdesign3.jpg":{
            "title":"Watercolors",
            "description":"Filler Text Goes Here"
        },
        "graphicdesign4.jpg":{
            "title":"Ladder",
            "description":"Filler Text Goes Here"
        },
        "graphicdesign5.jpg":{
            "title":"Dreamcatcher",
            "description":"Filler Text Goes Here"
        },
        "graphicdesign6-1.jpg":{
            "title":"Flowers By Tulips",
            "description":"Filler Text Goes Here"
        },
        "graphicdesign6-2.jpg":{
            "title":"Flowers By Tulips",
            "description":"Filler Text Goes Here"
        },
        "graphicdesign6-3.jpg":{
            "title":"Flowers By Tulips",
            "description":"Filler Text Goes Here"
        },
        "graphicdesign6-4.jpg":{
            "title":"Flowers By Tulips",
            "description":"Filler Text Goes Here"
        },
        "graphicdesign7.jpg":{
            "title":"Blindfold",
            "description":"Filler Text Goes Here"
        },
        "graphicdesign8.jpg":{
            "title":"Faces",
            "description":"Filler Text Goes Here"
        },



        "observational1.jpg":{
            "title":"Naked Woman 1",
            "description":"Filler Text Goes Here"
        },
        "observational2.jpg":{
            "title":"Naked Woman 2",
            "description":"Filler Text Goes Here"
        },
        "observational3.jpg":{
            "title":"Naked Woman 3",
            "description":"Filler Text Goes Here"
        },
        "observational4.jpg":{
            "title":"Naked Woman 4",
            "description":"Filler Text Goes Here"
        },
        "observational5.jpg":{
            "title":"Naked Woman 5",
            "description":"Filler Text Goes Here"
        },
        "observational6.jpg":{
            "title":"Naked Woman 6",
            "description":"Filler Text Goes Here"
        },
        "observational7.jpg":{
            "title":"Naked Woman 7",
            "description":"Filler Text Goes Here"
        },
        "observational8.jpg":{
            "title":"Naked Woman 8",
            "description":"Filler Text Goes Here"
        },
        "observational9.jpg":{
            "title":"Naked Woman 9",
            "description":"Filler Text Goes Here"
        },




        "twodimensional1.jpg":{
            "title":"twodimensional1",
            "description":"Filler Text Goes Here"
        },
        "twodimensional2.jpg":{
            "title":"twodimensional2",
            "description":"Filler Text Goes Here"
        },
        "twodimensional3.jpg":{
            "title":"twodimensional3",
            "description":"Filler Text Goes Here"
        },
        "twodimensional4-1.jpg":{
            "title":"twodimensional4-1",
            "description":"Filler Text Goes Here"
        },
        "twodimensional4-2.jpg":{
            "title":"twodimensional4-2",
            "description":"Filler Text Goes Here"
        },
        "twodimensional5.jpg":{
            "title":"twodimensional5",
            "description":"Filler Text Goes Here"
        },
        "twodimensional6.jpg":{
            "title":"twodimensional6",
            "description":"Filler Text Goes Here"
        },
        "twodimensional7.jpg":{
            "title":"twodimensional7",
            "description":"Filler Text Goes Here"
        },
        "twodimensional8.gif":{
            "title":"twodimensional8",
            "description":"Filler Text Goes Here"
        },
        "twodimensional9.jpg":{
            "title":"twodimensional9",
            "description":"Filler Text Goes Here"
        },
        "twodimensional10.jpg":{
            "title":"twodimensional10",
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
        },


        "installation1-1.jpg":{
            "title":"installation1-1",
            "description":"Filler Text Goes Here"
        },
        "installation1-2.jpg":{
            "title":"installation1-2",
            "description":"Filler Text Goes Here"
        },
        "installation2.jpg":{
            "title":"installation2",
            "description":"Filler Text Goes Here"
        },
        "installation3.jpg":{
            "title":"installation3",
            "description":"Filler Text Goes Here"
        },
        "installation4.jpg":{
            "title":"installation4",
            "description":"Filler Text Goes Here"
        },
        "installation5.jpg":{
            "title":"installation5",
            "description":"Filler Text Goes Here"
        },
        "installation6-1.jpg":{
            "title":"installation6-1",
            "description":"Filler Text Goes Here"
        },
        "installation6-2.jpg":{
            "title":"installation6-2",
            "description":"Filler Text Goes Here"
        },
        "installation1.jpg":{
            "title":"installation1",
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
    this.setup2img2acrossRow = function(){
        var row_height = parseInt($('.row-2img-2across').css("width"))*0.5/2;
        $('.row-2img-2across-image').css("height", row_height-1);
        $('.row-2img-2across-image').css("width", row_height-1);
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
    gridSetupService.setup3img1big2smallRow();
    gridSetupService.setup3img3acrossRow();
    gridSetupService.setup2img2acrossRow();
    gridSetupService.setupOverlayHeights();
});
app.controller("observationalController", function($scope, gridSetupService, ngDialog){
    gridSetupService.setup3img1big2smallRow();
    gridSetupService.setup3img3acrossRow();
    gridSetupService.setupOverlayHeights();
});
app.controller("installationController", function($scope, gridSetupService, ngDialog){
    gridSetupService.setup3img1big2smallRow();
    gridSetupService.setup3img3acrossRow();
    gridSetupService.setupOverlayHeights();
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
    gridSetupService.setup3img1big2smallRow();
    gridSetupService.setup3img3acrossRow();
    gridSetupService.setupOverlayHeights();
});
app.controller('popupController', function ($scope, ngDialog) {
    
});