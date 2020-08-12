(function () {

  

angular.module('SigninFormApp',[]);

angular.module('SigninFormApp')
.controller('SigninController', SigninController);



SigninController.$inject = [ '$scope', '$location', '$http' ];
function SigninController($scope, $location, $http) {


  // var sic = $scope;

  $scope.UsrName = "";
  $scope.Pass = "";


  $scope.onSubmit = function () {
  	var UsrNm = $scope.UsrName;
  	console.log(UsrNm);
  	var Ps = $scope.Pass
  	console.log(Ps);
  	var obj = { "email": UsrNm, "password": Ps};
  	console.log(obj);
  	var jsnObj = JSON.stringify(obj);
  	console.log(jsnObj);

    $http({
      method: "POST",
      url: "http://8117e43f8262.ngrok.io/",
      data: jsnObj
    })
    .then(function Success(response){
      $scope.myWelcome = response.data;
      console.log($scope.myWelcome);
      // $scope.statuscode = response.status;
      // $location.path('../dashboard.html');
       window.location.assign("dashboard.html");
       // var link=window.location.pathname;
       // console.log(link);
    }, function Error(response){
      $scope.myWelcome = response.statusText;
      window.alert("wrong credientials");
      console.log($scope.myWelcome);
    });


  	// var xhttp = new XMLHttpRequest();
	  // xhttp.onreadystatechange = function() {
	  //   if (this.readyState == 4 && this.status == 200) {
	  //     // document.getElementById("demo").innerHTML = this.responseText;
	  //     console.log(this.responseText);
	  //   }
	  // };
	  // xhttp.open("POST", "https://reqres.in/api/login", true);
	  // xhttp.setRequestHeader("Content-Type", "application/json");
	  // xhttp.send(jsnObj);
  



  }





  // sic.submit = function () {
  //   sic.completed = true;
  // };
}





})();
