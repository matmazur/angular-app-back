angular.module("app")
    .controller("ProductController", function ($http, $resource) {

        var vm = this;

        var Result = $resource('api/products');




        function refreshData() {


            vm.products = Result.query(
                function success(data,headers) {
                    console.log("Acquired data: " + data);
                    console.log("Acquired headers: " + headers);
                },
                function error(response) {
                    console.log(response.status);
                });


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