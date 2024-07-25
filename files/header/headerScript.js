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
	if(window.innerWidth > 650){ 	// Large Window
		header.innerHTML = "<div id='headerBar'> <img src='"+linkHead+"files/images/puertasNuevasLogoII.png' id='headerLogo' onclick='window.open("+'"'+linkHead+'"'+")'> \
							<div id='headerContent'><a href='"+linkHead+"places-to-visit'>Places to Visit</a> <a onmouseover='openTTD(1)'>Things to Do</a> <a href='"+linkHead+"planning'>Plan Your Visit</a> <a href='"+linkHead+"information'>Information</a></div> \
							<div id='menuContent'></div> <div id='closeMenu' onmouseover='openTTD(0)'></div> </div>";
		screenSize = 'large';
	}else{				// Small Window
		header.innerHTML = "<div id='headerBar'> <img src='"+linkHead+"files/images/puertasNuevasLogoII.png' id='headerLogo' onclick='window.open("+'"'+linkHead+'"'+")'> \
							<div id='headerContent'><a>Menu</a></div> <div id='menuContent'></div> </div>";
		screenSize = 'small';
	}
}// end of function createHeader()

// Resize header if the window size changes
window.onresize = function(){createHeader();};

function openTTD(num){
	const menuContent = document.getElementById("menuContent");
	const menuHidder = document.getElementById("closeMenu");
	if(num != 0){ // open menu
		menuContent.style.height = '0';
		menuContent.innerHTML = "<a>Attractions</a> <a>Restaurants</a> <a>Entertainment</a> <a>Museums & Art</a>";
		menuContent.style.display = 'block';
		menuHidder.style.display = 'block';
	}else { //close menu
		menuContent.style.height = '0';
		menuHidder.style.display = 'none';
		setTimeout(function(){menuContent.style.display = "none";},600);
	}
}
