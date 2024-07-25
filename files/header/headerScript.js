const header = document.getElementById("header");
const footer = document.getElementById("footer");
const loader = document.getElementById("loader");

const linkHead = "https://aztechadmit.github.io/visitpn/";

var screenSize = '';
var menuOpen = 'none';

function endPageLoad(){
	loader.style.opacity = 0;
	setTimeout(function(){loader.style.display='none'},1000);
}// end of function endPageLoad()

function createHeader(){
	if(window.innerWidth > 800){ 	// Large Window
		header.innerHTML = "<div id='headerBar'> <img src='"+linkHead+"files/images/puertasNuevasLogoII.png' id='headerLogo' onclick='window.open("+'"'+linkHead+'"'+")'> \
							<div id='headerContent'><a href='"+linkHead+"places-to-visit'>Places to Visit</a> <a onmouseover='openTTD(1)'>Things to Do</a> <a href='"+linkHead+"planning'>Plan Your Visit</a> <a href='"+linkHead+"information'>Information</a></div> \
							<div id='menuContent'></div> <div id='closeMenu' onmouseover='openTTD(0)'></div> </div>";
		screenSize = 'large';
	}else{				// Small Window
		header.innerHTML = "<div id='headerBar'> <img src='"+linkHead+"files/images/puertasNuevasLogoII.png' id='headerLogo' onclick='window.open("+'"'+linkHead+'"'+")'> \
							<div id='headerContent'><a onmouseover='openTTD(3)'>Menu</a></div> <div id='menuContent'></div> <div id='closeMenu' onmouseover='openTTD(0)'></div> </div>";
		screenSize = 'small';
	}
}// end of function createHeader()

// Resize header if the window size changes
window.onresize = function(){createHeader();};

function openTTD(num){
	const menuContent = document.getElementById("menuContent");
	const menuHidder = document.getElementById("closeMenu");
	if(num != 0 && menuContent.style.maxHeight == 0){ // open menu
		switch(num){
			case 1:
				menuContent.innerHTML = "<div id='imgHolders'>  <a><img src='https://cdn-icons-png.flaticon.com/512/152/152520.png'>Attractions</a> \
										<a><img src='https://cdn-icons-png.flaticon.com/512/152/152520.png'>Restaurants</a> \
										<a><img src='https://cdn-icons-png.flaticon.com/512/152/152520.png'>Entertainment</a> \
										<a><img src='https://cdn-icons-png.flaticon.com/512/152/152520.png'>Museums & Art</a> \
										<a><img src='https://cdn-icons-png.flaticon.com/512/152/152520.png'>Casinos & Resorts</a> </div>";
				break;
			case 2:
				break;
			case 3:
				menuContent.innerHTML = "<div id='txtHolders'> <a>Attractions</a> <a>Restaurants & Dining</a> <a>Entertainment</a> <a>Museums & Art</a> <a>Casinos & Resorts</a> </div>";
				break;
		} // end of switch statement
		
		menuContent.style.display = 'block';
		menuHidder.style.display = 'block';
		setTimeout(function(){menuContent.style.maxHeight = '1000px';},10);
		
	}else { //close menu
		menuContent.style.maxHeight = 0;
		menuHidder.style.display = 'none';
		setTimeout(function(){menuContent.style.display = "none";},1000);
	}
}
