var submitButton;


getElements();


function getElements()
{
	submitButton = document.getElementById("submitButton");
} // function


// Animate the "Submit Form" button.
submitButton.onmouseover  = function()
                    	      {
                              submitButton.style.backgroundColor = '#1a8cff'; 
                            } // function

submitButton.onmouseout  	= function()
                    			  {
                      			  submitButton.style.backgroundColor = '#0073e6'; 
                    			  } // function

submitButton.onclick     	= function()
                    			  {
                    				  
                    			  } // function