angular.module('angular-social-media').run(['$templateCache', function($templateCache) {
  $templateCache.put('/view/login/index.html',
    '<div><div class="container"><div class="logo"><img src="./build/images/logo.png"></div></div><div class="login_container"><div class="login_form"><form><input type="text" placeholder="username"> <input type="password" placeholder="password"> <a href="">register</a> <a class="login_btn" href="">login</a> <a class="help" href="">need help?</a></form></div></div></div>');
}]);
