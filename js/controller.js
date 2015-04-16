/**
 * Created by MENG on 2015/3/11.
 */
var contactsModule = angular.module('Contacts',[]);
contactsModule.controller('contactsCtr',['$scope','$http',function($scope, $http){
    $scope.teachers = [
        {
            name: '孟学桐',
            job: '前端开发',
            job2: '前端'
        },
        {
            name: '孟浩',
            job: '产品经理',
            job2: ''
        }
    ];

    $scope.parents = [
        {
            name: '张宇',
            name2: '张振宇',
            kin: '爸爸'
        },
        {
            name: '张宇',
            name2: '张振宇',
            kin: '爸爸'
        }
    ];
}
]);