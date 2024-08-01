const header = document.getElementById("header");
const footer = document.getElementById("footer");
const loader = document.getElementById("loader");

const linkHead = "https://aztechadmit.github.io/visitpn/";

var screenSize = '';
var menuOpen = 'none';

var headLoaded = 0;

function endPageLoad(){
	loader.style.opacity = 0;
	setTimeout(function(){loader.style.display='none'},500);
}// end of function endPageLoad()

function createHeader(){
	//Populate loader:
	document.getElementById("loader").innerHTML = "<img src='"+linkHead+"files/images/webfavicon.ico'>";
	
	if(headLoaded != 1){populateDocHead(); headLoaded = 1;}
	if(window.innerWidth > 800){ 	// Large Window
		header.innerHTML = "<div id='headerBar'> <img src='"+linkHead+"files/images/puertasNuevasLogoII.png' id='headerLogo' onclick='window.open("+'"'+linkHead+'", "_self"'+")'> \
							<div id='headerContent'><a  onmouseover='openMenus(0)' href='"+linkHead+"places-to-visit'>Places to Visit</a> <a onmouseover='openMenus(1)' href='"+linkHead+"things-to-do'>Things to Do</a> <a  onmouseover='openMenus(2)' >Plan Your Visit</a> <a href='"+linkHead+"information'  onmouseover='openMenus(0)'>Information</a></div> \
							<div class='menuContent' id='ttdMenu'></div> <div class='menuContent' id='pyvMenu'></div> <div id='closeMenu' onmouseover='openMenus(0)'></div> </div>";
		screenSize = 'large';
		
		const ttdMenu = document.getElementById("ttdMenu");
		ttdMenu.innerHTML = "<div class='imgHolders'>  <a href='"+linkHead+"things-to-do?category=1'><img src='"+linkHead+"files/images/menuIcons/menuIcon.png'>Attractions</a> \
										<a href='"+linkHead+"things-to-do?category=3'><img src='"+linkHead+"files/images/menuIcons/menuIcon(1).png'>Restaurants</a> \
										<a href='"+linkHead+"things-to-do?category=5'><img src='"+linkHead+"files/images/menuIcons/menuIcon(3).png'>Entertainment</a> \
										<a href='"+linkHead+"things-to-do?category=7'><img src='"+linkHead+"files/images/menuIcons/menuIcon(4).png'>Museums</a> \
										<a href='"+linkHead+"things-to-do'><img src='"+linkHead+"files/images/menuIcons/menuIcon(5).png'>View All</a> </div>";
		const pyvMenu = document.getElementById("pyvMenu");
		pyvMenu.innerHTML = "<div class='imgHolders'>  <a><img src='"+linkHead+"files/images/menuIcons/menuIcon(6).png'>Places to Stay</a> \
										<a><img src='"+linkHead+"files/images/menuIcons/menuIcon(7).png'>Aiports and Transit</a> \
										<a><img src='"+linkHead+"files/images/menuIcons/menuIcon(8).png'>Rental Services</a> \
										<a><img src='"+linkHead+"files/images/menuIcons/menuIcon(10).png'>Visitor Guides</a> </div>";
		
	}else{				// Small Window
		header.innerHTML = "<div id='headerBar'> <img src='"+linkHead+"files/images/puertasNuevasLogoII.png' id='headerLogo' onclick='window.open("+'"'+linkHead+'"'+")'> \
							<div id='headerContent'><a onclick='miniMenus()' style='cursor:pointer' id='menDispTxt'>Menu</a></div> <div class='menuContent' id='allMenu'></div> <div id='closeMenu' onmouseover='miniMenus()'></div> </div>";
		const allMenu = document.getElementById("allMenu");
		allMenu.innerHTML = "<div class='txtHolders'> <a>Places to Visit</a> <a class='headerCollapsible'>Things to Do</a><div class='HCcontent'> <a href='"+linkHead+"things-to-do'>View All</a><a href='"+linkHead+"things-to-do?category=1'>Attractions</a><a href='"+linkHead+"things-to-do?category=3'>Restaurants</a><a href='"+linkHead+"things-to-do?category=5'>Entertainment</a><a href='"+linkHead+"things-to-do?category=7'>Museums & Galleries</a> </div>\
							<a class='headerCollapsible'>Plan Your Visit</a><div class='HCcontent'><a>Places to Stay</a> <a>Airport & Transit</a> <a>Rental Services</a> <a>Visitor Guides</a></div> <a>Information</a></div>";
		screenSize = 'small';

		var coll = document.getElementsByClassName("headerCollapsible");
		var i;
		
		for (i = 0; i < coll.length; i++) {
		  coll[i].addEventListener("click", function() {
		    this.classList.toggle("active");
		    var content = this.nextElementSibling;
		    if (content.style.display === "block") {
		      content.style.display = "none";
		    } else {
		      content.style.display = "block";
		    }
		  });
		}
		
	}// end of small menu creator

	createFooter();
}// end of function createHeader()

