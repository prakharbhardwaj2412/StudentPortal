(function(){
	
	angular.module('myApp', ['ui.router', 'ui.calendar', 'gridster']);

	angular.module('myApp')
    .controller('AppController', AppController);

    AppController.$inject = [ '$scope' ];
    function AppController($scope){

		$scope.standardItems = [
		  { sizeX: 6, sizeY: 3, row: 0, col: 0 },
		  { sizeX: 3, sizeY: 4, row: 3, col: 0 },
		  { sizeX: 3, sizeY: 4, row: 3, col: 3 },
		  { sizeX: 4, sizeY: 5, row: 7, col: 0 },
		  { sizeX: 2, sizeY: 5, row: 7, col: 4 }
		];

		$scope.templates = [ "template1", "template2", "template3", "template4", "template5"];

		$scope.gridsterOpts = {
			columns:6, // the width of the grid, in columns
			pushing: true, // whether to push other items out of the way on move or resize
			floating: true, // whether to automatically float items up so they stack (you can temporarily disable if you are adding unsorted items with ng-repeat)
			swapping: true, // whether or not to have items of the same size switch places instead of pushing down if they are the same size
			width: 'auto', // can be an integer or 'auto'. 'auto' scales gridster to be the full width of its containing element
			colWidth: 'auto', // can be an integer or 'auto'.  'auto' uses the pixel width of the element divided by 'columns'
			rowHeight: 'match', // can be an integer or 'match'.  Match uses the colWidth, giving you square widgets.
			margins: [20, 20], // the pixel distance between each widget
			outerMargin: true, // whether margins apply to outer edges of the grid
			sparse: false, // "true" can increase performance of dragging and resizing for big grid (e.g. 20x50)
			isMobile: false, // stacks the grid items if true
			mobileBreakPoint: 600, // if the screen is not wider that this, remove the grid layout and stack the items
			mobileModeEnabled: true, // whether or not to toggle mobile mode when screen width is less than mobileBreakPoint
			minColumns: 1, // the minimum columns the grid must have
			minRows: 2, // the minimum height of the grid, in rows
			maxRows: 100,
			defaultSizeX: 2, // the default width of a gridster item, if not specifed
			defaultSizeY: 1, // the default height of a gridster item, if not specified
			minSizeX: 1, // minimum column width of an item
			maxSizeX: null, // maximum column width of an item
			minSizeY: 1, // minumum row height of an item
			maxSizeY: null, // maximum row height of an item
			resizable: {
			   enabled: true,
			   handles: ['n', 'e', 's', 'w', 'ne', 'se', 'sw', 'nw'],
			   start: function(event, $element, widget) {}, // optional callback fired when resize is started,
			   resize: function(event, $element, widget) {}, // optional callback fired when item is resized,
			   stop: function(event, $element, widget) {} // optional callback fired when item is finished resizing
			},
			draggable: {
			   enabled: true, // whether dragging items is supported
			   // handle: '.my-class', // optional selector for drag handle
			   start: function(event, $element, widget) {}, // optional callback fired when drag is started,
			   drag: function(event, $element, widget) {}, // optional callback fired when item is moved,
			   stop: function(event, $element, widget) {} // optional callback fired when item is finished dragging
			}
		};

		$scope.$on('gridster-mobile-changed', function(gridster) {
		});
		$scope.$on('gridster-draggable-changed', function(gridster) {
		});
		$scope.$on('gridster-resizable-changed', function(gridster) {
		});
		$scope.$on('gridster-resized', function(sizes, gridster) {
			// sizes[0] = width
			// sizes[1] = height
			// gridster.
		})
    }

    // UI Routing
    angular.module('myApp')
    .config(AppConfig);
    AppConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
    function AppConfig($stateProvider, $urlRouterProvider){

    	$urlRouterProvider.otherwise('/dashboard');

    	$stateProvider.state('dashboard', {
			url: '/dashboard',
			views: {
				'template1': {
					templateUrl: 'templates/template1.html',
					controller: 'template1Controller'
				}, 
				'template2': {
					templateUrl: 'templates/template2.html',
					controller: 'template2Controller'
				}, 
				'template3': {
					templateUrl: 'templates/template3.html',
					controller: 'template3Controller'
				}, 
				'template4': {
					templateUrl: 'templates/template4.html',
					controller: 'template4Controller'
				}, 
				'template5': {
					templateUrl: 'templates/template5.html',
					controller: 'template5Controller'
				}
			}
		})
    }

    // Controller
    angular.module('myApp')
    .controller('template1Controller', template1Controller);
    angular.module('myApp')
    .controller('template2Controller', template2Controller);
    angular.module('myApp')
    .controller('template3Controller', template3Controller);
    angular.module('myApp')
    .controller('template4Controller', template4Controller);
    angular.module('myApp')
    .controller('template5Controller', template5Controller);

    // templete 1 Attendance
    template1Controller.$inject = ['$scope', '$http'];
    function template1Controller($scope, $http){
    	var jsnObj = sessionStorage.getItem("id");
    	// jsnObj = JSON.stringify({id: "2"})
    	console.log(jsnObj);

    	var attnd = [];

    	$http({
    		method: "POST",
	      	url: window.url+"login/attendance/",
	      	data: jsnObj
	    })
	    .then(function Success(response){
	      	$scope.myWelcome = response.data;
	      	// console.log($scope.myWelcome[0]);
	      	$scope.percentage = $scope.myWelcome[0].percentage;
	      	$scope.present_days = $scope.myWelcome[0].present_days;
	      	$scope.total_days = $scope.myWelcome[0].total_days;
	      	attnd.push($scope.present_days);
	      	attnd.push($scope.total_days - $scope.present_days);
	      	// console.log(attnd)


	    }, function Error(response){
	      	$scope.myWelcome = response.statusText;
	      	// window.alert("cannot process request");
	      	console.log($scope.myWelcome);
	    });

    	var ctx = document.getElementById("myChart"); 
		var myChart = new Chart(ctx, { 
  			type: 'doughnut', 
  			data: { 
    			// labels: ["CS", "IT" , "ECE" , "EE", "ME", "BE"], 
    			datasets: [ 
      				{
      					label: '# of students',  
	        			data: attnd,
	        			backgroundColor :[
	        						'#56af50',
	        						'#ccccb3', 
						], 
	  
						borderColor: [ 
	        						'rgba(86, 175, 80, 0.5)',
									'rgba(204, 204, 179, 0.01)',
									'rgba(0, 0, 0, 1)',
				        ], 
						borderWidth : 10
				    } 
				] 
			}, 
			options: {  } 
		});

		
    }

    // template 2 Timetable
    template2Controller.$inject = ['$scope', '$http'];
    function template2Controller($scope, $http){

    	$http({
    		method: "GET",
	      	url: window.url+"login/timetable/",
	      	// data: jsnObj
	    })
	    .then(function Success(response){
	      	$scope.timetble = response.data;
	      	// console.log($scope.timetble);



	    }, function Error(response){
	      	$scope.myWelcome = response.statusText;
	      	// window.alert("cannot process request");
	      	console.log($scope.myWelcome);
	    });
    }

    // template 3
    template3Controller.$inject = ['$scope', '$http'];
    function template3Controller($scope, $http){}

    // template 4
    template4Controller.$inject = ['$scope'];
    function template4Controller($scope){

    	$scope.custom = {
	        url: "http://www.google.com/calendar/feeds/indian__en%40holiday.calendar.google.com/public/basic",
	        // className: 'gcal-event',           // an option!,
	        currentTimezone: 'India', // an option!
	        googleCalendarApiKey: 'AIzaSyCc5LZyMQ2pBB1dAJerfliEEu0P8hMUVwg'
	    };

    	$scope.eventSources = [$scope.custom];
    	/* config object */
        $scope.uiConfig = {
          calendar:{
            height: 500,
            editable: false,
            header:{
              // left: 'month basicWeek basicDay agendaWeek agendaDay',
              left: 'title',
              center: '',
              right: 'today prev,next'
            },
            eventClick: $scope.alertEventOnClick,
            eventDrop: $scope.alertOnDrop,
            eventResize: $scope.alertOnResize
          }
        };




    }

    // template 5 Birthday
    template5Controller.$inject = ['$scope', '$http', ];
    function template5Controller($scope, $http){

    	$http({
    		method: "GET",
	      	url: window.url+"login/birthday/",
	      	// data: jsnObj
	    })
	    .then(function Success(response){
	      	$scope.brthdy = response.data;
	      	console.log($scope.brthdy);



	    }, function Error(response){
	      	$scope.myWelcome = response.statusText;
	      	// window.alert("cannot process request");
	      	console.log($scope.myWelcome);
	    });
    }



		})();
			