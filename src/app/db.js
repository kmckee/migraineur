angular.module('starter')

.factory('db', function(pouchDB) {
    return pouchDB('migraineur_db');
});
