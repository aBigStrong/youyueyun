
//ע�ͣ�Ϊ�˽������ѹ��������
angular.module('M1',['ng'])
  .controller('C1',['$scope','$http',
  function($scope,$http){
    $scope.data = 999;
    console.log($scope.data);
  }]);