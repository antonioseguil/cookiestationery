import * as controllers from "./../../app/controller/Controller.js";
let app = angular.module("app", ["ngRoute"]);

/* router en angular */
app.config(($routeProvider) => {
  $routeProvider
    .when("/producto", {
      templateUrl: "./../view/pages/products/index.html",
      controller: "productController",
    })
    .when("/cliente", {
      templateUrl: "./../view/pages/client/index.html",
      controller: "clientController",
    });
});

app.controller("mainController", [
  "$scope",
  function ($scope) {
    $scope.title = "Cookie";
  },
]);

/* Controlador de productos */
app.controller(
  controllers.product.nameController,
  controllers.product.controller
);

/* Controlador de cliente */
app.controller(
  controllers.client.nameController,
  controllers.client.controller
);
