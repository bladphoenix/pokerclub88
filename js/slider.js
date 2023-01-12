function open_panel()
{
slideIt();
//slide_second();
var a=document.getElementById("sidebar");
a.setAttribute("id","sidebar1");
a.setAttribute("onclick","close_panel()");

}

function slideIt()
{
	var slidingDiv = document.getElementById("slider");
	var stopPosition = 0;
	
	if (parseInt(slidingDiv.style.right) < stopPosition )
	{
		slidingDiv.style.right = parseInt(slidingDiv.style.right) + 6 + "px";
		setTimeout(slideIt, 1);	
	}
}
	
function close_panel(){
slideIn();
a=document.getElementById("sidebar1");
a.setAttribute("id","sidebar");
a.setAttribute("onclick","open_panel()");
}

function slideIn()
{
	var slidingDiv = document.getElementById("slider");
	var stopPosition = -200;
	
	if (parseInt(slidingDiv.style.right) > stopPosition )
	{
		slidingDiv.style.right = parseInt(slidingDiv.style.right) - 6 + "px";
		setTimeout(slideIn, 1);	
	}
}

function open_panelsecond()
{
    //debugger;
	slideItSecond();
//slide_second();
var a=document.getElementById("sidebar_second");
a.setAttribute("id","sidebar_second");
a.setAttribute("onclick","close_panelSecond()");
}

function slideItSecond()
{
	var slidingDiv = document.getElementById("slider_secon");
	var stopPosition = 0;
	
	if (parseInt(slidingDiv.style.left) < stopPosition )
	{
		slidingDiv.style.left = parseInt(slidingDiv.style.left) + 6 + "px";
		setTimeout(slideItSecond, 1);	
	}
}

function close_panelSecond(){
	
slideInSecond();
a=document.getElementById("sidebar_second");
a.setAttribute("id","sidebar_second");
a.setAttribute("onclick","open_panelsecond()");
}

function slideInSecond()
{
	var slidingDiv = document.getElementById("slider_secon");
	var stopPosition = -236;
	
	if (parseInt(slidingDiv.style.left) > stopPosition )
	{
		slidingDiv.style.left = parseInt(slidingDiv.style.left) - 6 + "px";
		setTimeout(slideInSecond, 1);	
	}
}



//dsfffffffffffffffffffffffffff//
//function open_panelSecond()
//{
//
//slide_second();
//var a=document.getElementById("sidebar");
//a.setAttribute("id","sidebar1");
//a.setAttribute("onclick","close_panel()");
//}
//
//
//
//function slide_second()
//{
//	var slidingDiv = document.getElementById("slider_secon");
//	var stopPosition = 0;
//	
//	if (parseInt(slidingDiv.style.left) < stopPosition )
//	{
//		slidingDiv.style.left = parseInt(slidingDiv.style.left) + 2 + "px";
//		setTimeout(slide_second, 1);	
//	}
//}
//	
//function close_panelSecond(){
//slideIn();
//a=document.getElementById("sidebar1");
//a.setAttribute("id","sidebar");
//a.setAttribute("onclick","open_panel()");
//}
//
//function slideInsecond()
//{
//	var slidingDiv = document.getElementById("slider_secon");
//	var stopPosition = -329;
//	
//	if (parseInt(slidingDiv.style.left) > stopPosition )
//	{
//		slidingDiv.style.right = parseInt(slidingDiv.style.left) - 2 + "px";
//		setTimeout(slideInsecond, 1);	
//	}
//}



