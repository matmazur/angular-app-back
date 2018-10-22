<%--
  Created by IntelliJ IDEA.
  User: matma
  Date: 22.10.2018
  Time: 12:49
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
  <head>
    <script type="text/javascript" src="bower_components/angular/angular.js"></script>
    <script type="text/javascript" src="app/app.js"></script>
    <title>Angular test app</title>
  </head>
  <body>

  <div ng-controller="ProductController as ctrl">

    <form>
      <input type="text" ng-model="ctrl.product.name"><br>
      <input type="text" ng-model="ctrl.product.producer"><br>
      <input type="text" ng-model="ctrl.product.kcal"><br>
      <button type="button" ng-click="ctrl.saveProduct(ctrl.product)">Save</button>
    </form>

<h2>Products in stock:</h2>
    <ul>
    <li ng-repeat="p in ctrl.products">{{p.name}} -- {{p.producer}} -- {{p.kcal}}</li>
    </ul>
  </div>

  </body>
</html>
