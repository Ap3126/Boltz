var playButton, login, loginBox, register, page, submitButton;
var optionBar;


main();


function main()
{
  getElements();
  initialisations();
} // main


function initialisations()
{
  enablePlayButton();
} // initialisations


function getElements()
{
	playButton = document.getElementById("play");
  logo = document.getElementById("logoClick");
  home = document.getElementById("home");
  login = document.getElementById("login");
  register = document.getElementById("register");
  page = document.getElementById("page");
} // getElements


// Animate the "Play Now" button.
playButton.onmouseover  = function()
                          {
                            if (optionBar == 1)
                              playButton.style.backgroundColor = '#1a8cff';
                          } // function

playButton.onmouseout   = function()
                          {
                            if (optionBar == 1)
                              playButton.style.backgroundColor = '#0073e6'; 
                          } // function


function disablePlayButton()
{
  playButton.style.cursor = "default";
} // disablePlayButton


function enablePlayButton()
{
  playButton.style.cursor = "pointer";
  optionBar = 1;
  home.style.backgroundColor = "#4CAF50";
  login.style.backgroundColor = "#333";
  register.style.backgroundColor = "#333";
} // enablePlayButton


logo.onclick  = function()
                {
                  location.reload();
                } // function


logo.onmouseover  = function()
                    {
                      logo.style.backgroundColor = "#111";
                    } // function


logo.onmouseout = function()
                  {
                    logo.style.backgroundColor = "#333";
                  } // function


home.onclick  = function()
                {
                  if (optionBar != 1)
                  {
                    home.style.backgroundColor = "#4CAF50";
                    login.style.backgroundColor = "#333";
                    register.style.backgroundColor = "#333";

                    if (optionBar == 2)
                      document.body.removeChild(loginBox);
                    else
                      document.body.removeChild(registerBox);

                    page.style.opacity = 1;
                    enablePlayButton();
                  } // if
                } // function


home.onmouseover  = function()
                    {
                      home.style.backgroundColor = "#111";
                    } // function


home.onmouseout = function()
                  {
                    if (optionBar == 1)
                      home.style.backgroundColor = "#4CAF50";
                    else
                      home.style.backgroundColor = "#333";
                  } // function


// Login button.
login.onclick = function()
                {
                  if (optionBar != 2)
                  {
                    login.style.backgroundColor = "#4CAF50";
                    killLoginOrRegister();
                    createLoginWindow();
                    home.style.backgroundColor = "#333";
                    register.style.backgroundColor = "#333";
                  } // if
                } // function


login.onmouseover = function()
                    {
                      login.style.backgroundColor = "#111";
                    } // function


login.onmouseout  = function()
                    {
                      if (optionBar == 2)
                        login.style.backgroundColor = "#4CAF50";
                      else
                        login.style.backgroundColor = "#333";
                    } // function


// Register button.
register.onclick  = function()
                    {
                      if (optionBar != 3)
                      {
                        register.style.backgroundColor = "#4CAF50";
                        killLoginOrRegister();
                        createRegisterWindow();
                        home.style.backgroundColor = "#333";
                        login.style.backgroundColor = "#333";
                      } // if
                    } // function


register.onmouseover  = function()
                        {
                          register.style.backgroundColor = "#111";
                        } // function


register.onmouseout = function()
                      {
                        if (optionBar == 3)
                          register.style.backgroundColor = "#4CAF50";
                        else
                          register.style.backgroundColor = "#333";
                      } // function


page.onclick  = function(e)
                {
                  if (optionBar == 1 && e.target == playButton)
                  {
                    createLoginWindow();
                  } // if
                  else if (optionBar == 2 && e.target != loginBox)
                  {
                    page.style.opacity = 1;
                    enablePlayButton();
                    document.body.removeChild(loginBox);
                  } // else if
                  else if (optionBar == 3 && e.target != registerBox)
                  {
                    page.style.opacity = 1;
                    enablePlayButton();
                    document.body.removeChild(registerBox);
                  } // else if
                } // function


