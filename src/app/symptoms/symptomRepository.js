angular.module('starter')

.factory('symptomRepository', function(db, Symptom) {
    return {
        all: function() {
            return db.allDocs({
                include_docs: true,
                startkey: 'symptom',
                endkey: 'symptom_\uffff'
            }).then(function(results) {
                return results.rows.map(function(row) {
                    return new Symptom(row.doc);
                });
            });
        },
        remove: function(symptom) {
        },
        get: function(symptomId) {
        }
    };
});
