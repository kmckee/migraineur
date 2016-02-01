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
        expect(result._id).to.eql(pojo._id);
    });
    it('has an _rev', function() {
        var result = new Symptom(pojo);
        expect(result._rev).to.eql(pojo._rev);
    });
    it('has a rating', function() {
        var result = new Symptom(pojo);
        expect(result.rating).to.eql(pojo.rating);
    });
    it('has a date', function() {
        var result = new Symptom(pojo);
        expect(result.date).to.eql(pojo.date);
    });
    it('has comments', function() {
        var result = new Symptom(pojo);
        expect(result.comments).to.eql(pojo.comments);
    });
    it('assigns an _id if one does not exist', function() {
        pojo._id = undefined;
        var result = new Symptom(pojo);
        expect(result._id).not.to.eql(undefined);
        expect(result._id).to.startsWith('symptom_');
    });

    it('assigns right now if a date is not specified', function() {
        pojo.date = undefined;
        var result = new Symptom(pojo);
        expect(result.date).not.to.eql(undefined);
    });

    describe('overview', function() {
        it('is Debilitating for a rating of 1', function() {
            pojo.rating = 1;
            var result = new Symptom(pojo);
            expect(result.getOverview()).to.equal('Debilitating');
        });
        it('is Severe for a rating of 2', function() {
            pojo.rating = 2;
            var result = new Symptom(pojo);
            expect(result.getOverview()).to.equal('Severe');
        });
        it('is Mild for a rating of 3', function() {
            pojo.rating = 3;
            var result = new Symptom(pojo);
            expect(result.getOverview()).to.equal('Mild');
        });
        it('is OK for a rating of 4', function() {
            pojo.rating = 4;
            var result = new Symptom(pojo);
            expect(result.getOverview()).to.equal('OK');
        });
        it('is Great for a rating of 5', function() {
            pojo.rating = 5;
            var result = new Symptom(pojo);
            expect(result.getOverview()).to.equal('Great');
        });
    });

    describe('emoji', function() {
        it('is 😭 for a rating of 1', function() {
            pojo.rating = 1;
            var result = new Symptom(pojo);
            expect(result.getEmoji()).to.equal('😭');
        });
        it('is 😢 for a rating of 2', function() {
            pojo.rating = 2;
            var result = new Symptom(pojo);
            expect(result.getEmoji()).to.equal('😢');
        });
        it('is 🙁 for a rating of 3', function() {
            pojo.rating = 3;
            var result = new Symptom(pojo);
            expect(result.getEmoji()).to.equal('🙁');
        });
        it('is 😐 for a rating of 4', function() {
            pojo.rating = 4;
            var result = new Symptom(pojo);
            expect(result.getEmoji()).to.equal('😐');
        });
        it('is 😀 for a rating of 5', function() {
            pojo.rating = 5;
            var result = new Symptom(pojo);
            expect(result.getEmoji()).to.equal('😀');
        });
    });
});
