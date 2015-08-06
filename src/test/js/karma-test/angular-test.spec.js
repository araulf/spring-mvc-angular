describe("Angular tests", function() {

    beforeEach(module('angularTestApp'));

    var controller;
    var scope;
    var httpBackend;

    beforeEach(inject(function($rootScope, $controller, $httpBackend){
        scope = $rootScope.$new();
        httpBackend = $httpBackend;
        httpBackend.when("GET", "api/hello").respond("Hello");
        controller = $controller('TestController', {$scope: scope});
    }));

    it("calls the hello api", function() {
        httpBackend.expectGET('api/hello').respond(200, 'Hello');
        scope.getHello();
        httpBackend.flush();
        expect(scope.result).toBe("Hello");
    });
});
