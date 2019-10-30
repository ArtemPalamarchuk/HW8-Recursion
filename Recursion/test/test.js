describe("Check connection", function() {
    it("Check connection", function () {
        const exp = true;
        const act = true;
        assert.equal(act, exp);
    });
});


describe("Testing function", function() {
    it("Testing function", function () {
        const exp = 3;
        const act = summ(1,2);
        assert.equal(act, exp);
    });
});