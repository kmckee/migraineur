angular.module('starter')

.factory('Symptoms', function(db, Symptom) {
    var chats = [{
        id: 1,
        emoji: '😭',
        overview: 'Debilitating',
        rating: 1,
        color: '#BF4000',
        date: new Date(),
    }, {
        id: 2,
        emoji: '😢',
        overview: 'Severe',
        color: '#9F6000',
        rating: 2,
        date: new Date()
    }, {
        id: 3,
        emoji: '🙁',
        overview: 'Mild',
        color: '#808000',
        rating: 3,
        date: new Date()
    }, {
        id: 4,
        emoji: '😐',
        rating: 4,
        overview: 'OK',
        color: '#609F00',
        date: new Date()
    }, {
        id: 5,
        emoji: '😀',
        overview: 'Great!',
        rating: 5,
        color: '#40BF00',
        date: new Date()
    }];

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
        remove: function(chat) {
            chats.splice(chats.indexOf(chat), 1);
        },
        get: function(chatId) {
            for (var i = 0; i < chats.length; i++) {
                if (chats[i].id === parseInt(chatId)) {
                    return chats[i];
                }
            }
            return null;
        }
    };
})