// Resize header if the window size changes
window.onresize = function(){createHeader();};

var menuIsClosed = 1;

function openMenus(num){
	const ttdMenu = document.getElementById("ttdMenu");
	const pyvMenu = document.getElementById("pyvMenu");
	const closeMenu = document.getElementById("closeMenu");

	switch(num){
		case 0:
			ttdMenu.style.maxHeight = '0';
			pyvMenu.style.maxHeight = '0';
			closeMenu.style.display = 'none';
			menuIsClosed = 1;
			setTimeout(function(){if(menuIsClosed == 1){ttdMenu.style.display='none'; pyvMenu.style.display='none';}},400);
			break;
		case 1:
			ttdMenu.style.display = 'block';
			pyvMenu.style.display = 'none';
			setTimeout(function(){ttdMenu.style.maxHeight = '800px'; closeMenu.style.display = 'block';},10);
			menuIsClosed = 0;
			break;
		case 2:
			pyvMenu.style.display = 'block';
			ttdMenu.style.display = 'none';
			setTimeout(function(){pyvMenu.style.maxHeight = '800px'; closeMenu.style.display = 'block';},10);
			menuIsClosed = 0;
			break;
	}// end of switch
	
} // end of function openMenus()

miniMenuStaus = 0;

function miniMenus(){
	const allMenu = document.getElementById("allMenu");
	const menDispTxt = document.getElementById("menDispTxt");
	const allMenHide = document.getElementById("closeMenu");
	switch(miniMenuStaus){
		case 1:
			menDispTxt.innerHTML = "Menu";
			allMenu.style.display = 'none';
			allMenHide.style.display = 'none';
			miniMenuStaus = 0;
			break;
		case 0:
			menDispTxt.innerHTML = "Close Menu";
			allMenu.style.display = 'block';
			allMenu.style.maxHeight = 0.70*window.innerHeight + "px";
			allMenHide.style.display = 'block';
			miniMenuStaus = 1;
			break;
	}// end of switch
}// end of function miniMenus(num)

function createFooter(){
	footer.innerHTML = "<div id='footerLinks'> 	<div><h4>Information</h4><a>Getting to Puertas Nuevas</a> <a>Visitor Guides</a> <a>Frequently Asked Questions</a> <a>Travel Updates</a></div> \
							<div><h4>Plan Your Visit</h4> <a>Transportation</a> <a>Rental Services</a> <a>Hotels & Lodging</a> <a>Destination Events</a> </div> \
							<div><h4>Explore PN</h4> <a href='"+linkHead+"things-to-do'>Things to Do</a> <a>Events & Festivals</a> <a href='"+linkHead+"things-to-do?category=1'>Attractions</a> <a href='"+linkHead+"things-to-do?category=3'>Restaurants</a> <a href='"+linkHead+"things-to-do?category=7'>Sports & Recreation</a> <a href='"+linkHead+"things-to-do?category=4'>Shopping & Snacking</a> </div> \
							<div><h4>Business Opportunities</h4> <a href='"+linkHead+"business/filmpn'>Filming in PN</a> <a>Corporate Events</a> <a>Long-Term Visitors</a> </div> </div>";
	footer.innerHTML += "<div class='spacer'></div>";
	footer.innerHTML += "<img src='"+linkHead+"files/images/puertasNuevasLogoII.png' id='footerLogo'>";
	footer.innerHTML += "<p>&#169; 2024 Puertas Nuevas Ministry of Recreation | Department of Tourism & Hospitality</p> \
				<p style='color:midnightblue'><b>(311) 045 1000</b> &#183; <a href='mailto:reuvenmine@gmail.com'>dth-pnmr@pn.gov</a></p> \
				<p><a>Legal Information</a> | <a>Business</a> | <a href='"+linkHead+"business/mcbpo'>MCBPO</a></p>";
}// end of function createFooter()

function populateDocHead(){
	console.log("populating head (" + headLoaded + ")");
	document.head.innerHTML += '<link rel="icon" type="image/x-icon" href="https://aztechadmit.github.io/visitpn/files/images/webfavicon.ico"> \
					<link rel="stylesheet" href="https://aztechadmit.github.io/visitpn/files/styleSheet.css"> \
	 				<link rel="stylesheet" href="https://aztechadmit.github.io/visitpn/files/header/headerStyle.css"> \
					<link href="https://fonts.googleapis.com/css?family=Akatab|Anuphan" rel="stylesheet">';
}

function miniMenuSetup(){
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
	console.log("miniMenu");
}



