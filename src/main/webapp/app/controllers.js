angular.module("app")
    .controller("ProductController", function ($http, $resource) {

        var vm = this;

        var Result = $resource('api/products');




        function refreshData() {

            $http.get("api/products")
                .then(function success(response) {
                        vm.products = response.data;
                    }, function error(response) {
                        console.log("API error " + response.status)

                    }
                );
        }

        vm.addProduct = function (product) {
            $http.post("api/products", product)
                .then(function success(response) {
                    refreshData();
                    vm.product = {};
                }, function error(response) {
                    console.log('Data not saved ' + product);
                });
        };
        refreshData();
    });