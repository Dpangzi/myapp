/**
 * Created by qjb30 on 2016/6/17.
 */
angular.module("app",["ionic"]).controller("appCtrl",function($scope) {

    $scope.items = [
        {
            begintime: '14:20',
            endtime: '15:30',
            room: '一号厅',
            attr: '3D MAX 大屏很大',
            price:"100"
        },
        {
            begintime: '14:20',
            endtime: '15:30',
            room: '一号厅',
            attr: '3D MAX 大屏很大',
            price:"100"
        },
        {
            begintime: '14:20',
            endtime: '15:30',
            room: '一号厅',
            attr: '3D MAX 大屏很大',
            price:"100"
        },{
            begintime: '14:20',
            endtime: '15:30',
            room: '一号厅',
            attr: '3D MAX 大屏很大',
            price:"100"
        },{
            begintime: '14:20',
            endtime: '15:30',
            room: '一号厅',
            attr: '3D MAX 大屏很大',
            price:"100"
        },{
            begintime: '14:20',
            endtime: '15:30',
            room: '一号厅',
            attr: '3D MAX 大屏很大',
            price:"100"
        }
    ];

    $scope.myActiveSlide=0;
});

