(function(){
			// angular.module('myModule', ['gridster']);
			angular.module('myApp', ['gridster']);
			angular.module('myApp')
		    .controller('AppController', AppController);

		    AppController.$inject = [ '$scope' ];
		    function AppController($scope){

		  //   	$scope.standardItems = [
				//   { sizeX: 1, sizeY: 1, row: 0, col: 0 },
				//   { sizeX: 2, sizeY: 2, row: 0, col: 2 },
				//   { sizeX: 1, sizeY: 1, row: 0, col: 4 },
				//   { sizeX: 1, sizeY: 1, row: 0, col: 5 },
				//   { sizeX: 2, sizeY: 1, row: 1, col: 0 },
				//   { sizeX: 1, sizeY: 1, row: 1, col: 4 },
				//   { sizeX: 1, sizeY: 2, row: 1, col: 5 },
				//   { sizeX: 1, sizeY: 1, row: 2, col: 0 },
				//   { sizeX: 2, sizeY: 1, row: 2, col: 1 },
				//   { sizeX: 1, sizeY: 1, row: 2, col: 3 },
				//   { sizeX: 1, sizeY: 1, row: 2, col: 4 }
				// ];

				$scope.standardItems = [
				  { sizeX: 6, sizeY: 2, row: 0, col: 0 },
				  { sizeX: 3, sizeY: 3, row: 2, col: 0 },
				  { sizeX: 3, sizeY: 3, row: 2, col: 3 },
				  { sizeX: 4, sizeY: 5, row: 5, col: 0 },
				  { sizeX: 2, sizeY: 5, row: 5, col: 4 }
				];

				$scope.gridsterOpts = {
					columns:6, // the width of the grid, in columns
					pushing: true, // whether to push other items out of the way on move or resize
					floating: true, // whether to automatically float items up so they stack (you can temporarily disable if you are adding unsorted items with ng-repeat)
					swapping: true, // whether or not to have items of the same size switch places instead of pushing down if they are the same size
					width: 'auto', // can be an integer or 'auto'. 'auto' scales gridster to be the full width of its containing element
					colWidth: 'auto', // can be an integer or 'auto'.  'auto' uses the pixel width of the element divided by 'columns'
					rowHeight: 'match', // can be an integer or 'match'.  Match uses the colWidth, giving you square widgets.
					margins: [10, 10], // the pixel distance between each widget
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
				// angular.module('myApp').run(['gridsterConfig', function(gridsterConfig) {
				// 	gridsterConfig.width = 1000;
				// }]);

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

		})();
			