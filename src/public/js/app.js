let app = angular.module("app", ["ngRoute"]);

/* router en angular */
app.config(($routeProvider) => {
  $routeProvider.when("/producto/list", {
    templateUrl: "./../view/pages/products/index.html",
    controller: "",
  });
});

app.controller("mainController", [
  "$scope",
  ($scope) => {
    $scope.title = "prueba";
  },
]);
