// Code goes here

angular.module("ui.bootstrap.demo", ["ui.bootstrap", "ngTouch"]);

angular.module('ui.bootstrap.demo').controller('Carousel', function ($scope) {
  $scope.myInterval = 1000;
  $scope.noWrapSlides = false;
  var slides = $scope.slides = [];
  $scope.addSlide = function() {
    slides.push({
      image: 'assets/MV5BMjViOGU4ZjctMjQ1Mi00MzliLTk2ZDgtYWU3ZGZlMjNjNGMzXkEyXkFqcGdeQXVyMjQzMzQzODY@._V1_SX300.jpg',
      text: 'Germinal'
    });
    slides.push({
      image: 'assets/MV5BZWU2OGFkM2UtNTdiYS00MjA0LWI4Y2EtM2IyZGQyZjI4ZWEyXkEyXkFqcGdeQXVyMDI3OTIzOA@@._V1_SX300.jpg',
      text: 'Le Petit Monde de Don Camillo'
    });
  };
  $scope.addSlide();
});
