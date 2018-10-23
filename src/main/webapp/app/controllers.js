angular.module("app")
    .controller("ProductController", function ($http, $resource) {

        console.log("dot");
        var vm = this;

        var Result = $resource('api/products');
        vm.product = new Product();
        console.log("dot");


        function refreshData() {
            console.log("dot");


            vm.products = Result.query(
                function success(data, headers) {
                    $log("fdsfsfsd");
                    console.log("Acquired data: " + data);
                    console.log("Acquired headers: " + headers);
                },
                function error(response) {
                    console.log(response.status);
                });


        }

        vm.addProduct = function (product) {

            console.log(vm.product.__proto__);

            vm.product.save(function (data) {
                refreshData();
                vm.product = new Product();
            });


        };
        refreshData();
    });


/*
$http.post("api/products", product)
                .then(function success(response) {
                    refreshData();
                    vm.product = {};
                }, function error(response) {
                    console.log('Data not saved ' + product);
                });
                */