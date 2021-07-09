import * as product from "./../../app/controller/ProductController.js";
let app = angular.module("app", ["ngRoute"]);

/* router en angular */
app.config(($routeProvider) => {
  $routeProvider.when("/producto", {
    templateUrl: "./../view/pages/products/index.html",
    controller: "productController",
  });
});

app.controller("mainController", [
  "$scope",
  function ($scope) {
    $scope.title = "Cookie";
  },
]);

app.controller(product.nameController, product.controller);
