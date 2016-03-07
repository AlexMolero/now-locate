'use strict';

angular.module('nowLocateApp').controller('ExpedicionDialogController',
    ['$scope', '$stateParams', '$uibModalInstance', 'entity', 'Expedicion', 'Camion', 'Delegacion',
        function($scope, $stateParams, $uibModalInstance, entity, Expedicion, Camion, Delegacion) {

        $scope.expedicion = entity;
        $scope.camions = Camion.query();
        $scope.delegacions = Delegacion.query();
        $scope.load = function(id) {
            Expedicion.get({id : id}, function(result) {
                $scope.expedicion = result;
            });
        };

        var onSaveSuccess = function (result) {
            $scope.$emit('nowLocateApp:expedicionUpdate', result);
            $uibModalInstance.close(result);
            $scope.isSaving = false;
        };

        var onSaveError = function (result) {
            $scope.isSaving = false;
        };

        $scope.save = function () {
            $scope.isSaving = true;
            if ($scope.expedicion.id != null) {
                Expedicion.update($scope.expedicion, onSaveSuccess, onSaveError);
            } else {
                Expedicion.save($scope.expedicion, onSaveSuccess, onSaveError);
            }
        };

        $scope.clear = function() {
            $uibModalInstance.dismiss('cancel');
        };
        $scope.datePickerForFecha_inicio = {};

        $scope.datePickerForFecha_inicio.status = {
            opened: false
        };

        $scope.datePickerForFecha_inicioOpen = function($event) {
            $scope.datePickerForFecha_inicio.status.opened = true;
        };
        $scope.datePickerForFecha_entrega = {};

        $scope.datePickerForFecha_entrega.status = {
            opened: false
        };

        $scope.datePickerForFecha_entregaOpen = function($event) {
            $scope.datePickerForFecha_entrega.status.opened = true;
        };
}]);
