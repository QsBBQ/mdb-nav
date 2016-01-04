angular.module('movieDBServices',[]).factory('MovieListService',function($http) {
//
    return  { getList: getList };

    function getList(url){
			// return $http.get(url);
      $http.get(url)
      .success(function (data) {
        return data;
      })
      .error(function (data, status) {
        console.log("trouble with url")
      })
      .catch(function (error) {
        console.log('error', error);
        $location.path('/error/'+error.data.status_message+'/'+error.status)
      })
    };
});
