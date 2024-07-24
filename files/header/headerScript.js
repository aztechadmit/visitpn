const header = document.getElementById("header");
const footer = document.getElementById("footer");
const loader = document.getElementById("loader");

const linkHead = "https://aztechadmit.github.io/visitpn/";

function endPageLoad(){
	loader.style.opacity = 0;
	setTimeout(function(){loader.style.display='none'},1000);
}// end of function endPageLoad()

function createHeader(){
	if(window.innerWidth > 650){ 	// Large Window
		header.innerHTML = "<div id='headerBar'> <img src='"+linkHead+"files/images/puertasNuevasLogoII.png' id='headerLogo' onclick='window.open("+'"'+linkHead+'"'+")'> \
							<div id='headerContent'><a>Places to Visit</a> <a>Things to Do</a> <a>Plan Your Visit</a> <a>Information</a></div> </div>";
		
	}else{				// Small Window
		header.innerHTML = "<div id='headerBar'> <img src='"+linkHead+"files/images/puertasNuevasLogoII.png' id='headerLogo' onclick='window.open("+'"'+linkHead+'"'+")'> \
							<div id='headerContent'><a>Menu<a></div> </div>";
	}
}// end of function createHeader()

// Resize header if the window size changes
window.onresize = function(){createHeader();};
