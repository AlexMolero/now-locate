'use strict';

angular.module('nowLocateApp').controller('DelegacionDialogController',
    ['$scope', '$stateParams', '$uibModalInstance', 'entity', 'Delegacion', 'Expedicion',
        function($scope, $stateParams, $uibModalInstance, entity, Delegacion, Expedicion) {

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
