'use strict';

angular.module('nowLocateApp')
    .factory('Expedicion', function ($resource, DateUtils) {
        return $resource('api/expedicions/:id', {}, {
            'query': { method: 'GET', isArray: true},
            'get': {
                method: 'GET',
                transformResponse: function (data) {
                    data = angular.fromJson(data);
                    data.fecha_inicio = DateUtils.convertLocaleDateFromServer(data.fecha_inicio);
                    data.fecha_entrega = DateUtils.convertLocaleDateFromServer(data.fecha_entrega);
                    return data;
                }
            },
            'update': {
                method: 'PUT',
                transformRequest: function (data) {
                    data.fecha_inicio = DateUtils.convertLocaleDateToServer(data.fecha_inicio);
                    data.fecha_entrega = DateUtils.convertLocaleDateToServer(data.fecha_entrega);
                    return angular.toJson(data);
                }
            },
            'save': {
                method: 'POST',
                transformRequest: function (data) {
                    data.fecha_inicio = DateUtils.convertLocaleDateToServer(data.fecha_inicio);
                    data.fecha_entrega = DateUtils.convertLocaleDateToServer(data.fecha_entrega);
                    return angular.toJson(data);
                }
            }
        });
    });
