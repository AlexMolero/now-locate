'use strict';

angular.module('nowLocateApp')
    .controller('ExpedicionController', function ($scope, $state, Expedicion, ExpedicionSearch, ParseLinks) {

        $scope.expedicions = [];
        $scope.predicate = 'id';
        $scope.reverse = true;
        $scope.page = 1;
        $scope.loadAll = function() {
            Expedicion.query({page: $scope.page - 1, size: 20, sort: [$scope.predicate + ',' + ($scope.reverse ? 'asc' : 'desc'), 'id']}, function(result, headers) {
                $scope.links = ParseLinks.parse(headers('link'));
                $scope.totalItems = headers('X-Total-Count');
                $scope.expedicions = result;
            });
        };
        $scope.loadPage = function(page) {
            $scope.page = page;
            $scope.loadAll();
        };
        $scope.loadAll();


        $scope.search = function () {
            ExpedicionSearch.query({query: $scope.searchQuery}, function(result) {
                $scope.expedicions = result;
            }, function(response) {
                if(response.status === 404) {
                    $scope.loadAll();
                }
            });
        };

        $scope.refresh = function () {
            $scope.loadAll();
            $scope.clear();
        };

        $scope.clear = function () {
            $scope.expedicion = {
                fecha_inicio: null,
                fecha_entrega: null,
                frigorifico: null,
                temp_max: null,
                temp_min: null,
                descripcion: null,
                id: null
            };
        };
    });
