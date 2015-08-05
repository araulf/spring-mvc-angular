describe("Angular tests", function() {

    beforeEach(module('angularTestApp'));

    var $controller;

    beforeEach(inject(function(_$controller_){
        $controller = _$controller_;
    }));

    it("contains spec with an expectation", function() {
        expect(true).toBe(true);
    });
});
