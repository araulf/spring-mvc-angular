<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html ng-app="angularTestApp">
<head>
    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.4.3/angular.min.js"></script>
    <script src="js/angular-test.js"></script>
    <title></title>
</head>
<body>
<div ng-controller="TestController">
<img src="images/Lumpy_Space.png"/>
<input type="button" value="click me" ng-click="getHello()"/>
{{result}}
</div>
</body>
</html>