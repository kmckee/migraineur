angular.module('starter.services', [])

.factory('Symptoms', function() {
    // Might use a resource here that returns a JSON array

    // Some fake testing data
    var chats = [{
        id: 1,
        emoji: '😭',
        overview: 'Debilitating',
        rating: 1,
        color: '#BF4000',
        dateTime: new Date(),
    }, {
        id: 2,
        emoji: '😢',
        overview: 'Severe',
        color: '#9F6000',
        rating: 2,
        dateTime: new Date()
    }, {
        id: 3,
        emoji: '🙁',
        overview: 'Mild',
        color: '#808000',
        rating: 3,
        dateTime: new Date()
    }, {
        id: 4,
        emoji: '😐',
        rating: 4,
        overview: 'OK',
        color: '#609F00',
        dateTime: new Date()
    }, {
        id: 5,
        emoji: '😀',
        overview: 'Great!',
        rating: 5,
        color: '#40BF00',
        dateTime: new Date()
    }];

    return {
        all: function() {
            return chats;
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
