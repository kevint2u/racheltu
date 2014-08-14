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
    .state('digitalArt', {
        url: '/digitalArt',
        templateUrl: 'html/digitalArt.html',
        controller: 'digitalArtController'
    })
    .state('studioArt', {
        url: '/studioArt',
        templateUrl: 'html/studioArt.html',
        controller: 'studioArtController'
    })
    .state('mixedMedia', {
        url: '/mixedMedia',
        templateUrl: 'html/mixedMedia.html',
        controller: 'mixedMediaController'
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

app.run(function($spMenu, $rootScope, $state, $window, ngDialog, gridSetupService) {
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
        // change background to fill entire page for certain states
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
                "description":$rootScope.descriptions[picture]['description'],
                "orientation":$rootScope.descriptions[picture]['orientation']
            }
        }
        ngDialog.open({ 
            template: 'html/popup.html', 
            controller: 'popupController', 
            className: 'ngdialog-theme-default', 
            scope: $rootScope});
    };
    $rootScope.descriptions = {

        "digitalart1.jpg":{
            "title":"digitalart1",
            "description":"Filler Text Goes Here",
            "orientation":"vertical"
        },
        "digitalart2-1.jpg":{
            "title":"digitalart2",
            "description":"Filler Text Goes Here",
            "orientation":"square"
        },
        "digitalart2-2.jpg":{
            "title":"",
            "description":"",
            "orientation":"horizontal"
        },
        "digitalart2-3.jpg":{
            "title":"",
            "description":"",
            "orientation":"horizontal"
        },
        "digitalart2-4.jpg":{
            "title":"",
            "description":"",
            "orientation":"horizontal"
        },
        "digitalart3.jpg":{
            "title":"digitalart3",
            "description":"Filler Text Goes Here",
            "orientation":"horizontal"
        },
        "digitalart4.jpg":{
            "title":"digitalart4",
            "description":"Filler Text Goes Here",
            "orientation":"horizontal"
        },
        "digitalart5.jpg":{
            "title":"digitalart5",
            "description":"Filler Text Goes Here",
            "orientation":"vertical"
        },
        "digitalart6.jpg":{
            "title":"digitalart6",
            "description":"Filler Text Goes Here",
            "orientation":"horizontal"
        },
        "digitalart7.jpg":{
            "title":"digitalart7",
            "description":"Filler Text Goes Here",
            "orientation":"horizontal"
        },


        "studioart1.jpg":{
            "title":"studioart1",
            "description":"Filler Text Goes Here",
            "orientation":"horizontal"
        },
        "studioart2.jpg":{
            "title":"studioart2",
            "description":"Filler Text Goes Here",
            "orientation":"vertical"
        },
        "studioart3.jpg":{
            "title":"studioart3",
            "description":"Filler Text Goes Here",
            "orientation":"horizontal"
        },
        "studioart4.jpg":{
            "title":"studioart4",
            "description":"Filler Text Goes Here",
            "orientation":"vertical"
        },
        "studioart5.gif":{
            "title":"studioart5",
            "description":"Filler Text Goes Here",
            "orientation":"horizontal"
        },
        "studioart6.jpg":{
            "title":"studioart6",
            "description":"Filler Text Goes Here",
            "orientation":"vertical"
        },
        "studioart7.jpg":{
            "title":"studioart7",
            "description":"Filler Text Goes Here",
            "orientation":"vertical"
        },
        "studioart8.jpg":{
            "title":"studioart8",
            "description":"Filler Text Goes Here",
            "orientation":"square"
        },
        "studioart9.jpg":{
            "title":"studioart9",
            "description":"Filler Text Goes Here",
            "orientation":"vertical"
        },
        "studioart10.jpg":{
            "title":"studioart10",
            "description":"Filler Text Goes Here",
            "orientation":"horizontal"
        },
        "studioart11.jpg":{
            "title":"studioart11",
            "description":"Filler Text Goes Here",
            "orientation":"vertical"
        },
        "studioart12.jpg":{
            "title":"studioart12",
            "description":"Filler Text Goes Here",
            "orientation":"vertical"
        },
        "studioart13.jpg":{
            "title":"studioart13",
            "description":"Filler Text Goes Here",
            "orientation":"vertical"
        },
        "studioart14.jpg":{
            "title":"studioart14",
            "description":"Filler Text Goes Here",
            "orientation":"horizontal"
        },
        "studioart15.jpg":{
            "title":"studioart15",
            "description":"Filler Text Goes Here",
            "orientation":"vertical"
        },
        "studioart16.jpg":{
            "title":"studioart16",
            "description":"Filler Text Goes Here",
            "orientation":"horizontal"
        },
        "studioart17.jpg":{
            "title":"studioart17",
            "description":"Filler Text Goes Here",
            "orientation":"vertical"
        },
        "studioart18.jpg":{
            "title":"studioart18",
            "description":"Filler Text Goes Here",
            "orientation":"horizontal"
        },
        "studioart19.jpg":{
            "title":"studioart19",
            "description":"Filler Text Goes Here",
            "orientation":"vertical"
        },
        "studioart20.jpg":{
            "title":"studioart20",
            "description":"Filler Text Goes Here",
            "orientation":"horizontal"
        },
        "studioart21.jpg":{
            "title":"studioart21",
            "description":"Filler Text Goes Here",
            "orientation":"horizontal"
        },
        "studioart22.jpg":{
            "title":"studioart22",
            "description":"Filler Text Goes Here",
            "orientation":"vertical"
        },
        "studioart23.jpg":{
            "title":"studioart17",
            "description":"Filler Text Goes Here",
            "orientation":"horizontal"
        },
        "studioart24.jpg":{
            "title":"studioart24",
            "description":"Filler Text Goes Here",
            "orientation":"vertical"
        },
        "studioart25.jpg":{
            "title":"studioart25",
            "description":"Filler Text Goes Here",
            "orientation":"vertical"
        },
        "studioart26.jpg":{
            "title":"studioart26",
            "description":"Filler Text Goes Here",
            "orientation":"vertical"
        },
        "studioart27.jpg":{
            "title":"studioart27",
            "description":"Filler Text Goes Here",
            "orientation":"vertical"
        },


        "mixedmedia1-1.jpg":{
            "title":"mixedmedia1",
            "description":"Filler Text Goes Here",
            "orientation":"horizontal"
        },
        "mixedmedia1-2.jpg":{
            "title":"",
            "description":"",
            "orientation":"vertical"
        },
        "mixedmedia2.jpg":{
            "title":"mixedmedia2",
            "description":"Filler Text Goes Here",
            "orientation":"vertical"
        },
        "mixedmedia3-1.jpg":{
            "title":"mixedmedia3",
            "description":"Filler Text Goes Here",
            "orientation":"horizontal"
        },
        "mixedmedia3-2.jpg":{
            "title":"",
            "description":"",
            "orientation":"horizontal"
        },
        "mixedmedia3-3.jpg":{
            "title":"",
            "description":"",
            "orientation":"horizontal"
        },
        "mixedmedia4.jpg":{
            "title":"mixedmedia4",
            "description":"Filler Text Goes Here",
            "orientation":"horizontal"
        },
        "mixedmedia5-1.jpg":{
            "title":"mixedmedia5",
            "description":"Filler Text Goes Here",
            "orientation":"vertical"
        },
        "mixedmedia5-2.jpg":{
            "title":"",
            "description":"",
            "orientation":"square"
        },
        "mixedmedia6.jpg":{
            "title":"mixedmedia6",
            "description":"Filler Text Goes Here",
            "orientation":"vertical"
        },
        "mixedmedia7-1.jpg":{
            "title":"mixedmedia7",
            "description":"Filler Text Goes Here",
            "orientation":"horizontal"
        },
        "mixedmedia7-2.jpg":{
            "title":"",
            "description":"",
            "orientation":"vertical"
        },
        "mixedmedia7-3.jpg":{
            "title":"",
            "description":"",
            "orientation":"vertical"
        },
        "mixedmedia7-4.jpg":{
            "title":"",
            "description":"",
            "orientation":"vertical"
        },
        "mixedmedia7-5.jpg":{
            "title":"",
            "description":"",
            "orientation":"horizontal"
        },
        "mixedmedia8.jpg":{
            "title":"mixedmedia8",
            "description":"Filler Text Goes Here",
            "orientation":"horizontal"
        },


        "installation1-1.jpg":{
            "title":"installation1-1",
            "description":"Filler Text Goes Here",
            "orientation":"vertical"
        },
        "installation1-2.jpg":{
            "title":"",
            "description":"",
            "orientation":"vertical"
        },
        "installation2.jpg":{
            "title":"installation2",
            "description":"Filler Text Goes Here",
            "orientation":"vertical"
        },
        "installation3.jpg":{
            "title":"installation3",
            "description":"Filler Text Goes Here",
            "orientation":"horizontal"
        },
        "installation4.jpg":{
            "title":"installation4",
            "description":"Filler Text Goes Here",
            "orientation":"vertical"
        },
        "installation5.jpg":{
            "title":"installation5",
            "description":"Filler Text Goes Here",
            "orientation":"horizontal"
        },
        "installation6-1.jpg":{
            "title":"installation6-1",
            "description":"Filler Text Goes Here",
            "orientation":"vertical"
        },
        "installation6-2.jpg":{
            "title":"",
            "description":"",
            "orientation":"horizontal"
        },
        "installation7-1.jpg":{
            "title":"installation7",
            "description":"Filler Text Goes Here",
            "orientation":"horizontal"
        },
        "installation7-2.jpg":{
            "title":"",
            "description":"",
            "orientation":"vertical"
        },
        "installation7-3.jpg":{
            "title":"",
            "description":"",
            "orientation":"vertical"
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
        var row_height = parseInt($(window).width()*0.5/3);
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
        
    },
    this.resizeOverlayText = function(){
        // dynamically resize text in overlays. 
        for(var item in document.getElementsByClassName('overlay')){
            textFit(document.getElementsByClassName('overlay')[item], {maxFontSize: 120});
        }
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
app.controller("resumeController", function($scope){

});
app.controller("aboutController", function($scope){

});
app.controller("digitalArtController", function($scope, gridSetupService, ngDialog){
    gridSetupService.setup3img3acrossRow();
    gridSetupService.setupOverlayHeights();
    gridSetupService.resizeOverlayText();
});
app.controller("studioArtController", function($scope, gridSetupService, ngDialog){
    gridSetupService.setup3img3acrossRow();
    gridSetupService.setupOverlayHeights();
    gridSetupService.resizeOverlayText();
});
app.controller("mixedMediaController", function($scope, gridSetupService, ngDialog){
    gridSetupService.setup3img3acrossRow();
    gridSetupService.setupOverlayHeights();
    gridSetupService.resizeOverlayText();
});
app.controller("installationController", function($scope, gridSetupService, ngDialog){
    gridSetupService.setup3img3acrossRow();
    gridSetupService.setupOverlayHeights();
    gridSetupService.resizeOverlayText();
});
app.controller('popupController', function ($scope, ngDialog) {
    $scope.checkContainerOrientation = function(picture){
        if(picture['orientation'] == 'horizontal'){
            return { 'height': '400px'};
        }
        if(picture['orientation'] == 'square'){
            return { 'height': '550px'};
        }
    }
    $scope.checkImageOrientation = function(picture){
        if(picture['orientation'] == 'horizontal'){
            return { 
                'height': '400px',
                'margin-top':'-200px'
            };
        }
        if(picture['orientation'] == 'square'){
            return { 
                'height': '550px',
                'margin-top':'-225px'
            };
        }
    }
});