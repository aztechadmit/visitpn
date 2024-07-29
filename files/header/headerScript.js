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
		menuContent.style.maxHeight = 0.75*screen.height + "px";
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
				menuContent.innerHTML = "<div id='txtHolders'> <a>Places to Visit</a> <a class='headerCollapsible'>Things to Do</a><div class='HCcontent'> <a>Attractions</a><a>Restaurants</a><a>Entertainment</a><a>Museums</a><a>Casinos & Resort</a> </div>\
							<a class='headerCollapsible'>Plan Your Visit</a><div class='HCcontent'><a>Places to Stay</a> <a>Airport & Transit</a> <a>Rental Services</a> <a>Visitor Guides</a></div> <a>Information</a></div>";
				break;
		} // end of switch statement

		menuHidder.style.display = 'block';
		menuContent.style.display = 'block';
		
	}else { //close menu
		menuContent.style.maxHeight = 0;
		menuHidder.style.display = 'none';
		setTimeout(function(){if(num==0){menuContent.style.display = "none";}},400);
	}
} // end of function openTTD()

function createFooter(){
	footer.innerHTML = "<div id='footerLinks'> 	<div><h4>Information</h4><a>Getting to Puertas Nuevas</a> <a>Visitor Guides</a> <a>Frequently Asked Questions</a> <a>Travel Updates</a></div> \
							<div><h4>Plan Your Visit</h4> <a>Transportation</a> <a>Rental Services</a> <a>Hotels & Lodging</a> <a>Destination Events</a> </div> \
							<div><h4>Explore PN</h4> <a>Things to Do</a> <a>Events & Festivals</a> <a>Attractions</a> <a>Casinos & Resorts</a> <a>Museums & History</a> <a>Art & Culture</a> </div> \
							<div><h4>Business Opportunities</h4> <a>Filming in PN</a> <a>Corporate Events</a> <a>Long-Term Visitors</a> </div> </div>";
	footer.innerHTML += "<img src='"+linkHead+"files/images/puertasNuevasLogoII.png' id='footerLogo' onclick='window.open("+'"'+linkHead+'", "_self"'+")'>";
	footer.innerHTML += "<p>&#169; 2024 Puertas Nuevas Ministry of Recreation | Department of Tourism</p><p><a>Legal Information</a> | <a>Business</a> | <a>MCBPO</a></p>";
}// end of function createFooter()

// For Collapsible Menus:
var HC = document.getElementsByClassName("headerCollapsible");
var Hi;

for (Hi = 0; Hi < HC.length; Hi++) {
  HC[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var HCcontent = this.nextElementSibling;
    if (HCcontent.style.display === "block") {
      HCcontent.style.display = "none";
    } else {
      HCcontent.style.display = "block";
    }
  });
}


