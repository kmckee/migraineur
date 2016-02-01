angular.module('starter')

.factory('Symptom', function(symptomEmojiFor, symptomOverviewFor) {
    function Symptom(pojo) {
        this.rating = pojo.rating;
        this.comments = pojo.comments;
        this.date = pojo.date || new Date();

        this._id = pojo._id || 'symptom_' + this.date.getTime() ;
        this._rev = pojo._rev;
    }

    Symptom.prototype.getEmoji = function () {
        return symptomEmojiFor(this.rating);
    };

    Symptom.prototype.getOverview = function() {
        return symptomOverviewFor(this.rating);
    };

    return Symptom;
})

.factory('symptomEmojiFor', function() {
    return function(rating) {
        return {
            '1': '😭',
            '2': '😢',
            '3': '🙁',
            '4': '😐',
            '5': '😀'
        }[rating.toString()];
    };
})

.factory('symptomOverviewFor', function() {
    return function(rating) {
        return {
            '1': 'Debilitating',
            '2': 'Severe',
            '3': 'Mild',
            '4': 'OK',
            '5': 'Great'
        }[rating.toString()];
    };
});
