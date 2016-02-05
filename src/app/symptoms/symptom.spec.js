describe('Symptom', function() {
    var Symptom, pojo, rightNow;
    beforeEach(module('starter'));
    beforeEach(inject(function(_Symptom_) {
        Symptom = _Symptom_;
        rightNow = new Date();
        pojo = {
            _id: '1234567',
            _rev: 'ASDFQWERTY',
            rating: 1,
            date: rightNow,
            comments: 'foo'
        };
    }));
    it('has an _id', function() {
        var result = new Symptom(pojo);
        expect(result._id).toEqual(pojo._id);
    });
    it('has an _rev', function() {
        var result = new Symptom(pojo);
        expect(result._rev).toEqual(pojo._rev);
    });
    it('has a rating', function() {
        var result = new Symptom(pojo);
        expect(result.rating).toEqual(pojo.rating);
    });
    it('has a date', function() {
        var result = new Symptom(pojo);
        expect(result.date).toEqual(pojo.date);
    });
    it('has comments', function() {
        var result = new Symptom(pojo);
        expect(result.comments).toEqual(pojo.comments);
    });
    it('assigns an _id if one does not exist', function() {
        pojo._id = undefined;
        var result = new Symptom(pojo);
        expect(result._id).not.toEqual(undefined);
        expect(result._id).toStartWith('symptom_');
    });

    it('assigns right now if a date is not specified', function() {
        pojo.date = undefined;
        var result = new Symptom(pojo);
        expect(result.date).not.toEqual(undefined);
    });

    describe('overview', function() {
        it('is Debilitating for a rating of 1', function() {
            pojo.rating = 1;
            var result = new Symptom(pojo);
            expect(result.getOverview()).toEqual('Debilitating');
        });
        it('is Severe for a rating of 2', function() {
            pojo.rating = 2;
            var result = new Symptom(pojo);
            expect(result.getOverview()).toEqual('Severe');
        });
        it('is Mild for a rating of 3', function() {
            pojo.rating = 3;
            var result = new Symptom(pojo);
            expect(result.getOverview()).toEqual('Mild');
        });
        it('is OK for a rating of 4', function() {
            pojo.rating = 4;
            var result = new Symptom(pojo);
            expect(result.getOverview()).toEqual('OK');
        });
        it('is Great for a rating of 5', function() {
            pojo.rating = 5;
            var result = new Symptom(pojo);
            expect(result.getOverview()).toEqual('Great');
        });
    });

    describe('emoji', function() {
        it('is 😭 for a rating of 1', function() {
            pojo.rating = 1;
            var result = new Symptom(pojo);
            expect(result.getEmoji()).toEqual('😭');
        });
        it('is 😢 for a rating of 2', function() {
            pojo.rating = 2;
            var result = new Symptom(pojo);
            expect(result.getEmoji()).toEqual('😢');
        });
        it('is 🙁 for a rating of 3', function() {
            pojo.rating = 3;
            var result = new Symptom(pojo);
            expect(result.getEmoji()).toEqual('🙁');
        });
        it('is 😐 for a rating of 4', function() {
            pojo.rating = 4;
            var result = new Symptom(pojo);
            expect(result.getEmoji()).toEqual('😐');
        });
        it('is 😀 for a rating of 5', function() {
            pojo.rating = 5;
            var result = new Symptom(pojo);
            expect(result.getEmoji()).toEqual('😀');
        });
    });
});
