$(function () {
    H_login = {};
    H_login.openLogin = function(){
        $('.button').click(function(){
            $('.login').show();
            $('.login-bg').show();
        });
    };
    H_login.closeLogin = function(){
        $('.close-login').click(function(){
            $('.login').hide();
            $('.login-bg').hide();
        });
    };
    /*H_login.loginForm = function () {
        $("#login-button-submit").on('click',function(){
              var username = $("#username");
              var usernameValue = $("#username").val();
              var password = $("#password");
              var passwordValue = $("#password").val();
            if(usernameValue == ""){
                alert("手机号码不能为空");
                username.focus();
                return false;
            }else if(usernameValue.length > 11){
                alert("手机号码长度不能大于11字符");
                username.focus();
                return false;
            }else if(passwordValue == ""){
                alert("验证码不能为空");
                password.focus();
                return false;
            }else{
                alert("登录成功");
                setTimeout(function(){
                    $('.login').hide();
                    $('.login-bg').hide();
                    $('.list-input').val('');
                },2000);
            }
        });
    };*/
    H_login.run = function () {
        this.closeLogin();
        this.openLogin();
        this.loginForm();
    };
    H_login.run();
});
