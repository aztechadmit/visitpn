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
		header.innerHTML = "<div id='headerBar'> <img src='"+linkHead+"files/images/puertasNuevasLogoII.png' id='headerLogo' onclick='window.open("+'"'+linkHead+'", "_self"'+")'> \
							<div id='headerContent'><a  onmouseover='openTTD(0)' href='"+linkHead+"places-to-visit'>Places to Visit</a> <a onmouseover='openTTD(1)'>Things to Do</a> <a  onmouseover='openTTD(2)' >Plan Your Visit</a> <a href='"+linkHead+"information'  onmouseover='openTTD(0)'>Information</a></div> \
							<div id='menuContent'></div> <div id='closeMenu' onmouseover='openTTD(0)'></div> </div>";
		screenSize = 'large';
	}else{				// Small Window
		header.innerHTML = "<div id='headerBar'> <img src='"+linkHead+"files/images/puertasNuevasLogoII.png' id='headerLogo' onclick='window.open("+'"'+linkHead+'"'+")'> \
							<div id='headerContent'><a onmouseover='openTTD(3)'>Menu</a></div> <div id='menuContent'></div> <div id='closeMenu' onmouseover='openTTD(0)'></div> </div>";
		screenSize = 'small';
	}

	createFooter();
}// end of function createHeader()

// Resize header if the window size changes
window.onresize = function(){createHeader();};

function openTTD(num){
	const menuContent = document.getElementById("menuContent");
	const menuHidder = document.getElementById("closeMenu");
	if(num != 0){ // open menu
		switch(num){
			case 1:
				menuContent.innerHTML = "<div id='imgHolders'>  <a><img src='https://cdn-icons-png.flaticon.com/512/152/152520.png'>Attractions</a> \
										<a><img src='https://cdn-icons-png.flaticon.com/512/152/152520.png'>Restaurants</a> \
										<a><img src='https://cdn-icons-png.flaticon.com/512/152/152520.png'>Entertainment</a> \
										<a><img src='https://cdn-icons-png.flaticon.com/512/152/152520.png'>Museums & Art</a> \
										<a><img src='https://cdn-icons-png.flaticon.com/512/152/152520.png'>Casinos & Resorts</a> </div>";
				break;
			case 2:
				menuContent.innerHTML = "<div id='imgHolders'>  <a><img src='https://cdn-icons-png.flaticon.com/512/152/152520.png'>Places to Stay</a> \
										<a><img src='https://cdn-icons-png.flaticon.com/512/152/152520.png'>Aiports and Transit</a> \
										<a><img src='https://cdn-icons-png.flaticon.com/512/152/152520.png'>Rental Services</a> \
										<a><img src='https://cdn-icons-png.flaticon.com/512/152/152520.png'>Visitor Guides</a> </div>";
				break;
			case 3:
				menuContent.innerHTML = "<div id='txtHolders'> <a>Attractions</a> <a>Restaurants & Dining</a> <a>Entertainment</a> <a>Museums & Art</a> <a>Casinos & Resorts</a> </div>";
				break;
		} // end of switch statement

		menuHidder.style.display = 'block';
		menuContent.style.display = 'block';
		menuContent.style.height = 'auto';
		
	}else { //close menu
		menuContent.style.height = 0;
		menuHidder.style.display = 'none';
		setTimeout(function(){if(num==0){menuContent.style.display = "none";}},450);
	}
} // end of function openTTD()

function createFooter(){
	footer.innerHTML = "<img src='"+linkHead+"files/images/puertasNuevasLogoII.png' id='footerLogo' onclick='window.open("+'"'+linkHead+'", "_self"'+")'>";
}// end of function createFooter()


