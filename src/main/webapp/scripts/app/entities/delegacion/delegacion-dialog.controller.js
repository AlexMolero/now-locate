'use strict';

angular.module('nowLocateApp').controller('DelegacionDialogController',
    ['$scope', '$stateParams', '$uibModalInstance', 'entity', 'Delegacion', 'Expedicion','NgMap',
        function($scope, $stateParams, $uibModalInstance, entity, Delegacion, Expedicion ,NgMap) {

            $scope.lat = [];
            $scope.lng = [];
            $scope.placeChanged = function() {
                $scope.place = this.getPlace();

                $scope.map.setCenter($scope.place.geometry.location);
                $scope.lat = $scope.place.geometry.location.lat();
                $scope.lng = $scope.place.geometry.location.lng();

            }
            NgMap.getMap().then(function(map) {
                $scope.map = map;
            });

        $scope.delegacion = entity;
        $scope.expedicions = Expedicion.query();
        $scope.load = function(id) {
            Delegacion.get({id : id}, function(result) {
                $scope.delegacion = result;
            });
        };

        var onSaveSuccess = function (result) {
            $scope.$emit('nowLocateApp:delegacionUpdate', result);
            $uibModalInstance.close(result);
            $scope.isSaving = false;
        };

        var onSaveError = function (result) {
            $scope.isSaving = false;
        };

        $scope.save = function () {
            $scope.isSaving = true;
            if ($scope.delegacion.id != null) {
                Delegacion.update($scope.delegacion, onSaveSuccess, onSaveError);
            } else {
                Delegacion.save($scope.delegacion, onSaveSuccess, onSaveError);
            }
        };

        $scope.clear = function() {
            $uibModalInstance.dismiss('cancel');
        };
}]);
