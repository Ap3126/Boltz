var playButton;


getElements();


function getElements()
{
	playButton = document.getElementById("play");
} // function


// Animate the "Play Now" button.
playButton.onmouseover  = function()
                    		  {
                      			playButton.style.backgroundColor = '#1a8cff'; 
                    			} // function

playButton.onmouseout  	= function()
                    			{
                      			playButton.style.backgroundColor = '#0073e6'; 
                    			} // function

playButton.onclick     	= function()
                    			{
                    				window.location.href = "login.html";
                    			} // function