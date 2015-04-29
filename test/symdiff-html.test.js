var extract = require('../index');

describe('symdiff-html', function() {
    it('should work with an empty html', function() {
        var result = extract('');
        expect(result.length).to.equal(0);
    });

    it('should work with invalid html', function() {
        var result = extract('this is not the html you are looking for');
        expect(result.length).to.equal(0);
    });

    it('should extract a class', function() {
        var testHTML = '<div class="grid"></div>',
            result = extract(testHTML);

        expect(result.length).to.equal(1);
        expect(result[0]).to.equal('grid');
    });

    it('should extract multiple classes', function() {
        var testHTML = '<div class="grid grid-col"></div>',
            result = extract(testHTML);

        expect(result.length).to.equal(2);
        expect(result[0]).to.equal('grid');
        expect(result[1]).to.equal('grid-col');
    });

    it('should extract nothing when there are no classes', function() {
        var testHTML = '<script src="./test.js" />',
            result = extract(testHTML);

        expect(result.length).to.equal(0);
    });
});