function clickLoginButton()
{
    var loginTextbox = document.getElementById('login-textbox');
    var passwordTextbox = document.getElementById('password-textbox');
    
    console.log(loginTextbox.value);
    console.log(passwordTextbox.value);
    
    if(loginTextbox.value=='' || passwordTextbox.value=='')
        {
            alert('You Need To Fill The Blank!!')
        }
    if(loginTextbox.value=='')
        {
            loginTextbox.classList.add('login-error');
            
        }
    else
        {
            loginTextbox.classList.remove('login-error');
        }
    if(passwordTextbox.value=='')
        {
            passwordTextbox.classList.add('login-error');
            
        }
    else
        {
            passwordTextbox.classList.remove('login-error');
        }
}