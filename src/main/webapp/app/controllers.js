angular.module("app")


    .config(function ($routeProvider) {
        $routeProvider
            .when('list', {
                templateUrl: "partials/list.html",
                controller: "ListController",
                controllerAs: listCtrl
            })
            .when('details', {
                templateUrl: "partials/details.html",
                controller: "DetailsController",
                controllerAs: detailsCtrl
            })
            .when('add', {
                templateUrl: "partials/add.html",
                controller: "AddController",
                controllerAs: addCtrl
            })
            .otherwise({
                redirectTo: "/list"
            });
    })


    .factory("Product", function () {
        function Product(id, name, producer, kcal) {
            this.id = id;
            this.name = name;
            this.producer = producer;
            this.kcal = kcal;
        }

        return Product;
    })


    .service("Products", function (Product) {
        var products = [
            new Product(0, "Snickers", "Candy company", 400),
            new Product(1, "Twix", "Candy company", 333),
            new Product(2, "Milky Way", "Candy company", 377),
            new Product(3, "Mars", "Candy company", 1111)
        ];

        this.size = function () {
            return products.length;
        };
        this.getAll = function () {
            return products;
        };
        this.getById = function (id) {
            return products[id];
        };
        this.add = function (product) {
            books.push(product);
        };

    });




//

// .controller("ProductController", function ($http, $resource) {
//
//     console.log("dot");
//     var vm = this;
//
//     var Product = $resource('api/products/:productId');
//     vm.product = new Product();
//     console.log("dot");
//
//     function refreshData() {
//         console.log("dot");
//
//         vm.products = Product.query(
//             function success(data, headers) {
//                 console.log("Acquired data: " + data);
//                 console.log("Acquired headers: " + headers("Content-Type"));
//             },
//             function error(response) {
//                 console.log(response.status);
//             });
//     }
//
//     vm.addProduct = function (product) {
//
//         console.log(vm.product.__proto__);
//
//         vm.product.$save(function (data) {
//             refreshData();
//             vm.product = new Product();
//         });
//     };
//
//     vm.loadById = function (id) {
//         vm.details = Product.get({productId: id});
//         console.log("click");
//     };
//     vm.zeroDown = function () {
//         vm.details = null;
//     };
//
//     refreshData();
// });
