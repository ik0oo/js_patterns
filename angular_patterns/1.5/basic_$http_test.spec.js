// basic controller
angular.controller('UsersCtrl', function ($scope, $http) {
        $scope.queryUsers = function () {
            return $http.get('http://localhost:3000/api/getUsers')
                .then((data, status, headers, config) => {
                    $scope.users = data;
                })
                .catch((data, status, headers, config) => {
                    throw new Error('something went wrong...');
                });
        };
    });

describe('http basic test', () => {
    var $http, $httpBackend, $scope, ctrl;

    /****
     * include module
     */
    beforeEach(module('test-with-http-backend'));

    /****
     * include services
     */
    beforeEach(
        inject(function (_$http_, _$httpBackend_) {
            $http = _$http_;
            $httpBackend = _$httpBackend_;
        })
    );

    /****
     * include controllers and scope
     */
    beforeEach(
        inject(function (_$rootScope_, _$controller_) {
            $scope = _$rootScope_.$new();
            ctrl = _$controller_('UsersCtrl', {
                $scope: $scope
            });
        })
    );

    /****
     * test
     */
    it('should return all users', function () {

        /****
         * mock data for 'http://localhost:3000/api/getUsers' request
         */

        $httpBackend
            .whenGET('http://localhost:3000/api/getUsers')
            .resopnd([{name: 'pawel'}, {name: 'peter'}]);

        /****
         * http request
         */
        $scope.queryUsers();

        /****
         * break request
         */
        $httpBackend.flush();

        /****
         * compare
         */
        expect($scope.users.length).toEqual(2);
    });

    /****
     * check for another requests
     */

    afterEach(function () {
        $httpBackend.verifyNoOutstandingExpectation();
        $httpBackend.verifyNoOutstandingRequest();
    });
});