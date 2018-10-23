<%@ page contentType="text/html;charset=UTF-8" %>
<!Doctype html>
<html ng-app="app">
<head>
    <script type="text/javascript" src="bower_components/angular/angular.js"></script>
    <script type="text/javascript" src="bower_components/angular-resource/angular-resource.js"></script>
    <script type="text/javascript" src="app/app.js"></script>
    <script type="text/javascript" src="app/controllers.js"></script>

    <title>Angular test app</title>
</head>
<body>

<div ng-controller="ProductController as ctrl">

    <form>
        <input type="text" ng-model="ctrl.product.name" placeholder="name"><br>
        <input type="text" ng-model="ctrl.product.producer" placeholder="producer"><br>
        <input type="text" ng-model="ctrl.product.kcal" placeholder="kcal (numbers only)"><br>
        <button type="button" ng-click="ctrl.addProduct(ctrl.product)">Save</button>
    </form>

    <h2>Products in stock:</h2>
    <ul>
        <li ng-repeat="p in ctrl.products" ng-mouseenter="ctrl.loadById(p.id)" ng-mouseleave="ctrl.zeroDown()">{{p.name}}</li>
    </ul>


<div ng-show="ctrl.details">
    <h2> {{ctrl.details.name}}</h2>
    <p>Producer: {{ctrl.details.producer}} || kcal: {{ctrl.details.kcal}}</p>

</div>



</div>

</body>
</html>
