<%@ page contentType="text/html;charset=UTF-8" %>
<!Doctype html>
<html ng-app="app">
<head>
    <script type="text/javascript" src="bower_components/angular/angular.js"></script>
    <script type="text/javascript" src="bower_components/angular-resource/angular-resource.js"></script>
    <script type="text/javascript" src="bower_components/angular-route/angular-route.js"></script>
    <script type="text/javascript" src="app/app.js"></script>
    <script type="text/javascript" src="app/controllers.js"></script>

    <title>Angular test app</title>
</head>
<body>


<a href="#list">Homepage</a>
<a href="#add">Add New Product</a>


<div ng-view></div>

<div ng-controller="ProductController as ctrl">



    <div ng-show="ctrl.details">
        <h2> {{ctrl.details.name}}</h2>
        <p>Producer: {{ctrl.details.producer}} || kcal: {{ctrl.details.kcal}}</p>
    </div>

</div>

</body>
</html>
