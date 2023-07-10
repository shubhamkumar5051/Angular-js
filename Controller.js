var app=angular.module('app', []);

// app.controller('HomeController', function($scope) {
//     $scope.isMenuOpen = false;
//     $scope.isMenu = true;

//     $scope.toggleMenu = function() {
  //       $scope.isMenuOpen = !$scope.isMenuOpen;
  //       $scope.isMenu = !$scope.isMenu;
  //     };
  // $scope.currentYear = new Date().getFullYear();
//   });
  

  app.controller('HomeController', function($scope, NewsService) {
    $scope.headlines = [];
    
    NewsService.getTopHeadlines()
      .then((response) =>{
        $scope.headlines = response.data.articles;
        console.log($scope.headlines)
      })
      .catch((error)=> {
        console.error('Error fetching headlines:', error);
      });
    })
    
    
//     app.controller('CategoryController', function($scope, $routeParams, NewsService) {
//       $scope.category = $routeParams.categoryName;
//       $scope.articles = [];

//     NewsService.getNewsByCategory($scope.category)
//       .then((response)=> {
//         $scope.articles = response.data.articles;
//         console.log(articles)
//       })
//       .catch((error)=> {
//         console.error('Error fetching news:', error);
//       });
//     })  
// app.controller('CountryController', function($scope, $routeParams, NewsService) {
//     $scope.country = $routeParams.countryCode;
//     $scope.articles = [];

//     NewsService.getNewsByCountry($scope.country)
//       .then((response)=> {
//         $scope.articles = response.data.articles;
//       })
//       .catch((error)=> {
//         console.error('Error fetching news:', error);
//       });
//   })

