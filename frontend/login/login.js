(function () {

  

angular.module('SigninFormApp',[]);

angular.module('SigninFormApp')
.controller('SigninController', SigninController);



SigninController.$inject = [ '$scope', '$location', '$http' ];
function SigninController($scope, $location, $http) {


  // var sic = $scope;

  $scope.UsrName = "";
  $scope.Pass = "";

  sessionStorage.clear();
  $scope.onSubmit = function () {
  	var UsrNm = $scope.UsrName;
  	console.log(UsrNm);
  	var Ps = $scope.Pass
  	console.log(Ps);
  	var obj = { "library_id": UsrNm, "password": Ps};
  	console.log(obj);
  	var jsnObj = JSON.stringify(obj);
  	console.log(jsnObj);

    $http({
      method: "POST",
      url: window.url+"login/",
      data: jsnObj
    })
    .then(function Success(response){
      $scope.myWelcome = response.data;
      console.log($scope.myWelcome);
      if (response.data=="wrong credientials") {
        window.alert(response.data);
      }
      else {

        sessionStorage.setItem("id", ($scope.myWelcome));
        console.log(sessionStorage.getItem("id"));
        window.location.href = "../dashboard/index.html";
      }

      // $scope.statuscode = response.status;
      // $location.path('../dashboard.html');
       // window.location.assign("../dashboard/index.html");
       // var link=window.location.pathname;
       // console.log(link);
    }, function Error(response){
      $scope.myWelcome = response.statusText;
      window.alert("cannot process request");
      console.log($scope.myWelcome);
    });


  	



  }





  // sic.submit = function () {
  //   sic.completed = true;
  // };
}





})();
