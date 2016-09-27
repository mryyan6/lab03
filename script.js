function text()
{
	var update = document.getElementById("textField");
	if(document.getElementById("txt").value.toLowerCase() == "red")
	{	
			update.style.backgroundColor = "red";
		   
	}       
	else if(document.getElementById("txt").value.toLowerCase() == "green")   
	{        update.style.backgroundColor = "green";
	   
	}
	else if(document.getElementById("txt").value.toLowerCase() == "blue")
	{
			update.style.backgroundColor = "blue";                             
	}
	else
	{
		alert("Invalid Option");
	}
	}
	
	
function border()
{   
	var update = document.getElementById("textField");
	
	
	if(document.getElementById("bdr").value.toLowerCase() == "red")
	{	
		update.style.border = "solid red";
		
		   
	}      
	else if(document.getElementById("bdr").value.toLowerCase() == "green")
	{	
		update.style.border = "solid green";
		   
	}      
	else if(document.getElementById("bdr").value.toLowerCase() == "blue")
	{	
		update.style.border = "solid blue"	
		   
	}      
	else
	{
		alert("Invalid Option");
	}       
		
}

function size()
{
	var update = document.getElementById("textField");
	var size = 0;
	size = document.getElementById("size").value;
	document.getElementById("textField").style.borderWidth = size;
	
};

var x = 1;
function next()
{
  x++;
  if(x>5)
  {
	x=1;
  }
  var path = "img"+x+".jpg";
	document.getElementById("img").src=path;
}
function previous()
{
	x--;
	if(x<1)
	{
		x=5;
	}
	var path = "img"+x+".jpg";
	document.getElementById("img").src=path;
}