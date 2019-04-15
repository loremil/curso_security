banchileApp.controller('menuPrivadoMovil', function($scope) {
  var swiper = new Swiper('.swiper-container', {
    pagination: '.swiper-pagination',
    paginationClickable: true,
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
    spaceBetween: 30,
    scrollbar: '.swiper-scrollbar',
    scrollbarHide: true,
    centeredSlides: false,
    grabCursor: false,
    freeMode: true,
    slidesPerView: 4,
  });
  $scope.activo = [];
  $scope.visible = [];
  $scope.mouseOver = function(position) {
    $scope.activo[position] = "activo-menuPrivado";
    $scope.visible[position] = true;
  }
  $scope.mouseLeave = function(position) {
    $scope.activo[position] = "";
  }
  $scope.mouseClick = function(position) {
    $scope.activo[position] = "";
    $scope.visible[position] = false;
  }
});