function createLoginWindow()
{
  page = document.getElementById("page");
  page.style.opacity = 0.1;

  loginBox = document.createElement("div");
  document.body.appendChild(loginBox);
  loginBox.id = "loginBox";
  loginBox.style.opacity = "initial";

  var form = document.createElement("form");
  loginBox.appendChild(form);
  form.autocomplete ="off";
  form.method = "post";

  var span = document.createElement("span");
  form.appendChild(span);
  span.style.color = "#4d4d4d";
  span.style.fontWeight = "bold";
  span.innerHTML = "LOGIN";

  var space = document.createElement("div");
  space.innerHTML = "&nbsp";
  form.appendChild(space);
  space.style.height = "22px";

  var username = document.createElement("input");
  form.appendChild(username);
  username.type = "text";
  username.name = "username";
  username.placeholder = "Username";
  username.required = true;
  
  var password = document.createElement("input");
  form.appendChild(password);
  password.type = "password";
  password.name = "password";
  password.placeholder = "Password";
  password.required = true;

  var submit = document.createElement("input");
  form.appendChild(submit);
  submit.type = "submit";
  submit.name = "submit";
  submit.value = "SIGN IN";
  submit.id = "submitButton";

  submitButton = document.getElementById("submitButton");

  submitButtonAnimation();
  disablePlayButton();
  optionBar = 2;
  home.style.backgroundColor = "#333";
  login.style.backgroundColor = "#4CAF50";
  register.style.backgroundColor = "#333";
} // createLoginWindow


function createRegisterWindow()
{
  page = document.getElementById("page");
  page.style.opacity = 0.1;

  registerBox = document.createElement("div");
  document.body.appendChild(registerBox);
  registerBox.id = "registerBox";
  registerBox.style.opacity = "initial";

  var form = document.createElement("form");
  registerBox.appendChild(form);
  form.autocomplete ="off";
  form.method = "post";

  var span = document.createElement("span");
  form.appendChild(span);
  span.style.color = "#4d4d4d";
  span.style.fontWeight = "bold";
  span.innerHTML = "REGISTER";

  var space = document.createElement("div");
  space.innerHTML = "&nbsp";
  form.appendChild(space);
  space.style.height = "22px";

  var username = document.createElement("input");
  form.appendChild(username);
  username.type = "text";
  username.name = "username";
  username.placeholder = "Username";
  username.required = true;

  var name = document.createElement("input");
  form.appendChild(name);
  name.type = "text";
  name.name = "name";
  name.placeholder = "Name";
  name.required = true;

  var email = document.createElement("input");
  form.appendChild(email);
  email.type = "email";
  email.name = "email";
  email.placeholder = "E-mail Address";
  email.required = true;
  
  var password = document.createElement("input");
  form.appendChild(password);
  password.type = "password";
  password.name = "password";
  password.placeholder = "Password";
  password.required = true;

  var submit = document.createElement("input");
  form.appendChild(submit);
  submit.type = "submit";
  submit.name = "submit";
  submit.value = "SIGN UP";
  submit.id = "submitButton";

  submitButton = document.getElementById("submitButton");

  submitButtonAnimation();
  disablePlayButton();
  optionBar = 3;
  home.style.backgroundColor = "#333";
  login.style.backgroundColor = "#333";
  register.style.backgroundColor = "#4CAF50";
} // createRegisterWindow


function killLoginOrRegister()
{
  if (optionBar == 2)
  {
    page.style.opacity = 1;
    enablePlayButton();
    document.body.removeChild(loginBox);
  } // if
  else if (optionBar == 3)
  {
    page.style.opacity = 1;
    enablePlayButton();
    document.body.removeChild(registerBox);
  } // else if
  optionBar = 1;
} // killLoginOrRegister


function submitButtonAnimation()
{
  // Animate the "Submit Form" button.
  submitButton.onmouseover  = function()
                              {
                                submitButton.style.backgroundColor = '#1a8cff'; 
                              } // function

  submitButton.onmouseout   = function()
                              {
                                submitButton.style.backgroundColor = '#0073e6'; 
                              } // function

  submitButton.onclick      = function()
                              {
                                
                              } // function
} // submitButtonAnimation